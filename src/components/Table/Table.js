import React from 'react';

import './Table.scss';

const Table = () => (
    <table className='table'>
        <th>
            <td className='table__head'>id</td>
            <td className='table__head'>firstName</td>
            <td className='table__head'>lastName</td>
            <td className='table__head'>email</td>
            <td className='table__head'>phone</td>
        </th>
    </table>
)

export default Table;
