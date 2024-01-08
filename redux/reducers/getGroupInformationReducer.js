import { TYPES } from "../actions/getGroupInformationAction";

const initialState = {
    userData: [],
    authLoader: false,
};

const GetGroupInformationReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_GROUP_INFORMATION_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.GET_GROUP_INFORMATION_SUCCESS:
            return {
                ...state,
                userData: action.payload

            };
        case TYPES.GET_GROUP_INFORMATION_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default GetGroupInformationReducer;
