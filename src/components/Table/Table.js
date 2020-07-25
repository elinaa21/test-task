import React from 'react';

import './Table.scss';

const Table = () => (
    <table>
        <thead>
            <tr>
                <td>id</td>
                <td>firstName</td>
                <td>lastName</td>
                <td>email</td>
                <td>phone</td>
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
