const db = require("../models");
// const config = require("../config/auth.config");
const User = db.maintainer;
const {
	getUserDataByEmailService,
	getAllUserDataService,
	updateUserRoleService,
} = require("../services/maintainer.service");

// const Op = db.Sequelize.Op;

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
