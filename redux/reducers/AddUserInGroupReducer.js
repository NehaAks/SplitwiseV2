import { TYPES } from "../actions/addUserInGroupAction";

const initialState = {
    userData: [],
    authLoader: false,
};

const AddUserInGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_USER_IN_GROUP_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.ADD_USER_IN_GROUP_SUCCESS:
            return {
                ...state,
                userData: action.payload
                
            };
        case TYPES.ADD_USER_IN_GROUP_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default AddUserInGroupReducer;
