import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ListRow from "../common/elements/listRow";

export default function Prescriptions() {
	const [pendingPrescriptions, setPendingPrescriptions] = useState([]);
	const [fulfilledPrescriptions, setFulFilledPrescriptions] = useState([]);

	useEffect(() => {
		const fetchPrescriptions = async () => {
			try {
				const response = await axios.get(
					"/api/prescriptions?data=id,name,status,patient_id",
				);
				//console.log(response.data);
				const pending = response.data.filter(
					(prescription) => prescription.status === "unfulfilled",
				);

				const fulfilled = response.data.filter(
					(prescription) => prescription.status === "fulfilled",
				);
				setPendingPrescriptions(pending);
				setFulFilledPrescriptions(fulfilled);
			} catch (err) {
				console.error(err);
			}
		};

		fetchPrescriptions();
		//console.log("useEffect called");
	}, []);

	return (
		<div className="prescriptions-container">
			{console.log(pendingPrescriptions)}
			<h1>Prescriptions Dashboard</h1>
			<div className="searchbar-section">SEARCHBAR</div>
			<div className="pending-section">
				<h2>Pending Prescriptions</h2>
				<div className="prescriptions-list">
					<ListRow
						styles="table-header"
						text1="Prescription ID"
						text2="Drug Name"
						text3="Patient ID"
					/>
					{pendingPrescriptions.map((prescription) => (
						<Link
							key={prescription.id}
							to={`/patientView/${prescription.id}&${prescription.patient_id}`}
						>
							<ListRow
								styles="pending"
								text1={prescription.id}
								text2={prescription.name}
								text3={prescription.patient_id}
								prescriptionId={prescription.id}
								patientId={prescription.patient_id}
							/>
						</Link>
					))}
				</div>
			</div>
			<div className="fulfilled-section">
				<h2>Fullfilled Prescriptions</h2>
				<div className="prescriptions-list">
					<ListRow
						styles="table-header"
						text1="Prescription ID"
						text2="Drug Name"
						text3="Patient ID"
					/>
					{fulfilledPrescriptions.map((prescription) => (
						<Link key={prescription.id} to={`/patientView/${prescription.id}`}>
							<ListRow
								styles="success"
								text1={prescription.id}
								text2={prescription.name}
								text3={prescription.patient_id}
								prescriptionId={prescription.id}
								patientId={prescription.patient_id}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

/*const pendingPrescription = [
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
