const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const {
	getUserDataByEmailService,
	createNewUserService,
	getAllUserDataFilteredService,
} = require("../services/users.service");

// const Op = db.Sequelize.Op;

exports.getUserDetails = async (req, res) => {
	if (req.query && req.query.email) {
		let data = await getUserDataByEmailService(req.query.email);
		res.send(data);
	} else {
		res.status(400).send("No data provided");
	}
};

exports.createNewUser = async (req, res) => {
	if (req.query && req.query.email) {
		let data = await createNewUserService(req.query.email);
		res.send(data);
	} else {
		res.status(400).send("No data provided");
	}
};

exports.getAllUserDataFiltered = async (req, res) => {
	if (req.query && req.query.requestor_email) {
		let data = await getAllUserDataFilteredService(
			req.query.requestor_email
		);
		if (data) {
			res.send(data);
		} else {
			res.status(418).send("I'm a Teapot");
		}
	} else {
		res.status(400).send("No data provided");
	}
};
