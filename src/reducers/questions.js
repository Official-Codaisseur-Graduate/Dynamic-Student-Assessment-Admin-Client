import { SET_ERROR, SET_QUESTIONS } from '../actions/question';

const initialState = []

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error: action.payload };
        case SET_QUESTIONS:
            return [ ...state, ...action.payload ];
        default:
            return state;
    }
}

