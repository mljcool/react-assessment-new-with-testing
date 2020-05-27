import React, { Fragment } from 'react';
import Loader from 'Components/Loader';

const Comments: React.FC<{ comments: Array<any[]> }> = ({ comments }) => {
  return (
    <Fragment>
      <br />
      <div className='row'>
        <h2 className='ui dividing header'>
          <i className='tiny comments icon'></i>
          Comments
        </h2>
      </div>
      <div className='ui feed'>
        <Loader isLoading={!comments.length} />
        {comments.map((comment: any) => {
          return (
            <div key={comment.id} className='event'>
              <div className='label'>
                <i className='mini comment icon'></i>
              </div>
              <div className='content'>
                <div className='summary'>
                  <a href='#summary'> {comment.name}</a> .{comment.body}
                  <br />
                  <div className='date'>{comment.email}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Comments;
