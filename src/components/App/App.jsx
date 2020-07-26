import React from 'react';

import Table from '../Table/Table.jsx'
import About from '../About/About.jsx';
import Search from '../Search/Search.jsx';
import AddField from '../AddField/AddField.jsx';

import './App.scss';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAddField: false
        }
    }

    handleAddButtonClick = () => {
        if (this.state.showAddField) {
            this.setState({ showAddField: false });
        } else {
            this.setState({ showAddField: true });
        }
    }

    render() {
        return (
            <div className='main'>
                <h1>Table with users</h1>
                <div className='options'>
                    <button className='addButton' onClick={this.handleAddButtonClick}>Добавить</button>
                    <Search />
                </div>
                    {this.state.showAddField ? <AddField /> : <></>}
                <Table />
                <About />
            </div>
        )
    }
}

export default App;
