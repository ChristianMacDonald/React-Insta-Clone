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
                <div>
                    <i className="fab fa-instagram"></i>
                    <img src={this.props.wordmark} alt="wordmark" />
                </div>
                <form>
                    <i className="fas fa-search"></i>
                    <input placeholder="Search" onChange={this.handleChange} />
                </form>
                <span>Placeholder</span>
            </div>
        );
    }
}

export default SearchBar;