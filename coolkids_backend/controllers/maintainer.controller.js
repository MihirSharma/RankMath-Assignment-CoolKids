const db = require("../models");
// const config = require("../config/auth.config");
const User = db.maintainer;
const {
	getUserDataByEmailService,
	getAllUserDataService,
	updateUserRoleService,
	loginMaintainerService,
} = require("../services/maintainer.service");
const authJwt = require("../middleware/authJwt");

// const Op = db.Sequelize.Op;

exports.loginMaintainer = async (req, res) => {
	if (req.body && req.body.email && req.body.password) {
		let data = await loginMaintainerService(
			req.body.email,
			req.body.password
		);
		// console.log(data);
		if (data) {
			const token = authJwt.generateToken(req.body.email);
			let response = { token, role: "maintainer" };
			res.send(response);
		} else {
			res.status(401).send("Invalid email or password");
		}
	} else {
		res.status(400).send("No data provided");
	}
};

exports.getUserDetailsMaintainer = async (req, res) => {
	if (req.query && req.query.email) {
		let data = await getUserDataByEmailService(req.query.email);
		res.send(data);
	} else {
		res.status(400).send("No data provided");
	}
};

exports.getAllUserDataMaintainer = async (req, res) => {
	let data = await getAllUserDataService();
	res.send(data);
};

exports.updateUserRole = async (req, res) => {
	if (req.body && req.body.email && req.body.newRole) {
		let data = await updateUserRoleService(
			req.body.email,
			req.body.newRole
		);
		res.send(data);
	} else {
		res.status(400).send("No data provided");
	}
};
