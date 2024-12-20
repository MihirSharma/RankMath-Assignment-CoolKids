module.exports = (sequelize, Sequelize) => {
	const Maintainer = sequelize.define("maintainer", {
		email: {
			type: Sequelize.STRING,
			unique: true,
		},
		password: {
			type: Sequelize.STRING,
		},
	});

	return Maintainer;
};
