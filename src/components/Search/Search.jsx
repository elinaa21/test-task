import React from 'react';

import './Search.scss';

const Search = () => (
    <div className='search'>
        <input type='text' className='search__input' placeholder='Поиск'/>
        <button className='search__button'>Найти</button>
    </div>
)

export default Search;