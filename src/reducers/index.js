import { combineReducers } from 'redux'
import user from './user'
import idNewQuestion from './idNewQuestion'
import questions from'./questions'

export default combineReducers({
    user,
    questions,
    idNewQuestion,
})