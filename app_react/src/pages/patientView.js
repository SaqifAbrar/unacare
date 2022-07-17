import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import ListRow from "../common/elements/listRow";

/*const pendingPrescriptions = [
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
];*/

export default function PatientView() {
	const [patient, setPatient] = useState({});
	const [prescription, setPrescription] = useState({});

	let params = useParams();
	params = params.patientId.split("&");

	useEffect(() => {
		const fetchPatient = async () => {
			try {
				const response = await axios.get(`/api/patients/${params[1]}`);
				const data = response.data[0];
				setPatient(data);
			} catch (err) {
				console.error(err);
			}
		};

		const fetchPrescription = async () => {
			try {
				const response = await axios.get(`/api/prescriptions/${params[0]}`);
				const data = response.data[0];
				setPrescription(data);
			} catch (err) {
				console.error(err);
			}
		};

		fetchPatient();
		fetchPrescription();
	}, [params]);

	return (
		<div className="patient-view-container">
			{console.log(patient, prescription)}
			<h1>Prescriptions Dashboard</h1>
			<div className="patient-info-section">
				<div className="pfp-container">
					<span></span>
				</div>
				<div className="patient-details">
					<div className="name-container">
						<p>
							<b>First Name:</b> {patient.first_name}
						</p>
						<p>
							<b>Last Name:</b> {patient.last_name}
						</p>
						<p>
							<b>Middle Name:</b> {}
						</p>
					</div>
					<div className="bio-container">
						<p>
							<b>Sex:</b> {patient.sex}
						</p>
						<p>
							<b>Height:</b> {patient.height}
						</p>
						<p>
							<b>Weight: </b>
							{patient.weight}
						</p>
					</div>
					<div className="dates-container">
						<p>
							<b>Date of Birth:</b>{" "}
							{`${patient.birth_day}-${patient.birth_month}-${patient.birth_year}`}
						</p>
						<p>
							<b>Expiration Date:</b> {}
						</p>
						<p>
							<b>Issuance Date:</b> {}
						</p>
					</div>
				</div>
			</div>
			<div className="prescription-details">
				<h2>Prescription Requests</h2>
				<h3>Prescription ID: {prescription.id} Details</h3>
				<div className="prescription-info-section">
					<p>
						<b>Prescriber: </b> {prescription.prescriber}
					</p>
					<p>
						<b>Drug Name: </b> {prescription.name}
					</p>
					<p>
						<b>Dosage: </b> {prescription.dosage}mg
					</p>
					<p>
						<b>Refill: </b> {prescription.refill}x
					</p>
					<p>
						<b>Instructions: </b> {prescription.instructions}
					</p>
					<button>Fulfill Prescription</button>
				</div>
			</div>
			<div className="entry-history-section">
				<h2>▶ Entry History</h2>
				<div className="prescriptions-list">
					{/*pendingPrescriptions.map((prescription) => (
						<ListRow
							key={prescription._id}
							text1={prescription._id}
							text2={prescription.drugName}
							text3={prescription.patientName}
						/>
					))*/}
				</div>
			</div>
			<div className="previous-prescriptions-section">
				<h2>▶ Fullfilled Prescriptions</h2>
				<div className="prescriptions-list">
					{/*pendingPrescriptions.map((prescription) => (
						<ListRow
							key={prescription._id}
							text1={prescription._id}
							text2={prescription.drugName}
							text3={prescription.patientName}
						/>
					))*/}
				</div>
			</div>
		</div>
	);
}
