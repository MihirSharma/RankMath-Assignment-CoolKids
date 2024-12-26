import React, { useState, useEffect } from "react";
import Table from "@/components/MaintainerTable";
import Axios from "@/utils/axios";

function Maintainer(props) {
	const [data, setData] = useState(null);
	const [update, setUpdate] = useState(0);
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		let dataCall = await Axios.get(`/api/maintainer/get_all_user_data`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		console.log(dataCall);
		setData(dataCall.data);
	};
	// getData();

	return (
		<div>
			<Table data={data ? data : []} refresh={getData} />
			<div
				onClick={() => {
					localStorage.setItem("token", "");
					props.pageSetter("home");
				}}>
				Logout
			</div>
		</div>
	);
}

export default Maintainer;
