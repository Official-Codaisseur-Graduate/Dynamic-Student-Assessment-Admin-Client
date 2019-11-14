import request from 'superagent'
import { baseURL } from '../../constants/baseURL'

export const SET_ERROR = 'SET_ERROR'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

// USER SIGNUP
export const USER_SIGNUP = 'USER_SIGNUP'
export const signup = (data) => {
	console.log("SIGNUP data =", data)
	return (dispatch) => {
		request
			.post(`${baseURL}/admin`)
			.send(data)
			.catch(error => {
				console.log('ERROR in SignUP --> ', error.response.body);
			})
	}
}