import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addUser } from '../../redux/actions'

import './AddField.scss';

class AddField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idInput: '',
            firstNameInput: '',
            lastNameInput: '',
            emailInput: '',
            phoneInput: ''
        }
    }

    handleChangeId = (value) => {
        this.setState({ idInput: value});
    }

    handleChangeFirstName = (value) => {
        this.setState({ firstNameInput: value});
    }

    handleChangeLastName = (value) => {
        this.setState({ lastNameInput: value});
    }

    handleChangeEmail = (value) => {
        this.setState({ emailInput: value});
    }

    handleChangePhone = (value) => {
        this.setState({ phoneInput: value});
    }

    onAddUser = () => {
        if (!this.state.idInput.length || !this.state.firstNameInput.length || 
            !this.state.lastNameInput.length || !this.state.emailInput.length || !this.state.phoneInput.length) return;

        this.props.addUser({ 
            id: this.state.idInput, 
            firstName: this.state.firstNameInput, 
            lastName: this.state.lastNameInput,
            email: this.state.emailInput,
            phone: this.state.phoneInput
        });

        this.setState({
            idInput: '',
            firstNameInput: '',
            lastNameInput: '',
            emailInput: '',
            phoneInput: ''
        })
    }

    render() {
        return (
            <div className='addField'>
                <label htmlFor='userId'>id</label>
                <input 
                    type="text"
                    className='addField__input'
                    onChange={e => this.handleChangeId(e.target.value)}
                    value={this.state.idInput}
                />
                <label htmlFor='firstName'>firstName</label>
                <input 
                    type="text" 
                    className='addField__input'
                    onChange={e => this.handleChangeFirstName(e.target.value)}
                    value={this.state.firstNameInput}
                />
                <label htmlFor='lastName'>lastName</label>
                <input 
                    type="text" 
                    className='addField__input'
                    onChange={e => this.handleChangeLastName(e.target.value)}
                    value={this.state.lastNameInput}
                />
                <label htmlFor='email'>email</label>
                <input 
                    type="text" 
                    className='addField__input'
                    onChange={e => this.handleChangeEmail(e.target.value)}
                    value={this.state.emailInput}
                />
                <label htmlFor='phone'>phone</label>
                <input 
                    type="text"
                    className='addField__input'
                    onChange={e => this.handleChangePhone(e.target.value)}
                    value={this.state.phoneInput}
                />
                <button className='addField__button' onClick={this.onAddUser}>Добавить в таблицу</button>
            </div>
        )
    }
}


AddField.propTypes = {
    addUser: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
    addUser: (user) => dispatch(addUser(user))
});

export default connect(() => ({}), mapDispatchToProps)(AddField);
