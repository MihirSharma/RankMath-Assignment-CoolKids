import { Input, TextField } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React, { useState } from "react";
import validateEmail from "@/utils/validate_email";

function Register() {
	const [email, setEmail] = useState("");
	const [isValidEmail, setIsValidEmail] = useState(false);
	console.log(isValidEmail, Boolean(email));
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
				/>
			</div>
			<div className="cursor-pointer flex flex-col align-middle justify-center border-green-500 border-solid border-y-8">
				<KeyboardDoubleArrowRightIcon
					style={{ color: "#009900", fontSize: 60 }}
					className="hover:animate-gnr"
				/>
			</div>
		</div>
	);
}

export default Register;
