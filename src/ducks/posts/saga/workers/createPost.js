import {put, apply} from 'redux-saga/effects';

import {api} from "../../../../services/api";

import {postsActions} from '../../actions';
import {uiActions} from '../../../ui/actions';

export const createPost = function* (action) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.feed.create, [action.payload]);
        const {data: post, message} = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.createPost(post));
    } catch (err) {
        yield put(uiActions.emitError(err, 'createPost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
};
