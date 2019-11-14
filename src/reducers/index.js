import { combineReducers } from "redux"
import user from "./user"
import idNewQuestion from "./idNewQuestion"
import questions from "./questions"
import students from './students'
// import addedquestion from ""

export default combineReducers({
	user,
	questions,
	// addedquestion,
	students,
	idNewQuestion
})

