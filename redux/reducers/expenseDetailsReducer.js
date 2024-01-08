import { TYPES } from "../actions/expenseDetailsAction";

const initialState = {
    userData: [],
    authLoader: false,
};

const ExpenseDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.EXPENSE_DETAILS_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.EXPENSE_DETAILS_SUCCESS:
            return {
                ...state,
                userData: action.payload
                
            };
        case TYPES.EXPENSE_DETAILS_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default ExpenseDetailsReducer;
