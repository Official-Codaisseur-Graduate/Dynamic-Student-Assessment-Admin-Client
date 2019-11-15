import {STUDENTS_FETCHED} from '../actions/user/getusers'

const reducer = (state={}, action={}) => {
    switch(action.type){
        case STUDENTS_FETCHED:
            return action.payload
        default:
            return state
    }
}

export default reducer