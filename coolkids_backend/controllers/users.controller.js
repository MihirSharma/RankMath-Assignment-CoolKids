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
	let data = await getUserDataByEmailService(req.query.email);
	res.send(data);
};

exports.createNewUser = async (req, res) => {
	console.log(req.query);
	let data = await createNewUserService(req.query.email);
	res.send(data);
};

exports.getAllUserDataFiltered = async (req, res) => {
	console.log(req.query.requestor_email);
	let data = await getAllUserDataFilteredService(req.query.requestor_email);
	if (data) {
		res.send(data);
	} else {
		res.status(418).send("I'm a Teapot");
	}
};
