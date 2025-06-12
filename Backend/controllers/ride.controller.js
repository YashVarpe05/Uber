const rideService = require("../services/ride.service");
const { validationResult } = require("express-validator");
const mapService = require("../services/maps.service.js");
const { sendMessageToSocketId } = require("../socket.js");
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
		res.status(201).json({ ride });
		const pickupCoordinates = await mapService.getAddressCoordinate(pickup);
		const captainsInRadius = await mapService.getCaptainsInTheRadius(
			pickupCoordinates.ltd,
			pickupCoordinates.lng
		);
		ride.otp = "";
		captainsInRadius.map(async (captain) => {
			sendMessageToSocketId(captain.socketId, {
				event: "new-ride",
				data: ride,
			});
		});
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
