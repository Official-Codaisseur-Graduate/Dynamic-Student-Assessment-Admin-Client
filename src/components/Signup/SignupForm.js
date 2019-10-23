import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends Component {
	render() {
		const { onChange, onSubmit } = this.props;
		const { username, email, password } = this.props.values;
		return (
			<div>
				<form onSubmit={onSubmit}>
					<input type="text" 
						name="username" 
						placeholder="Username" 
						value={username} 
						onChange={onChange} 
					/>
					<input type="text" 
						name="email" 
						placeholder="E-mail" 
						value={email} 
						onChange={onChange}  
					/>
					<input type="password" 
						name="password" 
						placeholder="password" 
						value={password} 
						onChange={onChange} 
					/>
					
					<button type="submit" className="btn btn-primary w-100">Sign up</button>
				</form>
				<p>Already have an account? <Link to="/login">Log in</Link></p>
			</div>
		)
	}
}

export default SignupForm;