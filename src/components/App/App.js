import React from 'react';

import Table from '../Table/Table'
import About from '../About/About';

import './App.scss';

const App = () => (
    <div className='main'>
        <h1>Table with users</h1>
        <Table />
        <About />
    </div>
)

export default App;
