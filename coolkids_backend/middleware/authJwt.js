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

exports.verifyToken = (req, res, next) => {
	const token = req.headers["authorization"]?.split(" ")[1];
	if (!token) {
		return res.status(403).send({ message: "No token provided!" });
	}

	jwt.verify(token, secretKey, (err, decoded) => {
		if (err) {
			return res.status(401).send({ message: "Unauthorized!" });
		}
		req.userId = decoded.id;
		next();
	});
};
