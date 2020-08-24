import {actionTypes} from "./types";

export const postsActions = {
    // Sync
    createPost: (post) => ({
        type: actionTypes.CREATE_POST,
        payload: post
    }),

    fillPosts: (posts) => ({
        type: actionTypes.FILL_POSTS,
        payload: posts
    }),

    // Async
    createPostsAsync: (comment) => ({
        type: actionTypes.CREATE_POST_ASYNC,
        payload: comment
    }),

    fetchPostsAsync: () => ({
        type: actionTypes.FETCH_POSTS_ASYNC,
    }),
}
