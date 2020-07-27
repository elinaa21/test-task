import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import App from '../App/App.jsx'
import { setData } from '../../redux/actions';

import './ChooseAmount.scss';

const smallDataURL = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
const bigDataURL = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'

class ChooseAmount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: false }
    }
    
    handleClick = (dataURL) => {
        this.setState({isLoading: true})
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.props.setData(res);
            });
    }

    render() {
        return (
            this.props.data.length ? <App /> :
            <div className='chooseAmount'>
                {this.state.isLoading ? <div className='spinner' /> : <></>}
                <button className='chooseAmount__button' onClick={() => this.handleClick(bigDataURL)}>Big amount of data</button>
                <button className='chooseAmount__button' onClick={() => this.handleClick(smallDataURL)}>Small amount of data</button>
            </div>
        )
    }
}

ChooseAmount.propTypes = {
    data: PropTypes.array,
    setData: PropTypes.func 
};

const mapStateToProps = (state) => ({
    data: state.table.data,
});

const mapDispatchToProps = (dispatch) => ({
    setData: (data) => dispatch(setData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseAmount);
