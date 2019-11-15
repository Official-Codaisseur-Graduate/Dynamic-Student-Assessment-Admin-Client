import request from 'superagent'
import { baseURL } from '../../constants/baseURL'

export const ADDED_QUESTION = 'ADDED_QUESTION'
export const addQuestion = (data) => {


	return (dispatch, getState) => {
		const state = getState()
		const { user } = state
		// console.log(user.jwt);
		
		console.log('RETURN', data)
		const { questionContent, categoryId, level} = data
		// console.log('SENDING THIS TO BACKEND', questionContent, categoryId)
		request
			.post(`${baseURL}/question`)
			.set("Authorization", `Bearer ${user.jwt}`)
            .send({questionContent, categoryId, level})
            .then(response => {
				dispatch({
					type: ADDED_QUESTION,
					payload: response.body
				})
			})
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


/// delete question, working in the backend (auth added after frontend working)
/// frontend - in progress, add auth here after added in the backend
export const DELETE_QUESTION_SUCCESS = 'DELETE_QUESTION_SUCCESS'

const deleteQuestionSuccess = questionId => ({
	type: DELETE_QUESTION_SUCCESS,
	payload: questionId
  });
  
  export const deleteQuestion = (id) => (dispatch, getState) => {
	request
	.delete(`${baseURL}/question/{id}`)
	.then(response => {
	dispatch(deleteQuestionSuccess(id));
	  });
  };
  
