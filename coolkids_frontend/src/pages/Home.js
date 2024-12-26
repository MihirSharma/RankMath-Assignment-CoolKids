import React, { useState } from "react";
import Login from "@/components/Login";
import Register from "@/components/Register";
import MaintainerLogin from "@/components/MaintainerLogin";
import KeyIcon from "@mui/icons-material/Key";

function Home(props) {
	const [showLogin, setShowLogin] = useState("login");
	console.log("HOME PROPS : " + props);
	return (
		<div className="w-screen p-12 flex flex-row justify-end">
			<div
				className="cursor-pointer"
				onClick={() => {
					setShowLogin("maintainer");
				}}>
				<KeyIcon />
			</div>
			<div
				className={`${
					showLogin === "login" ? "block" : "hidden"
				} text-black p-6 bg-white/75 flex flex-col justify-evenly align-middle`}>
				<Login
					pageSetter={props.pageSetter}
					dataSetter={props.dataSetter}
				/>
				<div>Not a Cool Kid yet?</div>
				<div
					className="cursor-pointer"
					onClick={() => {
						setShowLogin("register");
					}}>
					Register
				</div>
			</div>
			<div
				className={`${
					showLogin === "register" ? "block" : "hidden"
				}  text-black p-6 bg-white/75 flex flex-col justify-evenly align-middle`}>
				<Register
					pageSetter={props.pageSetter}
					dataSetter={props.dataSetter}
				/>
				<div>Already a Cool Kid? </div>
				<div
					className="cursor-pointer"
					onClick={() => {
						setShowLogin("login");
					}}>
					Login
				</div>
			</div>
			<div
				className={`${
					showLogin === "maintainer" ? "block" : "hidden"
				}  text-black p-6 bg-white/75 flex flex-col justify-evenly align-middle`}>
				<MaintainerLogin
					pageSetter={props.pageSetter}
					dataSetter={props.dataSetter}
				/>
				<div
					className="cursor-pointer"
					onClick={() => {
						setShowLogin("login");
					}}>
					Return to regular login
				</div>
			</div>
		</div>
	);
}

export default Home;
