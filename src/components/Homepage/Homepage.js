import React, { Component } from "react"
// import { Link } from "react-router-dom"
// import Container from "@material-ui/core/Container"
// import Button from "@material-ui/core/Button"
// // import Typography from "@material-ui/core/Typography"
// import CardActions from "@material-ui/core/CardActions"
// // import CardContent from "@material-ui/core/CardContent"
// import Card from "@material-ui/core/Card"

// import { removeUnderline } from "../../constants/style"

export default class Homepage extends Component {
	render() {
		return (
			<div className="background">
			<h1>ADMIN ASSESSMENT</h1>
			<p><i>The admin panel of the Student Assessment Web-app will be used by teachers and other Codaisseur's staff. It is meant to provide functionalities like</i></p>
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
