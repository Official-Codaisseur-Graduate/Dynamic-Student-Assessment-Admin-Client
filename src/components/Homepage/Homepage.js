import React, { Component } from "react"
import { Link } from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Card from "@material-ui/core/Card"

import { removeUnderline } from "../../constants/style"

export default class Homepage extends Component {
	render() {
		return (
			<div className="background">
				<Container>
					<Card className="card-50">
						<CardContent>
							<Typography variant="h5">
								Please Sign Up or Log In to continue
							</Typography>
						</CardContent>
						<CardActions>
							<Link to="/login" style={removeUnderline}>
								{" "}
								<Button size="large">Log In</Button>
							</Link>
							<Link to="/signup" style={removeUnderline}>
								{" "}
								<Button size="large">Sign Up</Button>
							</Link>
						</CardActions>
					</Card>
				</Container>
			</div>
		)
	}
}
