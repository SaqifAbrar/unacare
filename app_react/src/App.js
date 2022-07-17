import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./common/layout/layout";
import Navbar from "./common/layout/navbar";
import Content from "./common/layout/content";
import Prescriptions from "./pages/prescriptions";

import "./sass/main.scss";
import PatientView from "./pages/patientView";

function App() {
	return (
		<div className="app-container">
			<Router>
				<Layout type="side-style">
					<Navbar />
					<Content>
						<Routes>
							<Route path="/prescriptions" element={<Prescriptions />} />
							<Route path="/patientView">
								<Route path=":patientId" element={<PatientView />} />
							</Route>
							<Route path="*" element={<Prescriptions />} />
						</Routes>
					</Content>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
