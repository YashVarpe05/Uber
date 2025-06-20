const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
const captainRoutes = require("./routes/captain.routes");
const mapsRoutes = require("./routes/maps.routes");
const rideRoutes = require("./routes/ride.routes");
connectToDb();

// CORS configuration
app.use(
	cors({
		origin: [
			process.env.NODE_ENV === "production"
				? process.env.FRONTEND_URL
				: "http://localhost:5173",
			"https://fjclf5gk-5173.inc1.devtunnels.ms", // Add your dev tunnel URL
		],
		credentials: true,
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", (req, res) => {
	res.send("Hello World");
});
app.use("/captains", captainRoutes);

app.use("/rides", rideRoutes);
app.use("/users", userRoutes);
app.use("/maps", mapsRoutes);

module.exports = app;
