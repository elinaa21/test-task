export const actionTypes = {
    SET_DATA: 'ADD_SMALL_DATA',
    INCREASE_PAGE_NUMBER: 'INCREASE_PAGE_NUMBER',
    DECREASE_PAGE_NUMBER: 'DECREASE_PAGE_NUMBER',
    SET_SEARCH_TEXT: 'SET_SEARCH_TEXT',
}

const initialState = {
    data: [],
    begin: 0,
    end: 20,
    pageCount: 0,
    pageNumber: 0,
    searchText: '',
    searchFlag: false,
    found: [],
};

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DATA:
            return {
                ...state,
                data: [...action.payload.data],
                pageCount: action.payload.pageCount
            };

        case actionTypes.INCREASE_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: state.pageNumber + 1,
                begin: state.begin + 20,
                end: state.end + 20,
            }

        case actionTypes.DECREASE_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: state.pageNumber - 1,
                begin: state.begin - 20,
                end: state.end - 20,
            }

        case actionTypes.SET_SEARCH_TEXT:
            const found = !action.payload.searchText.length ? [] : state.data.filter(({ id, firstName, lastName, email, phone }) => {
                let flag = false;
                [ id, firstName, lastName, email, phone ].forEach((value) => {
                    if (`${value}`.includes(action.payload.searchText)) flag = true;
                });
                return flag;
            });
            return {
                ...state,
                searchText: action.payload.searchText,
                begin: 0,
                end: 20,
                found,
                pageNumber: 0,
                pageCount: found.length ? Math.ceil(found.length / 20) : state.pageCount,
            }

        default:
            return { ...state };
    }
}
