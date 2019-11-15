import { combineReducers } from "redux"
import user from "./user"
import newQuestion from "./newQuestion"
import questions from "./questions"
import students from './students'
// import addedquestion from ""

export default combineReducers({
	user,
	questions,
	students,
	newQuestion
})

