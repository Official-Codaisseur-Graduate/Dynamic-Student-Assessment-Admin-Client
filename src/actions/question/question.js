import request from 'superagent'
import { baseURL } from '../../constants/baseURL'

// export const SET_ERROR = 'SET_ERROR'
// export const USER_LOGIN = 'USER_LOGIN'
// export const USER_LOGOUT = 'USER_LOGOUT'

export const ADDED_QUESTION = 'ADDED_QUESTION'
export const addQuestion = (data) => {
	console.log("ADD QUESTION data =", data)
	return (data) => {
		request
			.post(`${baseURL}/question`)
            .send(data)
            // .then(response => {
			// 	const { questionId } = response.body
			// 	dispatch({
			// 		type: ADDED_QUESTION,
			// 		payload: { questionId }
			// 	})
			// })
			.catch(error => {
				console.log('ERROR in Add Question--> ', error.response)
			})
	}
}

export const addAnswers = (answers) => {
	console.log("ADD ANSWERS data =", answers)
	return (dispatch) => {
		request
			.post(`${baseURL}/answer`)
			.send(answers)
			.catch(error => {
				console.log('ERROR in Add Answers--> ', error.response);
			})
	}
}