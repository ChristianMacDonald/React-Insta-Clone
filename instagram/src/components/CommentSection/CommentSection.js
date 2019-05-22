import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="CommentSection">
                {this.props.comments.map(comment => <p className="Comment"><span>{comment.username}</span>{comment.text}</p>)}
            </div>
        );
    }
}

export default CommentSection;