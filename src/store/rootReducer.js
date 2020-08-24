import { combineReducers } from "redux";
import {postsReducer as posts} from '../ducks/posts/reducer';
import {uiReducer as ui} from '../ducks/ui/reducer';

export const rootReducer =  combineReducers({
    posts,
    ui
});
