import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/login'
import LoginForm from './LoginForm'

class LoginContainer extends Component {
	state = {
		email: '',
		password: ''
	}

	onSubmit = (event) => {
		event.preventDefault()
		this.props.login(this.state.email, this.state.password)

		this.setState({
			email: '',
			password: ''
		})
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		return (
				<LoginForm
					onSubmit={this.onSubmit}
					onChange={this.onChange}
					values={this.state}
				/>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, {login})(LoginContainer)