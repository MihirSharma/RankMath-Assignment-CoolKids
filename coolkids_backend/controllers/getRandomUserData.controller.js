const {
	getRandomUserDataService,
} = require("../services/getRandomUserData.service");

exports.getRandomUserData = async (req, res) => {
	let data = await getRandomUserDataService();
	res.send(data);
};
