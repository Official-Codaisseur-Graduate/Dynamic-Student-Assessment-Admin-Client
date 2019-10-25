import request from 'superagent';
import {baseURL} from '../constants/baseURL';

export const SET_ERROR = 'SET_ERROR';

// SET QUESTIONS
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const questions = () => {
	return (dispatch) => {
		request
			.get(`${baseURL}/question/all`)
			.then(response => {
                console.log("response.body in questions", response.body)
				dispatch({
					type: SET_QUESTIONS,
					payload: response.body
				})
			})
			.catch(error => {
				console.log('ERROR in getting questions ---> ', error)
				dispatch({
					type: SET_ERROR,
					payload: error.response
				})	
			})
	}
}