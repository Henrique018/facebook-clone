import React from 'react';
import PostComment from '../PostComment/PostComment.component.jsx';
import './post.styles.css';

const Post = ({ data }) => {
  return (
    <div className="post">
      <div className="head">
        <img className="user-avatar" src={data.author.avatar} alt="avatarname"/>
        <h3 className="username">{ data.author.name }</h3> 
      </div>
        <span className="date">{data.date}</span>

      <div className="content">
        { data.content }
      </div>

      <hr className="hrow"/>

      <div className="comments">
        { data.comments.map(comment => 
        <PostComment key={comment.id} comment={comment} /> )}
      </div>
    </div>
  )
}

export default Post;