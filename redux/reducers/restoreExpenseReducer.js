import { TYPES } from "../actions/restoreExpenseAction";

const initialState = {
    userData: [],
    authLoader: false,
};

const RestoreExpenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.RESTORE_EXPENSE_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.RESTORE_EXPENSE_SUCCESS:
            return {
                ...state,
                userData: action.payload
                
            };
        case TYPES.RESTORE_EXPENSE_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default RestoreExpenseReducer;
