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

export default function PatientView() {
	return (
		<div className="patient-view-container">
			<h1>Prescriptions Dashboard</h1>
			<div className="patient-info-section">
				<div className="pfp-container">
					<span></span>
				</div>
				<div className="patient-details">
					<div className="name-container">
						<p>First Name: {}</p>
						<p>Last Name: {}</p>
						<p>Middle Name: {}</p>
					</div>
					<div className="bio-container">
						<p>Sex: {}</p>
						<p>Height: {}</p>
						<p>Weight: {}</p>
					</div>
					<div className="dates-container">
						<p>Date of Birth: {}</p>
						<p>Expiration Date: {}</p>
						<p>Issuance Date: {}</p>
					</div>
				</div>
			</div>
			<div className="entry-history-section">
				<h2>Entry History</h2>
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
			<div className="previous-prescriptions-section">
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
