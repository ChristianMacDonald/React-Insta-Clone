import React from 'react';
import './CommentSection.css';

function CommentSection(props) {
    return (
        <div className="CommentSection">
            {props.comments.map((comment, index) => {
                return (
                    <p className="Comment" key={index}>
                        <b>{comment.username}</b>
                        {comment.text}
                    </p>);
            })}
            <input placeholder="Add a comment..." onKeyDown={props.keyDownHandler} data-index={props.index} />
        </div>
    );
}

export default CommentSection;