import {STUDENTS_FETCHED} from '../actions/user/students'

const reducer = (state={}, action={}) => {
    switch(action.type){
        case STUDENTS_FETCHED:
            return action.payload
        default:
            return state
    }
}

export default reducer