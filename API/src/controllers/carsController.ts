import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import carModel from "../models/car";
import { getCarValue, getRiskRating, getQuote } from "../services/carServices";

export const getCars: RequestHandler = async (req, res, next) => {
  try {
    const cars = await carModel.find().exec();
    res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
};

export const getCar: RequestHandler = async (req, res, next) => {
  const carId = req.params.carId;
  try {
    if (!mongoose.isValidObjectId(carId)) {
      throw createHttpError(400, "invalid car ID");
    }

    const car = await carModel.findById(carId).exec();
    if (!car) {
      throw createHttpError(404, "Car not found");
    }
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
};

interface CreateCarBody {
  model?: string;
  year?: string;
}

export const createCar: RequestHandler<unknown, unknown, CreateCarBody, unknown> = async (req, res, next) => {
  const model = req.body.model;
  const year = req.body.year;
  try {
    if (!model || !year) {
      throw createHttpError(400, "Car must have both model and year");
    }
    const newCar = await carModel.create({
      model,
      year,
    });
    res.status(200).json(newCar);
  } catch (error) {
    next(error);
  }
};

interface updateCarParams {
  carId?: string;
}

interface updateCarBody {
  model?: string;
  year?: number;
}

export const updateCar: RequestHandler<updateCarParams, unknown, updateCarBody, unknown> = async (req, res, next) => {
  const carId = req.params.carId;
  const newModel = req.body.model;
  const newYear = req.body.year;
  try {
    if (!mongoose.isValidObjectId(carId)) {
      throw createHttpError(400, "invalid car ID");
    }

    if (!newModel && !newYear) {
      throw createHttpError(400, "update car must have either model or year");
    }

    const car = await carModel.findById(carId).exec();
    if (!car) throw createHttpError(404, "car not found");

    car.model = newModel;
    car.year = newYear;

    const updatedCar = await car.save();
    res.status(200).json(updatedCar);
  } catch (error) {
    next(error);
  }
};

export const deleteCar: RequestHandler = async (req, res, next) => {
  const carId = req.params.carId;
  try {
    if (!mongoose.isValidObjectId(carId)) {
      throw createHttpError(400, "invalid car ID");
    }

    const car = await carModel.findById(carId).exec();
    if (!car) {
      throw createHttpError(404, "car not found");
    }

    await car.remove();

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const convertToCarValue: RequestHandler = (req, res) => {
  const model = req.body.model;
  const year = req.body.year;

  if (!model || !year) {
    throw createHttpError(400, "request must include both model and year");
  }

  if (typeof year !== "number" || !Number.isInteger(year)) {
    throw createHttpError(400, "Wrong data type: Year should be integer");
  }

  if (year <= 0) {
    throw createHttpError(400, "Invalid input: Negative Year");
  } else if (year < 1990 || year > 2023) {
    throw createHttpError(400, "Invalid input: year should be between 1990 and 2023");
  }

  res.status(200).json(getCarValue(model, year));
};

export const convertToRiskRating: RequestHandler = (req, res) => {
  // const claimArr: string[] = req.body.claim_history.split(" ");
  const claim = req.body.claim_history;
  if (claim.length === 0) {
    throw createHttpError(400, "invalid input: empty string");
  }

  res.status(200).json(getRiskRating(claim));
};

export const convertQuote: RequestHandler = (req, res) => {
  const carVaule = req.body.car_value;
  const riskRating = req.body.risk_rating;

  if (carVaule === undefined || riskRating === undefined) {
    throw createHttpError(400, "request must include both carVaule and riskRating");
  }

  if (typeof carVaule !== "number" || typeof riskRating !== "number") {
    throw createHttpError(400, "Wrong data type");
  }

  if (riskRating < 1 || riskRating > 5) {
    throw createHttpError(400, "risk rating should be 1-5");
  }

  if (carVaule < 0) {
    throw createHttpError(400, "Negative invalid input");
  }

  res.status(200).json(getQuote(carVaule, riskRating));
};
