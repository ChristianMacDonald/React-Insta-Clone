import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="SearchBar">
            <div>
                <i className="fab fa-instagram"></i>
                <img src={props.wordmark} alt="wordmark" />
            </div>
            <form>
                <i className="fas fa-search"></i>
                <input placeholder="Search" onChange={props.searchHandler} />
            </form>
            <span>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </span>
        </div>
    );
};

SearchBar.propTypes = {
    wordmark: PropTypes.string,
    searchHandler: PropTypes.func
};

export default SearchBar;