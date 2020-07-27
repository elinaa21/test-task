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

        this.handleChangeId = this.handleChange('id').bind(this);
        this.handleChangeEmail = this.handleChange('email').bind(this);
        this.handleChangeLastName = this.handleChange('lastName').bind(this);
        this.handleChangeFirstName = this.handleChange('firstName').bind(this);
        this.handleChangePhone = this.handleChange('phone').bind(this);
    }

    handleChange(key) {
        return function(e) {
            const value = e.target.value;
            console.log(value);
            const toMutate = {};
            toMutate[`${key}Input`] = value;
            this.setState(toMutate);
        };
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
                    onChange={this.handleChangeId}
                    value={this.state.idInput}
                />
                <label htmlFor='firstName'>firstName</label>
                <input 
                    type="text" 
                    className='addField__input'
                    onChange={this.handleChangeFirstName}
                    value={this.state.firstNameInput}
                />
                <label htmlFor='lastName'>lastName</label>
                <input 
                    type="text" 
                    className='addField__input'
                    onChange={this.handleChangeLastName}
                    value={this.state.lastNameInput}
                />
                <label htmlFor='email'>email</label>
                <input 
                    type="text" 
                    className='addField__input'
                    onChange={this.handleChangeEmail}
                    value={this.state.emailInput}
                />
                <label htmlFor='phone'>phone</label>
                <input 
                    type="text"
                    className='addField__input'
                    onChange={this.handleChangePhone}
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
