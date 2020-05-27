import React, { Fragment, useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'store';
import { IPosts } from 'store/posts/types';
import { thunkAddPost } from 'thunk/thunkPosts';
import BackButton from 'Components/BackButton';
import PostForm from './Components/PostForm';
import Loader from 'Components/Loader';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const ref = useRef<any>(null);
  const history = useHistory();
  const [isLoading, setisLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { user, posts } = useSelector((state: AppState) => ({
    ...state.currentUser,
    ...state.posts,
  }));

  useEffect(() => {
    if (!posts.length) {
      history.push('/');
      return;
    }
    if (posts.length) return;

    return () => {
      clearTimeout(ref.current);
    };
  }, [history, posts.length]);

  const syncValues = async (values: any) => {
    setisLoading(true);
    const maxId: any = posts.reduce((max, post) =>
      max.id > post.id ? max : post
    );
    const dataPost: IPosts = {
      id: parseInt(maxId.id) + 1,
      body: values.body,
      title: values.title,
      userId: user.id,
    };
    ref.current = setTimeout(() => {
      dispatch(thunkAddPost(dataPost));
      history.push('/');
    }, 1000);
  };
  return (
    <Fragment>
      <BackButton />
      <div className='ui form create-post-form'>
        <h4 className='ui dividing header'>
          Hi, <i>{user.name}</i> would like to add a new post ?
        </h4>
        <div className='field'>
          <Loader isLoading={isLoading} />
          <PostForm onSubmit={syncValues} />
        </div>
      </div>
    </Fragment>
  );
};

export default Create;
