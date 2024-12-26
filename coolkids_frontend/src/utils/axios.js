import axios from "axios";

const Axios = axios.create({
	baseURL: "http://127.0.0.1:8080",
	headers: {},
}); //should be included through a ENV file. Not included for demo

export default Axios;
