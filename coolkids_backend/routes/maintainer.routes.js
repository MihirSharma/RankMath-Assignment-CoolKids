const controller = require("../controllers/maintainer.controller");
const authJwt = require("../middleware/authJwt");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.post("/api/auth/login", (req, res) => {
		const token = authJwt.generateToken(req.body.email);
		res.json({ token });
	});

	app.get(
		"/api/maintainer/get_user_details",
		authJwt.verifyToken,
		controller.getUserDetailsMaintainer
	);
	app.get(
		"/api/maintainer/get_all_user_data",
		authJwt.verifyToken,
		controller.getAllUserDataMaintainer
	);
	app.post(
		"/api/maintainer/update_user_role",
		authJwt.verifyToken,
		controller.updateUserRole
	);
};
