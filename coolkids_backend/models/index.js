const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
	host: config.HOST,
	dialect: config.dialect,
	logging: false,
	port: config.PORT,
	// operatorsAliases: false,

	pool: {
		max: config.pool.max,
		min: config.pool.min,
		acquire: config.pool.acquire,
		idle: config.pool.idle,
	},
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./users.model.js")(sequelize, Sequelize);
db.maintainer = require("../models/maintainer.model.js")(sequelize, Sequelize);

module.exports = db;
