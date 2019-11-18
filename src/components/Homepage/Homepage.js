import React, { Component } from "react"

export default class Homepage extends Component {
	render() {
		return (
			<div className="background">
				<div className="h1"><h1><p>ADMIN ASSESSMENT</p></h1></div>
					<p><i>The admin panel of the Student Assessment Web-app will be used by teachers and other Codaisseur's staff. It is meant to provide functionalities like: </i></p>
				<div className="backgroundlist">
				<ul>
					<li>Possibility to add, remove and modify questions & answers</li>
					<li>Overview of the existing questions and answers and how well they are being answered</li>
					<li>Overview of the applicants who undertook the test</li>
				</ul>
				</div>
			</div>
		)
	}
}
