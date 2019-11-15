import { DELETE_QUESTION_SUCCESS } from '../actions/question'

export default (state = {}, action = {}) => {
    console.log(state, "What is student-state???")
    switch (action.type) {
      case DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        questions: state.questions.filter(question => question.id !== action.payload) 
      }
  
      default:
        return state;
    }
  };
  

  /// don't know if reducer is working, just a placeholder
  /// needs to be tested