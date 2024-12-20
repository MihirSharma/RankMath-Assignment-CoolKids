import React, { useState } from "react";
import Login from "@/components/Login";
import Register from "@/components/Register";

function Home() {
	const [showLogin, setShowLogin] = useState(true);
	return (
		<div className="w-screen p-12 flex flex-row justify-end">
			<div
				className={`${
					showLogin ? "block" : "hidden"
				} text-black p-6 bg-white/75 flex flex-col justify-evenly align-middle`}>
				<Login />
				<div>Not a Cool Kid yet?</div>
				<div
					className="cursor-pointer"
					onClick={() => {
						setShowLogin(false);
					}}>
					Register
				</div>
			</div>
			<div
				className={`${
					showLogin ? "hidden" : "block"
				}  text-black p-6 bg-white/75 flex flex-col justify-evenly align-middle`}>
				<Register />
				<div>Already a Cool Kid? </div>
				<div
					className="cursor-pointer"
					onClick={() => {
						setShowLogin(true);
					}}>
					Login
				</div>
			</div>
		</div>
	);
}

export default Home;
