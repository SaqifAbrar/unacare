import { NavLink } from "react-router-dom";

const navlinks = [
	{ _id: 1, name: "Locations", to: "" },
	{ _id: 2, name: "Prescriptions", to: "" },
	{ _id: 3, name: "Patient Directory", to: "" },
	{ _id: 4, name: "Tools & Resources", to: "" },
];

const Navbar = () => {
	return (
		<div className="navbar-container">
			<div className="logo-container">
				<h1>UnaCare</h1>
			</div>
			<div className="pfp-container">
				<span></span>
				<h2>Jane Doe</h2>
				<h3>Pharmacist</h3>
			</div>
			<div className="navlinks-container">
				{navlinks.map((link) => (
					<NavLink key={link._id} to={link.to}>
						{link.name}
					</NavLink>
				))}
			</div>
			<div className="address-container"></div>
		</div>
	);
};

export default Navbar;
