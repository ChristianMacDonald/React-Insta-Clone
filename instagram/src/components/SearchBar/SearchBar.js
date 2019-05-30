import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import wordmark from '../../instagram-wordmark.svg';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
`;

const LogoHeader = styled.div``;

const Logo = styled.i.attrs({ className: 'fab fa-instagram' })`
    font-size: 50px;
    padding-right: 50px;
    border-right: 1px solid black;
`;

const Wordmark = styled.img.attrs({ src: wordmark, alt: 'wordmark' })`
    width: 100px;
    height: auto;
    margin-left: 50px;
`;

const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
    border: 1px solid lightgray;
    border-radius: 5px;
    text-align: center;
`;

const SearchIcon = styled.i.attrs({ className: 'fas fa-search' })`
    font-size: 12px;
    margin: 5px;
    color: gray;
`;

const SearchField = styled.input.attrs({ placeholder: 'Search' })`
    border: 0;
    font-weight: bold;
    font-size: 15px;
    color: darkgray;
    background: #eee;
    display: inline-block;
    width: 40%;
`;

const IconBar = styled.span`
    i {
        margin: 0 20px;
        font-size: 25px;
    }
`;

const CompassIcon = styled.i.attrs({ className: 'far fa-compass' })``;

const HeartIcon = styled.i.attrs({ className: 'far fa-heart' })``;

const UserIcon = styled.i.attrs({ className: 'far fa-user' })``;

const SearchBar = props => {
    return (
        <Header>
            <LogoHeader>
                <Logo />
                <Wordmark />
            </LogoHeader>
            <SearchForm>
                <SearchIcon />
                <SearchField onChange={props.searchHandler} />
            </SearchForm>
            <IconBar>
                <CompassIcon />
                <HeartIcon />
                <UserIcon />
            </IconBar>
        </Header>
    );
};

SearchBar.propTypes = {
    wordmark: PropTypes.string,
    searchHandler: PropTypes.func
};

export default SearchBar;