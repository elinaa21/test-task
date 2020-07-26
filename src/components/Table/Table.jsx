import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import arrowDown from '../../img/down.png';

import './Table.scss';

const smallDataURL = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

const getUsers = () => {
    const tableBody = document.getElementById('tableBody');
    fetch(smallDataURL)
        .then(res => res.json())
        .then(res => {
            res.forEach(user => {
                const tr = document.createElement('tr');

                const tdId = tr.appendChild(document.createElement('td'));
                tdId.innerHTML = user.id;

                const tdFirstName = tr.appendChild(document.createElement('td'));
                tdFirstName.innerHTML = user.firstName;

                const tdLastName = tr.appendChild(document.createElement('td'));
                tdLastName.innerHTML = user.lastName;

                const tdEmail = tr.appendChild(document.createElement('td'));
                tdEmail.innerHTML = user.email;

                const tdPhone = tr.appendChild(document.createElement('td'));
                tdPhone.innerHTML = user.phone;

                tableBody.appendChild(tr);
            });
        });
}

class Table extends React.Component {
    componentDidMount() {
        getUsers();
    }
    
    render() {
        return (
            <table id='table'>
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
                <tbody id='tableBody'>
                </tbody>
            </table>
        )
    }
}

Table.propTypes = {
    amountOfData: PropTypes.string,
    data: PropTypes.array
};

const mapStateToProps = (state) => ({
    amountOfData: state.table.amountOfData,
    data: state.table.data,
});

// const mapDispatchToProps = (dispatch) => ({
//     setData: (data)
// });

export default connect(mapStateToProps)(Table);
