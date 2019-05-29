import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.login = this.login.bind(this);
    }

    login(event) {
        let current_username = localStorage.getItem('username');
        let inputs = event.target.elements;

        if (current_username === null) {
            localStorage.setItem('username', inputs['username'].value);
            localStorage.setItem('password', inputs['password'].value);
        }

        window.location.reload();
    }

    render() {
        return (
            <div>
                <form id="login-form" onSubmit={this.login}>
                    <input type="text" name="username" id="username" placeholder="username" required />
                    <input type="password" name="password" id="password" placeholder="password" required />
                    <input type="submit" value="Log In" />
                </form>
            </div>
        );
    }
}

export default Login;