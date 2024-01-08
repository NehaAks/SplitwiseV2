import { TYPES } from "../actions/deleteExpenseAction";

const initialState = {
    userData: [],
    authLoader: false,
};

const DeleteExpenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.DELETE_EXPENSE_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.DELETE_EXPENSE_SUCCESS:
            return {
                ...state,
                userData: action.payload
                
            };
        case TYPES.DELETE_EXPENSE_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default DeleteExpenseReducer;
