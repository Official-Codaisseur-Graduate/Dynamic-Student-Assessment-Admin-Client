import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { signup } from '../actions/userActions'
import SignupForm from './SignupForm'

class SignupContainer extends Component {
	state = {
		name: '',
		email: '',
		password: ''
	}

	onSubmit = (event) => {
		event.preventDefault()

		this.setState({
			name: '',
			email: '',
			password: ''
		})
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
			return (			
				<SignupForm
				
				/>
			)
		}
	}

const mapStateToProps = (state) => {
	return {
		
	}
}

export default connect(mapStateToProps)(SignupContainer)