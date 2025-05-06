const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

router.post(
	"/create",
	body("userId")
		.isString()
		.isLength({ min: 24, max: 24 })
        .withMessage("User ID is required and must be 24 characters long"),
    body("pickupLocation")
        .isString().isLength({ min: 3 })
        .withMessage("Pickup location is required"),body('destinaition').isString()
        .isLength({ min: 3 }).withMessage("Destination is required "),
);

module.exports = router;
