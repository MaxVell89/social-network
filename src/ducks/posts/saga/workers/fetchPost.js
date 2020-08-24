import {put, apply} from 'redux-saga/effects';

import {api} from "../../../../services/api";

import {postsActions} from '../../actions';
import {uiActions} from '../../../ui/actions';

export const fetchPosts = function* () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.feed.fetch);
        const {data: posts, message} = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.fillPosts(posts));
    } catch (err) {
        yield put(uiActions.emitError(err, 'createPost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
};
