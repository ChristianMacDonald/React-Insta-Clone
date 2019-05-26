import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

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
            <div className="PostContainer">
                <div className="PostContainerHeader">
                    <img src={this.props.post.thumbnailUrl} alt="thumbnail" />
                    <span>{this.props.post.username}</span>
                </div>
                <div className="PostContainerImage">
                    <img src={this.props.post.imageUrl} alt="post" />
                </div>
                <div className="PostContainerStats">
                    <i className={`${this.state.liked ? "fas fa-heart" : "far fa-heart"}`} data-index={this.props.index} onClick={this.like}></i>
                    <i className="far fa-comment"></i>
                    <br />
                    <span>{this.props.post.likes} likes</span>
                </div>
                <CommentSection comments={this.props.post.comments} index={this.props.index} addCommentHandler={this.props.addCommentHandler} />
            </div>
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