import React from 'react';

const withAuthenticate = PostsPage => Login => {
    return (
        class extends React.Component {
            constructor() {
                super();
                this.state = { loggedIn: false, username: '' };
            }

            componentDidMount() {
                let username = localStorage.getItem('username');
                if (username !== null) {
                    this.setState({ loggedIn: true, username: username });
                }
            }

            render() {
                if (this.state.loggedIn) {
                    return <PostsPage data={this.props.data} username={this.state.username} />
                } else {
                    return <Login />
                }
            };
        }
    );
};

export default withAuthenticate;