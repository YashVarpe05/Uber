const mapService = require("../services/maps.service");
const { validationResult } = require("express-validator");

module.exports.getCoordinates = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const { address } = req.query;

	try {
		const coordinates = await mapService.getAddressCoordinate(address);
		res.status(200).json({ coordinates });
	} catch (error) {
		console.error("Error fetching coordinates:", error);
		res.status(500).json({ error: "Failed to fetch coordinates" });
	}
};

module.exports.getDistanceTime = async (req, res, next) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { origin, destination } = req.query;
		const distanceTime = await mapService.getDistanceTime(origin, destination);
		res.status(200).json({ distanceTime });
	} catch (error) {
		console.error("Error fetching distance and time:", error);
		res.status(500).json({ error: "Failed to fetch distance and time" });
	}
};

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { input } = req.query;
		const suggestions = await mapService.getAutoCompleteSuggestions(input);
		res.status(200).json({ suggestions });
	} catch (error) {
		console.error("Error fetching autocomplete suggestions:", error);
		res.status(500).json({ error: "Failed to fetch autocomplete suggestions" });
	}
};
