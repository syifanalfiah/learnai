import React from "react";
import Navbar from "../navbar/navbar";
import Content from "../content/content";
import "./Home.css";

function Homepage() {
	return (
		<div className="home-container">
			<div className="nav">
				<Navbar />
			</div>
			<div className="content">
				<Content/>
			</div>
		</div>
	);
}
export default Homepage;