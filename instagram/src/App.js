import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
    constructor() {
        super();
        this.state = { data: [] };
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        this.setState({ data: dummyData });
    }

    handleKeyDown(event) {
        if (event.key === "Enter") {
            let new_comments = [...this.state.data[event.target.dataset.index].comments];
            new_comments.push({ username: "defaultUser", text: event.target.value });
            let new_datum = { ...this.state.data[event.target.dataset.index], comments: new_comments };
            let new_data = [...this.state.data];
            new_data[event.target.dataset.index] = new_datum;
            this.setState({ data: new_data });
        }
    }

    render() {
        return (
            <div className="App">
                <SearchBar logo={logo} />
                {this.state.data.map((datum, index) => <PostContainer post={datum} key={index} index={index} keyDownHandler={this.handleKeyDown} />)}
            </div>
        );
    }
}

export default App;
