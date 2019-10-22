import request from 'superagent'
import { baseURL } from '../constants/baseURL'

export const SET_ERROR = 'SET_ERROR'

// USER SIGNUP
export const USER_SIGNUP = 'USER_SIGNUP'
export const signup = (data) => {
	return (dispatch) => {
		request
			.post(`${baseURL}/user`)
			.send(data)
			.then(() => {
				// If user is created successfully, login user
				return request
					.post(`${baseURL}/login`)
					.send({ email: data.email, password: data.password });
			})
			.then(response => {
				console.log('Here the response . body --> ', response.body)
				dispatch({
					type: USER_LOGIN,
					payload: response.body
				})
			})
			.catch(error => {
				console.log('ERROR in SignUP --> ', error);
				dispatch({
					type: SET_ERROR,
					payload: error.response.body
				})
				
			})
	}
}