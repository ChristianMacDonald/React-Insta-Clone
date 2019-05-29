import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className="CommentSection">
            {props.comments.map((comment, index) => {
                return (
                    <p className="Comment" key={index}>
                        <b>{comment.username}</b>
                        {comment.text}
                    </p>
                );
            })}
            <input placeholder="Add a comment..." onKeyDown={props.addCommentHandler} data-index={props.index} />
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.array,
    index: PropTypes.number,
    addCommentHandler: PropTypes.func
};

export default CommentSection;