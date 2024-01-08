import { TYPES } from "../actions/removeUserInGroupAction";

const initialState = {
    userData: [],
    authLoader: false,
};

const RemoveUserInGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.REMOVE_USER_IN_GROUP_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.REMOVE_USER_IN_GROUP_SUCCESS:
            return {
                ...state,
                userData: action.payload
                
            };
        case TYPES.REMOVE_USER_IN_GROUP_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default RemoveUserInGroupReducer;
