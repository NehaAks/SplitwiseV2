import { TYPES } from "../actions/getGroupAction";

const initialState = {
    userData: [],
    authLoader: false,
    groupArray: []
};

const GET_GROUP_REDUCER = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_GROUP_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.GET_GROUP_SUCCESS:
            return {
                ...state,
                userData: action.payload

            };
        case TYPES.GET_GROUP_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        case TYPES.STORE_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.STORE_SUCCESS:
            return {
                ...state,
                groupArray: action.payload

            };
        case TYPES.STORE_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default GET_GROUP_REDUCER;
