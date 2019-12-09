import request from 'superagent';
import {baseURL} from '../constants/baseURL';

export const SET_ERROR = 'SET_ERROR';

// SET QUESTIONS
export const SET_ANSWERS = 'SET_ANSWERS';
export const answers = () => {
	return (dispatch) => {
		request
			.get(`${baseURL}/question-all`)
			.then(response => {
				dispatch({
					type: SET_ANSWERS,
					payload: response.body
				})
			})
			.catch(error => {
				console.log('ERROR in getting answers ---> ', error)
				dispatch({
					type: SET_ERROR,
					payload: error.response.body
				})	
			})
	}
}