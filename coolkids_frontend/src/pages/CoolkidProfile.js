import React, { useState, useEffect } from "react";
import Axios from "@/utils/axios";

function CoolkidProfile(props) {
	const [data, setData] = useState(null);
	useEffect(() => {
		const getData = async () => {
			let dataCall = await Axios.get(
				`/api/get_user_details?email=${props.data.email}`
			);
			console.log(dataCall);
			setData(dataCall.data);
		};
		getData();
	}, []);

	console.log(props);

	return (
		<div className="p-8 flex flex-col justify-center align-middle">
			<div>
				{`Name : ${data && data.firstname} ${data && data.lastname}`}
			</div>
			<div>{`Email : ${data && data.email}`}</div>
			<div>{`Country: ${data && data.country}`}</div>
			<div>{`Role : ${data && data.role}`}</div>
			<div
				className="mt-20 cursor-pointer"
				onClick={() => props.pageSetter("home")}>
				Logout
			</div>
		</div>
	);
}

export default CoolkidProfile;
