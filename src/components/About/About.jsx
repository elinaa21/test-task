import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './About.scss';

const About = (props) => (
    <div className='about'>
        <span className='description'>Выбран пользователь <b>{props.currentUser.firstName + ' ' + props.currentUser.lastName}</b></span>
        <span className='description'>Описание: <b>{props.currentUser.description ? props.currentUser.description : 'unknown'}</b></span>
        <span className='description'>Адрес проживания: <b>{props.currentUser.address ? props.currentUser.address.streetAddress : 'unknown'}</b></span>
        <span className='description'>Город: <b>{props.currentUser.address ? props.currentUser.address.city : 'unknown'}</b></span>
        <span className='description'>Провинция/штат: <b>{props.currentUser.address ? props.currentUser.address.state : 'unknown'}</b></span>
        <span className='description'>Индекс: <b>{props.currentUser.address ? props.currentUser.address.zip : 'unknown'}</b></span>
    </div>
)

About.propTypes = {
    currentUser: PropTypes.object,
};

const mapStateToProps = (state) => ({
    currentUser: state.table.currentUser
});

export default connect(mapStateToProps)(About);
