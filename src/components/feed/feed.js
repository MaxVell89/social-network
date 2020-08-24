import React, {useEffect} from 'react';
import {Formik} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {postsActions} from "../../ducks/posts/actions";

const Feed = () => {
    const dispatch = useDispatch();
    const posts = useSelector(store => store.posts);

    useEffect(() => {
        dispatch(postsActions.fetchPostsAsync());
    }, []);

    return (
        <div>
            <Formik
                initialValues={{ comment: '' }}
                onSubmit={(values) => {
                    dispatch(postsActions.createPostsAsync(values.comment));
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="comment"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.comment}
                        />
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                )}
            </Formik>

            {posts.map((post) => {
                return (
                    <div key={post.get('_id')} style={{marginBottom: '20px'}}>
                        <h4>{post.get('author')}</h4>
                        <div>{post.get('comment')}</div>
                    </div>
                );
            })}

        </div>
    );
};

export default Feed;
