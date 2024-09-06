import React from "react";
import {Link} from "react-router-dom"
import "../../styles/home.css";

export const Home = () => (
	<div className="container pb-2">
		<div className="d-flex justify-content-end">
			<Link to="/addContact">
			<button className="btn btn-success my-3">add new contact</button>
			</Link>
		</div>
		<div>

		</div>
	</div>
);
