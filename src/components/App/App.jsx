import React from 'react';

import Table from '../Table/Table.jsx'
import About from '../About/About.jsx';
import Search from '../Search/Search.jsx';
import AddField from '../AddField/AddField.jsx';

import './App.scss';

const App = () => (
    <div className='main'>
        <h1>Table with users</h1>
        <div className='options'>
            <button className='addButton'>Добавить</button>
            <Search />
        </div>
        <AddField />
        <Table />
        <About />
    </div>
)

export default App;
