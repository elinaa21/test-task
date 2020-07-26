export const actionTypes = {
    SET_DATA: 'ADD_SMALL_DATA'
}

const initialState = {
    data: [],
};

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DATA:
            return {
                ...state,
                data: [...action.payload.data]
            };

        default:
            return { ...state };
    }
}
