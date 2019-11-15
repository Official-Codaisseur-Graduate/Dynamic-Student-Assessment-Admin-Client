import {CODE_GENERATED} from '../actions/user/generatecode'

const reducer = (state={}, action={}) => {
    switch(action.type){
        case CODE_GENERATED:
            return action.payload
        default:
            return state
    }
}

export default reducer