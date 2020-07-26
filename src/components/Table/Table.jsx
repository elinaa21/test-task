import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import arrowDown from '../../img/down.png';
import arrowRight from '../../img/right.png';
import arrowLeft from '../../img/left.png';
import { increasePageNumber, decreasePageNumber } from '../../redux/actions';

import './Table.scss';

class Table extends React.Component {
    
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
                                <img src={arrowDown} className='table__arrow' />
                            </td>
                            <td>
                                firstName
                                <img src={arrowDown} className='table__arrow' />
                            </td>
                            <td>
                                lastName
                                <img src={arrowDown} className='table__arrow' />
                            </td>
                            <td>
                                email
                                <img src={arrowDown} className='table__arrow' />
                            </td>
                            <td>
                                phone
                                <img src={arrowDown} className='table__arrow' />
                            </td>
                        </tr>
                    </thead>
                    <tbody id='tableBody'>
                        {
                            (searchText.length ? found : data).slice(begin, end).map(({ id, firstName, lastName, email, phone }) => (
                                <tr key={id + Math.floor(Math.random() * 900000)}>
                                    <td>{id}</td>
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                </tr>
                            ))
                        }
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
});

const mapDispatchToProps = (dispatch) => ({
    increasePageNumber: () => dispatch(increasePageNumber()),
    decreasePageNumber: () => dispatch(decreasePageNumber())
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
