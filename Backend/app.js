const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
const captainRoutes = require("./routes/captain.routes");
connectToDb();

// CORS configuration
app.use(
	cors({
		origin:
			process.env.NODE_ENV === "production"
				? process.env.FRONTEND_URL
				: "http://localhost:5173",
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

app.use("/users", userRoutes);

module.exports = app;
