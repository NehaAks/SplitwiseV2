import { TYPES } from "../actions/friendListAction";

const initialState = {
    userData: [],
    authLoader: false,
};

const FriendListReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_FRIEND_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.GET_FRIEND_SUCCESS:
            return {
                ...state,
                userData: action.payload
                
            };
        case TYPES.GET_FRIEND_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default FriendListReducer;
