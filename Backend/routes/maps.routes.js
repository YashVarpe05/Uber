const express = require("express");
const router = express.Router();
const mapController = require("../controllers/map.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const { query } = require("express-validator");

router.get(
	"/get-coordinates",
	query("address")
		.isString()
		.isLength({ min: 3 })
		.notEmpty()
		.withMessage("Address is required"),
	authMiddleware.authUser,
	mapController.getCoordinates
);

router.get(
	"/get-distance-time",
	query("origin")
		.isString()
		.isLength({ min: 3 })
		.notEmpty()
		.withMessage("Origin is required"),
	query("destination")
		.isString()
		.isLength({ min: 3 })
		.notEmpty()
		.withMessage("Destination is required"),

	authMiddleware.authUser,
	mapController.getDistanceTime
);

router.get(
	"/get-suggestions",
	query("input").isString().notEmpty().withMessage("Input is required"),
	authMiddleware.authUser,
	mapController.getAutoCompleteSuggestions
);

module.exports = router;
