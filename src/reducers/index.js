import { combineReducers } from 'redux'
import user from './user'
import addedquestion from './addedquestion'
import questions from'./questions'

export default combineReducers({
    user,
    questions,
    addedquestion,
})