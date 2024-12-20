module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("users", {
		firstname: {
			type: Sequelize.STRING,
		},
		lastname: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
			unique: true,
		},
		password: {
			type: Sequelize.STRING,
		},
		role: {
			type: Sequelize.STRING,
		},
		country: {
			type: Sequelize.STRING,
		},
	});

	return User;
};
