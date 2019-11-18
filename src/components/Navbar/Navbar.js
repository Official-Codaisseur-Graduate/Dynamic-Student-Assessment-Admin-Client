
import React, { Component } from "react"
import SubNavigation from "../SubNavigation/SubNavigation"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import logo from "../../images/codaisseur-logo-long.png"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { removeUnderline } from "../../constants/style"

class Navbar extends Component {
	render() {
		return (
			<div>
				<AppBar variant="fixed" className="bg-white" position="static">
					<Toolbar>
						<Link to="/">
							<img
								className='logo'
								height='80px'
								align="middle"
								alt='app logo'
								src={logo}>
							</img>
						</Link>

						{!this.props.loggedIn ? (
							<p className="text-dark text-bold-spaced nav-link pt-1">
								<Link to="/signup" color="inherit" style={removeUnderline}> Sign Up </Link>
								|
							<Link to="/login" style={removeUnderline}> Login </Link>
							</p>
						) : (
								<Link to="/logout" style={removeUnderline}>
									<p className="text-dark text-bold-spaced nav-link pt-1">Log Out</p>
								</Link>
							)}


					</Toolbar>
				</AppBar>
				{this.props.loggedIn ? (<SubNavigation show={true} />) : (<SubNavigation show={false} />)}
			</div>
		)
	}

}

const mapStateToProps = state => {
	return {
		loggedIn: state.user.jwt !== null
	}
}

export default connect(mapStateToProps)(Navbar);