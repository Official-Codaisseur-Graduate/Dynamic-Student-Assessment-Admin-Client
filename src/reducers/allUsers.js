import { SET_ERROR, SET_USERS } from '../actions/user/getusers';

const initialState = []

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case SET_ERROR:
            return { ...state, error: action.payload };
        case SET_USERS:
            return [ ...state, ...action.payload ];
        default:
            return state;
    }
}