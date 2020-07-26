export const actionTypes = {
    SET_DATA: 'ADD_SMALL_DATA',
    SET_AMOUNT_OF_DATA: 'SET_AMOUNT_OF_DATA'
}

const initialState = {
    data: [],
    amountOfData: '',
};

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DATA:
            return {
                ...state,
                data: action.payload.data
            };

        case actionTypes.SET_AMOUNT_OF_DATA:
            return {
                ...state,
                data: action.payload.amountOfData
            };

        default:
            return { ...state };
    }
}
