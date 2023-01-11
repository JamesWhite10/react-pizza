import React from 'react';
import searchLogo from '../../assets/search-icon.svg';
import clearIcon from '../../assets/clear.svg';
import classNames from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {

    return (
        <div className={classNames.root}>
            <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Найти пиццу..."
                className={classNames.input}
                type="text"
            />
            <img
                src={searchLogo}
                alt="PizzaBlock logo"
                className={classNames.logo}
            />
            {
                searchValue && <img
                onClick={() => setSearchValue('')}
                src={clearIcon}
                alt="Clear icon"
                className={classNames.clear}
            />
            }
        </div>
    );
};

export default Search;