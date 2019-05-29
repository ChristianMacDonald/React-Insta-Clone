import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

const App = () => {
    return (
        <div className="App">
            <ComponentFromWithAuthenticate data={dummyData} />
        </div>
    );
}

export default App;
