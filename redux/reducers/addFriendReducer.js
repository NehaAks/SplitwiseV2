import { TYPES } from "../actions/addFriendAction";

const initialState = {
    userData: [],
    authLoader: false,
};

const AddFriendReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_FRIEND_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.ADD_FRIEND_SUCCESS:
            return {
                ...state,
                userData: action.payload
                
            };
        case TYPES.ADD_FRIEND_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default AddFriendReducer;
