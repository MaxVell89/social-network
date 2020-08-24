import {actionTypes} from "./types";
import {List, fromJS} from 'immutable';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_POST:
            return state.unshift(fromJS(action.payload));

        case actionTypes.FILL_POSTS:
            return fromJS(action.payload);

        default:
            return state;
    }
};
