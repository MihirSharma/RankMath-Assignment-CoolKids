import React, { useState, useEffect } from "react";
import Table from "@/components/CoolkidplusTable";
import Axios from "@/utils/axios";

function Coolkidplus(props) {
	const [data, setData] = useState(null);
	useEffect(() => {
		const getData = async () => {
			let dataCall = await Axios.get(
				`/api/get_all_user_data_filtered?requestor_email=${props.data.email}`
			);
			console.log(dataCall);
			setData(dataCall.data);
		};
		getData();
	}, []);

	return (
		<div>
			<Table role={props.role} data={data ? data : []} />
			<div
				className="mt-20 cursor-pointer"
				onClick={() => props.pageSetter("home")}>
				Logout
			</div>
		</div>
	);
}

export default Coolkidplus;
