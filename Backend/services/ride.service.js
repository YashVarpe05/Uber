const rideModel = require("../models/ride.model");
const mapService = require("./maps.service");

module.exports.createRide = async (req, res) => {};

const getFare = async (pickup, destination) => {
	if (!pickup || !destination) {
		throw new Error("Pickup and destination are required");
	}
	const distanceTime = await mapService.getDistanceTime(pickup, destination);
	return 0;
};
