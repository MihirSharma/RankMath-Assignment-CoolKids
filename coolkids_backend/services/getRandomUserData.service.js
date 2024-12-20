const axios = require("axios");

exports.getRandomUserDataService = async () => {
	let data = {};
	data = await axios.get("https://randomuser.me/api");
	return data.data;
};
