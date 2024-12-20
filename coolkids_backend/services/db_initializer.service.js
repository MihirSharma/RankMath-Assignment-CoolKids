const db = require("../models");
const maintainer = db.maintainer;

const dbinit = async () => {
	let count = await maintainer.count({});
	if (count <= 0) {
		await maintainer.create({
			id: 1,
			email: "admin@admin.com",
			password: "admin",
		});
	}
	db.sequelize.sync();
};

module.exports = dbinit;
