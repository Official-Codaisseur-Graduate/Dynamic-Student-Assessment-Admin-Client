import { SET_ERROR, SET_ANSWERS } from '../actions/answers';

const initialState = []

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error: action.payload };
        case SET_ANSWERS:
            return [ ...state, ...action.payload ];
        default:
            return state;
    }
}