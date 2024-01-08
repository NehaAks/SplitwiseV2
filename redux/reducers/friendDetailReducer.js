import { TYPES } from "../actions/friendDetailAction";

const initialState = {
    userData: [],
    authLoader: false,
};

const FriendDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FRIEND_DETAIL_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.FRIEND_DETAIL_SUCCESS:
            return {
                ...state,
                userData: action.payload
                
            };
        case TYPES.FRIEND_DETAIL_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default FriendDetailReducer;
