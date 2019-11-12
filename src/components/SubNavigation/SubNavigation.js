
import React, { Component } from "react"
// import Link from '@material-ui/core/Link';
import { Link } from "react-router-dom"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { removeUnderline } from "../../constants/style"

export default class SubNavigation extends Component {
	render() {
		return (
			<div>
				<AppBar className="bg-dark" position="static">
					<Toolbar>
						<Link to="/add-question" style={removeUnderline}>
							<small className="text-white text-bold-spaced fs-14 nav-link">
								Add Questions
							</small>
						</Link>
						<Link to="/questions" style={removeUnderline}>
							<small className="text-white text-bold-spaced fs-14 nav-link">
								Questions
							</small>
						</Link>
						<Link to="/students" style={removeUnderline}>
							<small className="text-white text-bold-spaced fs-14 nav-link">
								Students
							</small>
						</Link>
					</Toolbar>
				</AppBar>

			</div>
		)
	}
}
