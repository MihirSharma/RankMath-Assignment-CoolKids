const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Op = db.Sequelize.Op;
const { getRandomUserDataService } = require("./getRandomUserData.service");

exports.getUserDataByEmailService = async (email) => {
	let userData = await User.findOne({
		where: {
			email,
		},
	});

	return userData;
};

exports.createNewUserService = async (email) => {
	let userData = await this.getUserDataByEmailService(email);

	if (!userData) {
		let randomUser = await getRandomUserDataService();
		// console.log(randomUser);
		let data = randomUser && randomUser.results[0];
		let newUser = null;
		if (data) {
			newUser = await User.create({
				firstname: data.name.first,
				lastname: data.name.last,
				email: email,
				password: "",
				role: "coolkid",
				country: data.location.country,
			});
		}
		return newUser;
	} else {
		return "User with this Email already exists!";
	}
};

exports.getAllUserDataFilteredService = async (requestor_email) => {
	let userData = await this.getUserDataByEmailService(requestor_email);
	if (userData && userData.role === "coolkid") {
		return false;
	} else if (userData && userData.role === "coolerkid") {
		let data = await User.findAll({
			attributes: ["firstname", "lastname", "country"],
		});
		return data;
	} else if (userData && userData.role === "coolestkid") {
		let data = await User.findAll({
			attributes: ["firstname", "lastname", "country", "role", "email"],
		});
		return data;
	} else {
		return false;
	}
};
