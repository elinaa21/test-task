import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import arrowDown from '../../img/down.png';
import arrowUp from '../../img/up.png';
import arrowRight from '../../img/right.png';
import arrowLeft from '../../img/left.png';
import { increasePageNumber, decreasePageNumber, setCurrentUser, setData } from '../../redux/actions.js';

import './Table.scss';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: false,
            firstName: false,
            lastName: false,
            email: false,
            phone: false
        }

        this.sortingId = this.sorting('id').bind(this);
        this.sortingLastName = this.sorting('lastName').bind(this);
        this.sortingFirstName = this.sorting('firstName').bind(this);
        this.sortingEmail = this.sorting('email').bind(this);
        this.sortingPhone = this.sorting('phone').bind(this);
    }

    sorting = (value) => {
        return function() {
            const toMutate = {};
            toMutate[value] = !this.state[value];
            this.setState(toMutate);

            const { data } = this.props;
            if (value === 'id') {
                this.state[value] ? 
                    data.sort((a, b) => b[value] - a[value]) :
                    data.sort((a, b) => a[value] - b[value])
            } else {
                this.state[value] ? 
                    data.sort((a, b) => {
                        return a[value] > b[value] ? -1 : a[value] < b[value] ? 1 : 0
                    }) :
                    data.sort((a, b) => {
                        return a[value] > b[value] ? 1 : a[value] < b[value] ? -1 : 0
                    });
            }
            this.props.setData(data);
        };
    }

    handleUserClick = (i) => {
        const index = 20 * this.props.pageNumber + i;
        this.props.setCurrentUser(this.props.data[index]);
    }
    
    render() {
        const { 
            data, 
            pageNumber, 
            pageCount, 
            increasePageNumber, 
            decreasePageNumber,
            begin,
            end,
            found,
            searchText
        } = this.props;

        const canClickLeft = pageNumber !== 0;
        const canClickRight = pageNumber !== pageCount - 1;
        
        return (
            <div className='tableField'>
                <img 
                    src={arrowLeft} 
                    className={`arrow arrow_active_${canClickLeft}`} 
                    onClick={canClickLeft ? decreasePageNumber : undefined}
                />
                <table id='table'>
                    <thead>
                        <tr>
                            <td>
                                id
                                <img 
                                    src={this.state.id ? arrowUp : arrowDown} 
                                    className='table__arrow'
                                    onClick={this.sortingId}
                                />
                            </td>
                            <td>
                                firstName
                                <img 
                                    src={this.state.firstName ? arrowUp : arrowDown} 
                                    className='table__arrow' 
                                    onClick={this.sortingFirstName}
                                />
                            </td>
                            <td>
                                lastName
                                <img 
                                    src={this.state.lastName ? arrowUp : arrowDown} 
                                    className='table__arrow' 
                                    onClick={this.sortingLastName}
                                />
                            </td>
                            <td>
                                email
                                <img 
                                    src={this.state.email ? arrowUp : arrowDown} 
                                    className='table__arrow'
                                    onClick={this.sortingEmail}
                                />
                            </td>
                            <td>
                                phone
                                <img 
                                    src={this.state.phone ? arrowUp : arrowDown} 
                                    className='table__arrow'
                                    onClick={this.sortingPhone}
                                />
                            </td>
                        </tr>
                    </thead>
                    <tbody id='tableBody'>
                        {(searchText.length ? found : data).slice(begin, end).map(({ id, firstName, lastName, email, phone }, i) => (
                                <tr key={id + Math.floor(Math.random() * 900000)} onClick={() => this.handleUserClick(i)}>
                                    <td>{id}</td>
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <img 
                    src={arrowRight} 
                    className={`arrow arrow_active_${canClickRight}`} 
                    onClick={canClickRight ? increasePageNumber : undefined}
                />
            </div>
        )
    }
}

Table.propTypes = {
    data: PropTypes.array,
    pageNumber: PropTypes.number,
    pageCount: PropTypes.number,
    increasePageNumber: PropTypes.func,
    decreasePageNumber: PropTypes.func,
    begin: PropTypes.number,
    end: PropTypes.number,
    searchFlag: PropTypes.bool,
    found: PropTypes.array,
    searchText: PropTypes.string,
    setCurrentUser: PropTypes.func,
    currentUser: PropTypes.object,
    setData: PropTypes.func
};

const mapStateToProps = (state) => ({
    data: state.table.data,
    pageNumber: state.table.pageNumber,
    pageCount: state.table.pageCount,
    begin: state.table.begin,
    end: state.table.end,
    searchFlag: state.table.searchFlag,
    searchText: state.table.searchText,
    found: state.table.found,
    currentUser: state.table.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    increasePageNumber: () => dispatch(increasePageNumber()),
    decreasePageNumber: () => dispatch(decreasePageNumber()),
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    setData: (data) => dispatch(setData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
