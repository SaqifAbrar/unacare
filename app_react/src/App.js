import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./common/layout/layout";
import Navbar from "./common/layout/navbar";
import Content from "./common/layout/content";
import Home from "./pages/home";

import "./sass/main.scss";

function App() {
	return (
		<div className="app-container">
			<Router>
				<Layout type="side-style">
					<Navbar />
					<Content>
						<Routes>
							<Route path="/" element={<Home />} />
						</Routes>
					</Content>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
