const mongoose = require("mongoose");
const rideSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	captain: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Captain",
		required: true,
	},
	pickup: {
		type: String,
		required: true,
	},
	fare: {
		type: Number,
		required: true,
	},
	status: {
		type: String,
		enum: ["pending", "accepted", "completed", "cancelled"],
		default: "pending",
	},
	duration: {
		type: Number,
		required: true,
	},
	distance: {
		type: Number,
		required: true,
	},
	paymentID: {
		type: String,
		required: true,
	},
	orderID: {
		type: String,
		required: true,
	},
	signature: {
		type: String,
		required: true,
	},
});
