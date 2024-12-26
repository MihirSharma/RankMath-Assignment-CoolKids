// const { authJwt } = require("../middleware");
const controller = require("../controllers/users.controller");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.get("/api/login", controller.getUserDetails);
	app.get("/api/get_user_details", controller.getUserDetails);
	app.get("/api/create_new_user", controller.createNewUser);
	app.get(
		"/api/get_all_user_data_filtered",
		controller.getAllUserDataFiltered
	);
};
