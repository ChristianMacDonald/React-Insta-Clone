import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this.setState({ data: dummyData });
    }

    render() {
        return (
            <div className="App">
                <SearchBar />
                {dummyData.map(datum => <PostContainer post={datum} />)}
            </div>
        );
    }
}

export default App;
