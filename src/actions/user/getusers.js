import request from 'superagent';
import {baseURL} from '../../constants/baseURL';

export const SET_ERROR = 'SET_ERROR';

// USER LOGIN
export const SET_USERS = 'SET_USERS';
export const getUsers = () => {
	return (dispatch, getState) => {
		const state = getState()
		const { user } = state
		console.log(user.jwt);

		request
			.get(`${baseURL}/user`)
			.set("Authorization", `Bearer ${user.jwt}`)
			.then(response => {
                console.log("this is what we get back from /user", response.body)
				dispatch({
					type: SET_USERS,
					payload: response.body.data
				})
			})
			.catch(error => {
				console.log('ERROR in GET USERS ---> ', error)
				dispatch({
					type: SET_ERROR,
					payload: error.response
				})	
			})
	}
}