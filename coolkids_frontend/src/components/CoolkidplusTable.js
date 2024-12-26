import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const dataHeaderFilter = (role) => {
	if (role === "coolestkid") {
		return (
			<>
				<TableCell align="right">Email(g)</TableCell>
				<TableCell align="right">Role(g)</TableCell>
			</>
		);
	} else {
		return null;
	}
};

const dataRowFilter = (role, row) => {
	if (role === "coolestkid") {
		return (
			<>
				<TableCell align="right">{row.email}</TableCell>
				<TableCell align="right">{row.role}</TableCell>
			</>
		);
	} else {
		return null;
	}
};

function CoolkidplusTable(props) {
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
							{dataHeaderFilter(props.role)}
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
									{dataRowFilter(props.role, row)}
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default CoolkidplusTable;
