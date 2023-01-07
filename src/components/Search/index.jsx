import React from 'react';
import searchLogo from '../../assets/search-icon.svg';
import classNames from './Search.module.scss';

const Search = () => {
    return (
        <div className={classNames.root}>
            <input
                placeholder="Найти пиццу..."
                className={classNames.input}
                type="text"
            />
            <img
                src={searchLogo}
                alt="PizzaBlock logo"
                className={classNames.logo}
            />
        </div>
    );
};

export default Search;