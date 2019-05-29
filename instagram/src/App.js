import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';

const App = () => {
    return (
        <div className="App">
            <PostsPage data={dummyData} />
        </div>
    );
}

export default App;
