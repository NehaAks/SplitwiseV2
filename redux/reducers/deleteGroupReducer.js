import { TYPES } from "../actions/deleteGroupAction";

const initialState = {
    userData: [],
    authLoader: false,
};

const DeleteGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.DELETE_GROUP_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.DELETE_GROUP_SUCCESS:
            return {
                ...state,
                userData: action.payload
                
            };
        case TYPES.DELETE_GROUP_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default DeleteGroupReducer;
