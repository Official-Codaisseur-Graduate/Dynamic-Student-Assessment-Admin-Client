import { combineReducers } from "redux"
import user from "./user"
import newQuestion from "./newQuestion"
import questions from "./questions"
import allUsers from "./allUsers"
// import addedquestion from ""

export default combineReducers({
	user,
	questions,
	// addedquestion,
	allUsers,
	newQuestion
})

