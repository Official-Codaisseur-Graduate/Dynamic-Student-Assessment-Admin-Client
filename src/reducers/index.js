import { combineReducers } from 'redux'
import user from './user'
import questions from'./questions'
import answers from './answers'

export default combineReducers({
    user,
    questions,
    answers
})