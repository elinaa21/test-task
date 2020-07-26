import { actionTypes } from './reducers';

export const setData = (data) => ({
    type: actionTypes.SET_DATA,
    payload: { data }
});

export const setAmountOfData = (amountOfData) => ({
    type: actionTypes.SET_AMOUNT_OF_DATA,
    payload: { amountOfData }
});
