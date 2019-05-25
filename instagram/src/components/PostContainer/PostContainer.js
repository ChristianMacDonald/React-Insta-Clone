import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    return (
        <div className="PostContainer">
            <div className="PostContainerHeader">
                <img src={props.post.thumbnailUrl} alt="thumbnail" />
                <span>{props.post.username}</span>
            </div>
            <div className="PostContainerImage">
                <img src={props.post.imageUrl} alt="post" />
            </div>
            <div>
                <span>{props.post.likes}</span>
            </div>
            <CommentSection comments={props.post.comments} index={props.index} keyDownHandler={props.keyDownHandler} />
        </div>
    );
}

export default PostContainer;