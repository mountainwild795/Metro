import express from "express";
import * as housesController from "../controllers/housesController";

const router = express.Router();

router.get("/", housesController.getHouses);

router.get("/:houseId", housesController.getHouse);

// router.post("/", housesController.createHouse);

// router.patch("/:houseId", housesController.updateHouse);

// router.delete("/:houseId", housesController.deleteHouse);

// router.post("/carValue", housesController.convertToCarValue);

// router.post("/riskRating", housesController.convertToRiskRating);

// router.post("/quote", housesController.convertQuote);

export default router;
