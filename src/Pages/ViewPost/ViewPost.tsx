import React, { Fragment, useEffect, useState } from 'react';
import BackButton from 'Components/BackButton';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkSelectedPost } from 'thunk/thunkPosts';
import { getCommentsByPostId } from 'services/getRequest';
import { AppState } from 'store';
import Comments from './Components/Comments';

const ViewPost = () => {
  const [comments, setcomments] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state: AppState) => ({
    ...state.viewPost,
  }));

  useEffect(() => {
    if (comments.length) return;
    dispatch(thunkSelectedPost(id));
    (async () => {
      const { data } = await getCommentsByPostId(id);
      setcomments(data);
    })();
  }, [dispatch, comments, id]);

  return (
    <Fragment>
      <BackButton />
      <div className='ui one column  padded  container view-posts segment '>
        <div className='row'>
          <h2 className='ui dividing header'>{post.title}</h2>
          <div className='ui  segment'>
            <p>{post.body}</p>
          </div>
        </div>
        <Comments comments={comments} />
      </div>
    </Fragment>
  );
};

export default ViewPost;
