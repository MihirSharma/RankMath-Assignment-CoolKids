import React, { useState } from "react";
import Home from "@/pages/Home";
import Coolkidplus from "@/pages/Coolkidplus";
import Maintainer from "@/pages/Maintainer";
import CoolkidProfile from "./CoolkidProfile";

function Handler() {
	const [page, setPage] = useState("home");
	const [data, setData] = useState(null);
	console.log("PAGE : " + page);

	const activePage = (page) => {
		if (page === "maintainer") {
			return <Maintainer pageSetter={setPage} dataSetter={setData} />;
		} else if (page === "coolkid") {
			return (
				<CoolkidProfile
					data={data}
					role={data && data.role}
					pageSetter={setPage}
					dataSetter={setData}
				/>
			);
		} else if (page === "coolerkid" || page === "coolestkid") {
			return (
				<Coolkidplus
					data={data}
					role={data && data.role}
					pageSetter={setPage}
					dataSetter={setData}
				/>
			);
		} else if (page === "home") {
			return <Home pageSetter={setPage} dataSetter={setData} />;
		} else {
			return "Something went wrong!!!";
		}
	};

	return (
		<div>
			{activePage(page)}
			{/* <div onClick={() => setPage("maintainer")}>Maintainer Login</div> */}
		</div>
	);
}

export default Handler;
