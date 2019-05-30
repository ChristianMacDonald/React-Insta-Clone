import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentContainer = styled.div`
    text-align: left;
    padding: 5px 20px 20px 20px;
`;

const Comment = styled.p`
    &:first-child {
        margin-top: 0;
    }
`;

const Username = styled.b`
    margin-right: 5px;
`;

const CommentField = styled.input.attrs({ placeholder: 'Add a comment...' })`
    border: 0;
    width: 100%;
`;

const CommentSection = props => {
    return (
        <CommentContainer>
            {props.comments.map((comment, index) => {
                return (
                    <Comment key={index}>
                        <Username>{comment.username}</Username>
                        {comment.text}
                    </Comment>
                );
            })}
            <CommentField onKeyDown={props.addCommentHandler} data-index={props.index} />
        </CommentContainer>
    );
};

CommentSection.propTypes = {
    comments: PropTypes.array,
    index: PropTypes.number,
    addCommentHandler: PropTypes.func
};

export default CommentSection;