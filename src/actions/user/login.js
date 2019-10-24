import request from 'superagent';
import {baseURL} from '../../constants/baseURL';

export const SET_ERROR = 'SET_ERROR';

// USER LOGIN
export const USER_LOGIN = 'USER_LOGIN';
export const login = (email, password) => {
    console.log("Login data sent =", email, password )
	return (dispatch) => {
		request
			.post(`${baseURL}/login`)
			.send({ email, password })
			.then(response => {
				const { jwt } = response.body;
				dispatch({
					type: USER_LOGIN,
					payload: { jwt }
				})
			})
			.catch(error => {
				console.log('ERROR in LogIn ---> ', error)
				dispatch({
					type: SET_ERROR,
					payload: error.response
				})	
			})
	}
}