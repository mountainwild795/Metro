import express from "express";
import * as CarsController from "../controllers/carsController";

const router = express.Router();

router.get("/", CarsController.getCars);

router.get("/:carId", CarsController.getCar);

router.post("/", CarsController.createCar);

router.patch("/:carId", CarsController.updateCar);

router.delete("/:carId", CarsController.deleteCar);

router.post("/carValue", CarsController.convertToCarValue);

router.post("/riskRating", CarsController.convertToRiskRating);

router.post("/quote", CarsController.convertQuote);

export default router;
