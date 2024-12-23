const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.config");

const secretKey = authConfig.secret;

exports.generateToken = (email) => {
	const payload = {
		email,
		role: "maintainer",
	};

	const options = {
		expiresIn: authConfig.expiresIn, // Token expiration time
	};

	return jwt.sign(payload, secretKey, options);
};
