import React from 'react';
import './PostContainer.css';

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
            </div>
        );
    }
}

export default PostContainer;