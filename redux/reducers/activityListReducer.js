import { TYPES } from "../actions/activityListAction";

const initialState = {
    userData: [],
    authLoader: false,
};

const ActivityListReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_ACTIVITY_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.GET_ACTIVITY_SUCCESS:
            return {
                ...state,
                userData: action.payload
                
            };
        case TYPES.GET_ACTIVITY_FAIL:
            return {
                ...state,
                authLoader: false,
            };
        default:
            return state;
    }
};

export default ActivityListReducer;
