// You do not need to do anything in this file. Look at the CommentSection file.

import React from 'react';
import './Comment.css';

const Comment = props => {
  // console.log('COMMENTS!!!', props);
  return (
    <div className="comment-text">
      {/* This component uses comment as its prop reference */}
      <span className="user">{props.comment.username}</span>{' '}
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};

export default Comment;
