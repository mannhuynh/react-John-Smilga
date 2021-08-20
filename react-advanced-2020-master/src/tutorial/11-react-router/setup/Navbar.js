import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	const styles = {
		display: "inline-flex",
		margin: "10px",
	};
	return (
		<nav style={styles}>
			<h3 style={styles}>NavBar</h3>
			<ul style={styles}>
				<li style={styles}>
					<Link to="/">HOME</Link>
				</li>
				<li style={styles}>
					<Link to="/about">ABOUT</Link>
				</li>
				<li style={styles}>
					<Link to="/people">PEOPLE</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
