import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import arrowDown from '../../img/down.png';

import './Table.scss';

class Table extends React.Component {
    addUsers = () => {
        const tableBody = document.getElementById('tableBody');
        const users20 = this.props.data.slice(0, 20);
            users20.forEach(user => {
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
    }

    componentDidMount() {
        this.addUsers();
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
    data: PropTypes.array
};

const mapStateToProps = (state) => ({
    data: state.table.data,
});

export default connect(mapStateToProps)(Table);
