import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
    return (
        <div className="App">
            <SearchBar />
            {dummyData.map(datum => <PostContainer post={datum} />)}
        </div>
    );
}

export default App;
