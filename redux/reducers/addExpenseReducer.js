import { TYPES } from "../actions/addExpenseAction";

const initialState = {
    userData: [],
    authLoader: false,
};

const AddExpenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_EXPENSE_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.ADD_EXPENSE_SUCCESS:
            return {
                ...state,
                userData: action.payload
                
            };
        case TYPES.ADD_EXPENSE_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default AddExpenseReducer;
