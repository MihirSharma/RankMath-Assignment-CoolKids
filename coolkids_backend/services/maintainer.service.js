const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Maintainer = db.maintainer;
const Op = db.Sequelize.Op;
const { getRandomUserDataService } = require("./getRandomUserData.service");

exports.loginMaintainerService = async (email, password) => {
	let maintainerData = await Maintainer.findOne({
		where: {
			email,
			password,
		},
	});

	return maintainerData;
};

exports.getUserDataByEmailService = async (email) => {
	let userData = await User.findOne({
		where: {
			email,
		},
	});

	return userData;
};

exports.getAllUserDataService = async () => {
	let data = await User.findAll({
		attributes: ["firstname", "lastname", "country", "role", "email"],
	});
	return data;
};

exports.updateUserRoleService = async (email, newRole) => {
	let user = await User.findOne({
		where: {
			email,
		},
	});

	if (user) {
		user.role = newRole;
		await user.save();
		let response = `User with email ${email} has had their role changed to ${newRole}.`;
		return response;
	} else {
		throw new Error(`User with email ${email} not found.`);
	}
};
