const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
// const BlacklistTokenModel = require("../models/blacklistToken.model");
const blacklistTokenModel = require("../models/blacklistToken.model");
module.exports.registerUser = async (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { fullname, email, password } = req.body;
	const isUserAlreadyExist = await userModel.findOne({ email });
	if (isUserAlreadyExist) {
		return res.status(400).json({ message: "User already exists" });
	}
	const hashedPassword = await userModel.hashPassword(password);

	const user = await userService.createUser({
		firstname: fullname.firstname,
		lastname: fullname.lastname,
		email,
		password: hashedPassword,
	});

	const token = user.generateAuthToken();
	res.status(201).json({ user, token });
};

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        // Find user and explicitly include password field
        const user = await userModel.findOne({ email }).select('+password');
        
        if (!user) {
            return res.status(401).json({ 
                success: false,
                message: "Invalid email or password" 
            });
        }

        // Debug password comparison
        const isMatch = await user.comparePassword(password);
        
        if (!isMatch) {
            return res.status(401).json({ 
                success: false,
                message: "Invalid email or password" 
            });
        }

        // Generate token and remove password from response
        const token = user.generateAuthToken();
        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        });

        return res.status(200).json({
            success: true,
            user: userWithoutPassword,
            token
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred during login",
            error: error.message
        });
    }
};

module.exports.getUserProfile = async (req, res, next) => {
	res.status(200).json(req.user);
};
module.exports.logoutUser = async (req, res, next) => {
	res.clearCookie("token");
	const token = req.cookies.token || req.headers.authorization.split(" ")[1];
	await blacklistTokenModel.create({ token });
	res.status(200).json({ message: "Logged out" });
};
