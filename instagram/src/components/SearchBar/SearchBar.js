import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ input: event.target.value });
    }

    render() {
        return (
            <div className="SearchBar">
                <img src={this.props.logo} alt="logo" />
                <input placeholder="Search" onChange={this.handleChange} />
                <span>Placeholder</span>
            </div>
        );
    }
}

export default SearchBar;