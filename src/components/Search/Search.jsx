import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setSearchText, findUsers } from '../../redux/actions';

import './Search.scss';

class Search extends React.Component {

    render() {
        const { searchText, setSearchText } = this.props;
        return (
            <div className='search'>
                <input 
                    type='text' 
                    className='search__input' 
                    placeholder='Поиск' 
                    value={searchText}
                    onChange={setSearchText}
                />
            </div>
        );
    }
}

Search.propTypes = {
    searchText: PropTypes.string,
    setSearchText: PropTypes.func,
};

const mapStateToProps = (state) => ({
    searchText: state.table.searchText
})

const mapDispatchToProps = (dispatch) => ({
    setSearchText: (e) => dispatch(setSearchText(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
