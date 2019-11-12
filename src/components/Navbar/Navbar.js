
import React, { Component } from "react"
import SubNavigation from "../SubNavigation/SubNavigation"
// import Link from '@material-ui/core/Link';
import { Link } from "react-router-dom"
import { connect } from "react-redux";


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
							<img src="/icon.png" alt="icon" width="50px" />
							{/* <img className="logo pt-1" src='https://i1.wp.com/thenextwomen.com/summit/wp-content/uploads/2017/03/codaisseur-logo-long-2e9b7b7b839a33128016eb77b49ff2bb6397b6b3552523ee09273d6a5b427861.png?resize=1200%2C279&ssl=1' alt="codaisseur logo" width="260"/> */}
						</Link>

						{!this.props.loggedIn ? (
							<p className="text-dark text-bold-spaced nav-link pt-1">
							<Link to="/signup" color="inherit" style={removeUnderline}> Sign Up </Link> 
							| 
							<Link to="/login" style={removeUnderline}> Sign In </Link>
							</p>
						 ) : (
								<Link to="/logout" style={removeUnderline}>
									<p className="text-dark text-bold-spaced nav-link pt-1">Log Out</p>
								</Link>
							)}


					</Toolbar>
				</AppBar>
						 {this.props.loggedIn ? (<SubNavigation show={true} />) : ( <SubNavigation show={false} />) }	
			</div>
		)
	}

}

const mapStateToProps = state => {
	return {
		loggedIn: state.user.jwt !== null
	};
};

export default connect(mapStateToProps)(Navbar);