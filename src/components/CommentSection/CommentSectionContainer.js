// You will add code to this file
import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = props => {
  // Add state for the comments

  // ** Step 1 was to console log what props is in this component
  console.log('props in the comment section', props);
  // ** Step 2 was to set sate for the comments
  // ! by using props.comments
  const [comments, setComments] = useState(props.comments);
  return (
    <div>
      {/* map through the comments data (which was set in state) and return the Comment component */}
      {comments.map((item, index) => {
        return <Comment comment={item} key={index} />;
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
