import request from 'superagent'
import { baseURL } from '../../constants/baseURL'

// export const SET_ERROR = 'SET_ERROR'
// export const USER_LOGIN = 'USER_LOGIN'
// export const USER_LOGOUT = 'USER_LOGOUT'

// // USER SIGNUP
// export const USER_SIGNUP = 'USER_SIGNUP'
export const addQuestion = (question) => {
	console.log("ADD QUESTION data =", question)
	return (dispatch) => {
		request
			.post(`${baseURL}/question`)
			.send(question)
			.catch(error => {
				console.log('ERROR in Add Question--> ', error.response);
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