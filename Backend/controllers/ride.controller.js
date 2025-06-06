const rideService = require("../services/ride.service");
const { validationResult } = require("express-validator");

module.exports.createRide = async (req, res) => {
	const error = validationResult(req);
	if (!error.isEmpty()) {
		return res.status(400).json({ error: error.array() });
	}
	const { userId, pickup, destination, vehicleType } = req.body;
	try {
		const ride = await rideService.createRide({
			user: req.user._id,
			pickup,
			destination,
			vehicleType,
		});
		return res.status(201).json({ ride });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports.getFare = async (req, res) => {
	const error = validationResult(req);
	if (!error.isEmpty()) {
		return res.status(400).json({ error: error.array() });
	}
	const { pickup, destination } = req.query;
	try {
		const fare = await rideService.getFare(pickup, destination);
		console.log("Sending fare:", fare); // Log the fare object
		// Return the fare object directly instead of nesting it
		return res.status(200).json(fare);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};
