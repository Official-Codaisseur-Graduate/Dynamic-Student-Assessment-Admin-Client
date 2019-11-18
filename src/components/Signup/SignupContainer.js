import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/user/signup'
import SignupForm from './SignupForm'

class SignupContainer extends Component {
	state = {
		email: '',
		password: ''
	}

	onSubmit = (event) => {
		event.preventDefault()
		this.props.signup(this.state)

		this.setState({
			email: '',
			password: ''
		})
		this.props.history.push(`/login`)
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<SignupForm
				onSubmit={this.onSubmit}
				onChange={this.onChange}
				values={this.state}
			/>
		)
	}
}

export default connect(null, { signup })(SignupContainer)