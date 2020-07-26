import React from 'react';

import arrowDown from '../../img/down.png';

import './Table.scss';

const Table = () => (
    <table>
        <thead>
            <tr>
                <td>
                    id
                    <img src={arrowDown} className='arrow' />
                </td>
                <td>
                    firstName
                    <img src={arrowDown} className='arrow' />
                </td>
                <td>
                    lastName
                    <img src={arrowDown} className='arrow' />
                </td>
                <td>
                    email
                    <img src={arrowDown} className='arrow' />
                </td>
                <td>
                    phone
                    <img src={arrowDown} className='arrow' />
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Имя</td>
                <td>Характеристики</td>
                <td>Стоимость</td>
                <td>Характеристики</td>
                <td>Стоимость</td>
            </tr>
            <tr>
                <td>Имя #2</td>
                <td>Характеристики</td>
                <td>Стоимость</td>
                <td>Характеристики</td>
                <td>Стоимость</td>
            </tr>
            <tr>
                <td>Имя #3</td>
                <td>Характеристики</td>
                <td>Стоимость</td>
                <td>Характеристики</td>
                <td>Стоимость</td>
            </tr>
        </tbody>
    </table>
)

export default Table;
