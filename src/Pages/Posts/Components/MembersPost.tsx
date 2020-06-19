import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'store';
import { IPosts } from 'store/posts/types';
import Loader from 'Components/Loader';
import Cards from './Cards';
import { Link, useHistory } from 'react-router-dom';
import { thunkDeletPost } from 'thunk/thunkPosts';

const MembersPost = () => {
  const ref = useRef<any>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const [isDeleting, seDeleting] = useState<any>(0);
  const { posts, currentUser } = useSelector((state: AppState) => ({
    ...state,
  }));

  const createPost = (e: React.MouseEvent) => {
    e.preventDefault();
    history.push('/createPost');
  };

  useEffect(() => {
    return () => {
      clearTimeout(ref.current);
    };
  }, []);

  const deletePost = (id: any) => {
    ref.current = setTimeout(() => {
      dispatch(thunkDeletPost(id));
    }, 1000);
  };

  return (
    <div className='post-lists' data-testid='post-lists-component'>
      <h2>{currentUser.user.name || 'Loading......'}</h2>
      <button className='fluid ui blue button create-post' onClick={createPost}>
        <i className='file icon'></i>
        Create New Post
      </button>
      {posts.isLoading}
      <Loader isLoading={posts.isLoading} />
      {!posts.isLoading &&
        posts.posts.map((data: IPosts) => {
          return (
            <Cards
              key={data.id}
              header={data.title}
              description={data.body}
              actions={true}>
              <div className='extra content'>
                <div className='ui buttons'>
                  <Link className='ui  button' to={`/viewPost/${data.id}`}>
                    View
                  </Link>
                  <div
                    className={`ui  button  ${
                      isDeleting === data.id ? 'loading' : ''
                    }`}
                    onClick={async () => {
                      seDeleting(data.id);
                      deletePost(data.id);
                    }}>
                    Delete
                  </div>
                </div>
              </div>
            </Cards>
          );
        })}
    </div>
  );
};

export default MembersPost;
