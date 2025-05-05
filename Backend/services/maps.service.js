const axios = require("axios");

module.exports.getAddressCoordinate = async (address) => {
	const apiKey = process.env.GOOGLE_MAPS_API; // Make sure to set this in your environment
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
		address
	)}&key=${apiKey}`;
	try {
		const response = await axios.get(url);
		const results = response.data.results;
		if (results && results.length > 0) {
			const location = results[0].geometry.location;
			return { lat: location.lat, lng: location.lng };
		} else {
			throw new Error("No results found for the given address");
		}
	} catch (error) {
		throw new Error("Failed to fetch coordinates: " + error.message);
	}
};

module.exports.getDistanceTime = async (origin, destination) => {
	if (!origin || !destination) {
		throw new Error("Origin and destination are required");
	}
	const apiKey = process.env.GOOGLE_MAPS_API; // Make sure to set this in your environment
	const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
		origin
	)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;
	try {
		const response = await axios.get(url);
		const results = response.data.rows[0].elements[0];
		if (results && results.status === "OK") {
			return {
				distance: results.distance.text,
				duration: results.duration.text,
			};
		} else {
			throw new Error("No results found for the given origin and destination");
		}
	} catch (error) {
		throw new Error("Failed to fetch distance and time: " + error.message);
	}
};

module.exports.getAutoCompleteSuggestions = async (input) => {
	if (!input) {
		throw new Error("Input is required");
	}
	const apiKey = process.env.GOOGLE_MAPS_API; // Make sure to set this in your environment
	const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
		input
	)}&key=${apiKey}`;
	try {
		const response = await axios.get(url);
		const predictions = response.data.predictions;
		if (predictions && predictions.length > 0) {
			return predictions.map((prediction) => prediction.description);
		} else {
			throw new Error("No suggestions found for the given input");
		}
	} catch (error) {
		throw new Error("Failed to fetch suggestions: " + error.message);
	}
};
