import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="PostContainer">
                <div className="PostContainerHeader">
                    <img src={this.props.post.thumbnailUrl} />
                    <span>{this.props.post.username}</span>
                </div>
                <div className="PostContainerImage">
                    <img src={this.props.post.imageUrl} />
                </div>
                <CommentSection comments={this.props.post.comments} />
            </div>
        );
    }
}

export default PostContainer;