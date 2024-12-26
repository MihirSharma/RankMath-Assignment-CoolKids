import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Axios from "@/utils/axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function MaintainerTable(props) {
	// const [selectedUser, setSelectedUser] = useState(null);
	// const [update, setUpdate] = useState(true);

	const updateUserRole = async (selectedUser, newRole) => {
		// console.log(selectedUser, newRole);
		let data = await Axios.post(
			"/api/maintainer/update_user_role",
			{
				email: selectedUser,
				newRole: newRole,
			},
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}
		);
		if (data) {
			props.refresh();
		}
	};

	return (
		<div>
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 650, maxWidth: 1200 }}
					aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">Country</TableCell>
							<TableCell align="right">Email</TableCell>
							<TableCell align="right">Role</TableCell>
							<TableCell align="right">Change Role</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props &&
							props.data.map((row, idx) => (
								<TableRow
									key={row && row.id ? row.id : idx}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0,
										},
									}}>
									<TableCell component="th" scope="row">
										{row.firstname + " " + row.lastname}
									</TableCell>
									<TableCell align="right">
										{row.country}
									</TableCell>
									<TableCell align="right">
										{row.email}
									</TableCell>
									<TableCell align="right">
										{row.role}
									</TableCell>
									<TableCell align="right">
										<Select
											labelId="demo-simple-select-standard-label"
											id="demo-simple-select-standard"
											value={row.role}
											onChange={(e) =>
												updateUserRole(
													row.email,
													e.target.value
												)
											}
											label="Age">
											{/* <MenuItem value="">
												<em>None</em>
											</MenuItem> */}
											<MenuItem value={"coolkid"}>
												Cool Kid
											</MenuItem>
											<MenuItem value={"coolerkid"}>
												Cooler Kid
											</MenuItem>
											<MenuItem value={"coolestkid"}>
												Coolest Kid
											</MenuItem>
										</Select>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default MaintainerTable;
