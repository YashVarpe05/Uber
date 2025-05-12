const rideModel = require("../models/ride.model.js");
const mapService = require("./maps.service");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const getFare = async (pickup, destination) => {
	if (!pickup || !destination) {
		throw new Error("Pickup and destination are required");
	}
	const distanceTime = await mapService.getDistanceTime(pickup, destination);
	const baseFare = {
		auto: 30,
		car: 50,
		motorcycle: 20,
	};
	const perKmRate = {
		auto: 10,
		car: 15,
		motorcycle: 8,
	};
	const perMinuteRate = {
		auto: 2,
		car: 3,
		motorcycle: 1.5,
	};
	console.log(distanceTime);

	const fare = {
		auto: Math.round(
			baseFare.auto +
				(distanceTime.distance.value / 1000) * perKmRate.auto +
				(distanceTime.duration.value / 60) * perMinuteRate.auto
		),
		car: Math.round(
			baseFare.car +
				(distanceTime.distance.value / 1000) * perKmRate.car +
				(distanceTime.duration.value / 60) * perMinuteRate.car
		),
		motorcycle: Math.round(
			baseFare.motorcycle +
				(distanceTime.distance.value / 1000) * perKmRate.motorcycle +
				(distanceTime.duration.value / 60) * perMinuteRate.motorcycle
		),
	};
	return fare;
};

module.exports.getFare = getFare;

// const getOTP = async (num) => {
// 	const otp = Array.from({ length: num }, () => crypto.randomInt(0, 10)).join(
// 		""
// 	);
// 	const salt = await bcrypt.genSalt(10);
// 	const hashedOtp = await bcrypt.hash(otp, salt);
// 	return { otp, hashedOtp };
// };

const getOTP = async (num) => {
	const generateOtp = () => {
		const otp = crypto
			.randomInt(Math.pow(10, num - 1), Math.pow(10, num))
			.toString();
		return otp;
	};
	return generateOtp(num);
};
module.exports.createRide = async ({
	user,
	pickup,
	destination,
	vehicleType,
}) => {
	if (!user || !pickup || !destination || !vehicleType) {
		throw new Error("User, pickup, destination, and vehicle type are required");
	}
	const fare = await getFare(pickup, destination);
	console.log(fare);

	// Get the OTP and await the promise before saving to the model
	// const otpData = await getOTP(6);

	const ride = await rideModel.create({
		user,
		pickup,
		destination,
		otp: await getOTP(6), // Await the resolved value of getOTP
		fare: fare[vehicleType],
	});
	return ride;
};
