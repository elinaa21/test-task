import { actionTypes } from './reducers';

export const setData = (data) => ({
    type: actionTypes.SET_DATA,
    payload: { data }
});
