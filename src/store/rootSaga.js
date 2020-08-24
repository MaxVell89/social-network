import {all, call} from 'redux-saga/effects';
import {watchPosts} from '../ducks/posts/saga/watchers';

export const rootSaga = function* () {
    console.log('root saga');
    yield all([
        call(watchPosts)
    ]);
};
