import { ADDED_QUESTION } from '../actions/question/question';

export default function (state = {}, action = {}) {
    switch (action.type) {
        case ADDED_QUESTION:
            return action.payload;
        default:
            return state;
    }
}