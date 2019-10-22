import { SET_ERROR, USER_LOGIN, USER_LOGOUT } from '../actions/signup';

const initialState = {
    jwt: null,
    userId: null,
    username: null,
    error: null
}

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case SET_ERROR:
            return { ...state, error: action.payload };
        case USER_LOGIN:
            return { ...action.payload, error: null };
        case USER_LOGOUT:
            return initialState;
        default:
            return state;
    }
}