import { TYPES } from "../actions/createGroupAction";

const initialState = {
    userData: [],
    authLoader: false,
};

const CREATE_GROUP_REDUCER = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.CREATE_GROUP_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.CREATE_GROUP_SUCCESS:
            return {
                ...state,
                userData: action.payload
                
            };
        case TYPES.CREATE_GROUP_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default CREATE_GROUP_REDUCER;
