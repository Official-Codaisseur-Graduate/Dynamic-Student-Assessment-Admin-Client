import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

class LoginForm extends Component {
	render() {
		const { onChange, onSubmit } = this.props
		const { email, password } = this.props.values
		return (
				<Container>
				<Card className="card-50">
				<CardContent>
				   <Typography variant="h4">
				   Sign In
				   </Typography>
			   <form noValidate autoComplete="off">
				<TextField
                id="outlined-name"
                label="Email"
                className="form-control-lg"
				onChange={onSubmit}
				name="email"
				value={email}
                margin="normal"
                variant="outlined"
                 />
                  <TextField
                id="outlined-name"
                label="Password"
                className="form-control-lg"
				onChange={onSubmit}
				name="password"
				value={password}
                margin="normal"
                variant="outlined"
                 />
                 </form>
                </CardContent>
                <CardActions>
                    <Button size="large">Log In</Button>
                </CardActions>
                </Card>
				<p className="text-center">Don't have an account yet? <Link to="/signup">Sign up</Link></p>
                </Container>
		)
	}
}

export default LoginForm;