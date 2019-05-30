import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CommentSection from '../CommentSection/CommentSection';

const Post = styled.div`
    width: 35%;
    margin: 10px auto;
    border: 1px solid lightgray;
    border-radius: 5px;
    text-align: left;
    
    &:first-child {
        margin-top: 100px;
    }
`;

const PostHeader = styled.header`
    display: flex;
    align-items: center;
    padding: 10px;
`;

const Thumbnail = styled.img.attrs({ alt: 'thumbnail' })`
    width: 30px;
    border-radius: 30px;
`;

const Username = styled.span`
    font-weight: bold;
    margin: 5px;
`;

const PostImage = styled.img.attrs({ alt: 'post' })`
    width: 100%;
    height: auto;
`;

const PostStats = styled.div`
    padding: 20px 20px 5px 20px;
`;

const HeartIcon = styled.i`
    margin-right: 10px;
    font-size: 25px;
    margin-bottom: 5px;
    ${props => props.liked ? 'color: red;' : null}
`;

const CommentIcon = styled.i.attrs({ className: 'far fa-comment' })`
    font-size: 25px;
    margin-bottom: 5px;
`;

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
        this.like = this.like.bind(this);
    }

    like(event) {
        if (this.state.liked) {
            this.props.unlikeHandler(event);
        } else {
            this.props.likeHandler(event);
        }

        this.setState(prevState => ({ liked: !prevState.liked }));
    }

    render() {
        return (
            <Post>
                <PostHeader>
                    <Thumbnail src={this.props.post.thumbnailUrl}/>
                    <Username>{this.props.post.username}</Username>
                </PostHeader>
                <PostImage src={this.props.post.imageUrl} />
                <PostStats>
                    <HeartIcon className={`${this.state.liked ? "fas fa-heart" : "far fa-heart"}`} liked={this.state.liked} data-index={this.props.index} onClick={this.like} />
                    <CommentIcon />
                    <br />
                    <span>{this.props.post.likes} likes</span>
                </PostStats>
                <CommentSection comments={this.props.post.comments} index={this.props.index} addCommentHandler={this.props.addCommentHandler} />
            </Post>
        );
    }
}

PostContainer.propTypes = {
    post: PropTypes.object,
    addCommentHandler: PropTypes.func,
    likeHandler: PropTypes.func,
    unlikeHandler: PropTypes.func
};

export default PostContainer;