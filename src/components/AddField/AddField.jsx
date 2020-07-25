import React from 'react';

import './AddField.scss';

const AddField = () => (
    <div className='addField'>
        <label htmlFor='userId'>id</label>
        <input type="text" id='userId' className='addField__input' />
        <label htmlFor='firstName'>firstName</label>
        <input type="text" id='firstName' className='addField__input' />
        <label htmlFor='lastName'>lastName</label>
        <input type="text" id='lastName' className='addField__input' />
        <label htmlFor='email'>email</label>
        <input type="text" id='email' className='addField__input' />
        <label htmlFor='phone'>phone</label>
        <input type="text" id='phone' className='addField__input' />
        <button className='addField__button'>Добавить в таблицу</button>
    </div>
)

export default AddField;
