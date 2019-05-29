import React from 'react';
import wordmark from '../../instagram-wordmark.svg';
import './PostsPage.css';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], searching: false, search_data: [] };
        this.addComment = this.addComment.bind(this);
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);
        this.search = this.search.bind(this);
        this.mapData = this.mapData.bind(this);
    }

    componentDidMount() {
        this.setState({ data: this.props.data, search_data: this.props.data });
    }

    addComment(event) {
        if (event.key === "Enter") {
            let new_comments = [...this.state.data[event.target.dataset.index].comments];
            new_comments.push({ username: this.props.username, text: event.target.value });
            let new_datum = { ...this.state.data[event.target.dataset.index], comments: new_comments };
            let new_data = [...this.state.data];
            new_data[event.target.dataset.index] = new_datum;
            this.setState({ data: new_data });
            event.target.value = "";
        }
    }

    like(event) {
        let new_likes = this.state.data[event.target.dataset.index].likes + 1;
        let new_datum = { ...this.state.data[event.target.dataset.index], likes: new_likes };
        let new_data = [...this.state.data];
        new_data[event.target.dataset.index] = new_datum;
        this.setState({ data: new_data });
    }

    unlike(event) {
        let new_likes = this.state.data[event.target.dataset.index].likes - 1;
        let new_datum = { ...this.state.data[event.target.dataset.index], likes: new_likes };
        let new_data = [...this.state.data];
        new_data[event.target.dataset.index] = new_datum;
        this.setState({ data: new_data });
    }

    search(event) {
        if (event.target.value === "") {
            this.setState({ searching: false, search_data: [] });
        } else {
            let new_search_data = this.state.data.filter(datum => datum.username === event.target.value);
            this.setState({ searching: true, search_data: new_search_data });
        }
    }

    mapData(datum, index) {
        return <PostContainer post={datum} key={index} index={index} addCommentHandler={this.addComment} likeHandler={this.like} unlikeHandler={this.unlike} />;
    }

    render() {
        return (
            <div className="PostsPage">
                <SearchBar wordmark={wordmark} searchHandler={this.search} />
                <div>
                    {this.state.searching ? this.state.search_data.map(this.mapData) : this.state.data.map(this.mapData)}
                </div>
            </div>
        );
    }
}

export default PostsPage;
