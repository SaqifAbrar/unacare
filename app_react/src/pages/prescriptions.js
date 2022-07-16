import React from "react";
import ListRow from "../common/elements/listRow";

const pendingPrescriptions = [
	{
		_id: 1,
		drugName: "some-complicated-name",
		patientName: "first name last name",
		status: "pending",
	},
	{
		_id: 2,
		drugName: "some-complicated-name",
		patientName: "first name last name",
		status: "pending",
	},
	{
		_id: 3,
		drugName: "some-complicated-name",
		patientName: "first name last name",
		status: "pending",
	},
];

export default function Prescriptions() {
	return (
		<div className="prescriptions-container">
			<h1>Prescriptions Dashboard</h1>
			<div className="searchbar-section">SEARCHBAR</div>
			<div className="pending-section">
				<h2>Pending Prescriptions</h2>
				<div className="prescriptions-list">
					{pendingPrescriptions.map((prescription) => (
						<ListRow
							key={prescription._id}
							text1={prescription._id}
							text2={prescription.drugName}
							text3={prescription.patientName}
						/>
					))}
				</div>
			</div>
			<div className="fulfilled-section">
				<h2>Fullfilled Prescriptions</h2>
				<div className="prescriptions-list">
					{pendingPrescriptions.map((prescription) => (
						<ListRow
							key={prescription._id}
							text1={prescription._id}
							text2={prescription.drugName}
							text3={prescription.patientName}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
