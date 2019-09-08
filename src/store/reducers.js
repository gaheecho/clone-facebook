import { combineReducers } from 'redux';
import {
    WRITE_COMMENT,
    READ_COMMENTS
} from './actions';

let initialState = {
    commentList: []
};

function comment(state = initialState, action) {
    switch(action.type) {
        case WRITE_COMMENT:
            return [
                ...state.commentList,
                action.comment
            ];
        case READ_COMMENTS:
            return [
                ...action.commentList
            ];
        default:
            return state;
    }
}

const reducers = combineReducers({
    comment
});

export default reducers;