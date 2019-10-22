import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
	render() {
		// const { onChange, onSubmit } = this.props
		// const { email, password } = this.props.values
		return (<div>
				<form >
					<input type="text" 
						name="email" 
						placeholder="E-mail" 
						
					/>
					<input type="password" 
						name="password" 
						placeholder="password" 
						/>
					
					<button type="submit" className="btn btn-primary w-100">Login</button>
				</form>
				<p>Don't have an account yet? <Link to="/signup">Sign up</Link></p>
                </div>
		)
	}
}

export default LoginForm;