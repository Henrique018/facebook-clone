import React from 'react';

import './PostComment.styles.css';

const PostCommment = ({ comment }) => {
  return (
    <div className="container">
      <img 
        className="user-avatar" 
        src={ comment.author.avatar }
        alt="user avatar"/>
      <div className="comment">
          <h4 className="username">{ comment.author.name}</h4>
          {comment.content}
      </div>
    </div>
  )
}

export default PostCommment;