import { ADDED_QUESTION } from '../actions/question/question';

export default function (state = null, action = {}) {
    switch (action.type) {
        case ADDED_QUESTION:
            return action.payload;
        default:
            return state;
    }
}