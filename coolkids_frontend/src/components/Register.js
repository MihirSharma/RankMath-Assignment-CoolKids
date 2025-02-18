import { Input, TextField } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React, { useState, useEffect } from "react";
import validateEmail from "@/utils/validate_email";
import Axios from "@/utils/axios";

function Register(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isValidEmail, setIsValidEmail] = useState(false);
	const [data, setData] = useState(null);
	// console.log(isValidEmail, Boolean(email));
	console.log(props);

	useEffect(() => {
		props.pageSetter("home");
		// props.dataSetter(data && data.data);
		console.log(data);
	}, [data]);

	const handleRegister = async () => {
		try {
			const dataCall = await Axios.get(
				`/api/create_new_user?email=${email}`
			);
			console.log(dataCall);
			setData(dataCall);
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<div className="bg-white/70 mb-6 flex flex-row justify-center align-baseline ">
			<div className="m-3">
				<TextField
					id="emailid"
					label="E-Mail ID"
					variant="filled"
					sx={{
						input: {
							color:
								!isValidEmail && email
									? "#ff3333"
									: isValidEmail && email
									? "#339933"
									: "#999999",
						},
					}}
					value={email}
					onChange={(e) => {
						if (validateEmail(e.target.value)) {
							setIsValidEmail(true);
						} else {
							if (isValidEmail) {
								setIsValidEmail(false);
							}
						}
						setEmail(e.target.value);
					}}
				/>
			</div>
			<div className="m-3">
				<TextField
					id="pass"
					label="Password"
					variant="filled"
					type="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<div className="cursor-pointer flex flex-col align-middle justify-center border-green-500 border-solid border-y-8">
				<KeyboardDoubleArrowRightIcon
					onClick={handleRegister}
					style={{ color: "#009900", fontSize: 60 }}
					className="hover:animate-gnr"
				/>
			</div>
		</div>
	);
}

export default Register;
