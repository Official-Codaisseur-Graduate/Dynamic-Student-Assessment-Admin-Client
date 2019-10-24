import { ADDED_QUESTION } from '../actions/question/question';

const initialState = {
    questionId: null,
}

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case ADDED_QUESTION:
            return { ...action.payload, error: null };
        default:
            return state;
    }
}