import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

class SignupForm extends Component {
	render() {
		const { onChange, onSubmit } = this.props;
		const {email, password } = this.props.values;
		return (

			<div className="background">
				<Container>

					<Card className="card-50 component-center">
						<CardContent>
							<Typography variant="h4">
							<div className="signup-label"><b>Sign Up</b></div>
							</Typography>

							<form noValidate autoComplete="off" onSubmit={onSubmit}>
								<TextField
									id="outlined-name"
									label="Email"
									className="form-control-lg"
									value={email}
									onChange={onChange}
									name="email"
									margin="normal"
									variant="outlined"
								/>
								<TextField
									id="outlined-password-input"
									label="Password"
									className="form-control-lg"
									type="password"
									onChange={onChange}
									name="password"
									value={password}
									margin="normal"
									variant="outlined"
								/>

								<CardActions style={{justifyContent: 'center'}}>
									<Button 
									type="submit" 
									variant="contained"
									size="large"
									color="secondary">Sign Up</Button>
								</CardActions>
							</form>
						</CardContent>
					</Card>
				</Container>
				<span className="spacer-lg"></span>
				<p className="text-center">
				<i>Already have an account? </i><Link to="/login">Log in</Link></p>
			</div>
		)
	}
}

export default SignupForm;