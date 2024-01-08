import { TYPES } from "../actions/removeFriendAction";

const initialState = {
    userData: [],
    authLoader: false,
};

const RemoveFriendReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.REMOVE_FRIEND_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.REMOVE_FRIEND_SUCCESS:
            return {
                ...state,
                userData: action.payload

            };
        case TYPES.REMOVE_FRIEND_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default RemoveFriendReducer;
