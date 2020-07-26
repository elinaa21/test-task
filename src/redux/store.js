import { combineReducers, createStore } from 'redux';
import { tableReducer } from './reducers'

const reducers = combineReducers({
    table: tableReducer,
});

const store = createStore(reducers);

export default store;
