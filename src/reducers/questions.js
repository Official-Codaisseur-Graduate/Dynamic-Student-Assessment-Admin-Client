import { SET_ERROR, SET_QUESTIONS } from "../actions/question";
import { DELETE_QUESTION_SUCCESS } from "../actions/question/question";

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_QUESTIONS:
      //   return [...state, ...action.payload];
      return [...action.payload];
    case DELETE_QUESTION_SUCCESS:
      return state.filter(question => question.id !== action.payload);
    default:
      return state;
  }
}
