import { combineReducers } from "redux"
import user from "./user"
import NewQuestion from "./NewQuestion"
import questions from "./questions"
import allUsers from "./allUsers"
// import addedquestion from ""

export default combineReducers({
	user,
	questions,
	// addedquestion,
	allUsers,
	NewQuestion
})

