import { combineReducers } from 'redux'
import user from './user'
import addedquestion from './addedquestion'
import questions from'./questions'
import allUsers from './allUsers'

export default combineReducers({
    user,
    questions,
    addedquestion,
    allUsers
})