import {takeEvery, all, call} from "@redux-saga/core/effects";
import {actionTypes} from "../types";
import {createPost, fetchPosts} from './workers';

export const watchCreatePost = function* () {
    yield takeEvery(actionTypes.CREATE_POST_ASYNC, createPost);
};

export const watchFetchPosts = function* () {
    yield takeEvery(actionTypes.FETCH_POSTS_ASYNC, fetchPosts);
};

export const watchPosts = function* () {
    yield all([
        call(watchCreatePost),
        call(watchFetchPosts),
    ]);
}
