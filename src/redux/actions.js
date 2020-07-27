import { actionTypes } from './reducers';

export const setData = (data) => ({
    type: actionTypes.SET_DATA,
    payload: { data, pageCount: Math.ceil(data.length / 20) }
});

export const increasePageNumber = () => ({
    type: actionTypes.INCREASE_PAGE_NUMBER
});

export const decreasePageNumber = () => ({
    type: actionTypes.DECREASE_PAGE_NUMBER
});

export const setSearchText = (searchText) => ({
    type: actionTypes.SET_SEARCH_TEXT,
    payload: { searchText }
});

export const addUser = (user) => ({
    type: actionTypes.ADD_USER,
    payload: { user }
})

export const setCurrentUser = (user) => ({
    type: actionTypes.SET_CURRENT_USER,
    payload: { user }
})
