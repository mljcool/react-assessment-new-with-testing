import React, { useEffect } from 'react';
import Members from './Components/Members';
import MembersPost from './Components/MembersPost';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetUsers } from 'thunk/thunkUsers';
import { AppState } from 'store';
import { thunkGetPosts } from 'thunk/thunkPosts';

const Post = () => {
  const { users } = useSelector((state: AppState) => ({
    ...state.usersLists,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    if (users.length) return;
    dispatch(thunkGetUsers());
    dispatch(thunkGetPosts(''));
  }, [dispatch, users]);

  const onSelectedPost = (data: any) => {
    const { id = 1 } = data;
    dispatch(thunkGetPosts(id));
  };

  return (
    <div className='ui two column container  grid'>
      <div className='column'>
        <Members onSelectedPost={onSelectedPost} />
      </div>
      <div className='column'>
        <MembersPost />
      </div>
    </div>
  );
};

export default Post;
