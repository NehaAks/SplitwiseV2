import { TYPES } from "../actions/getUserDetailAction";

const initialState = {
    userData: [],
    userData2: [],
    authLoader: false,
};

const GetUserDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.USER_DETAIL_REQUEST:
            return {
                ...state,
                authLoader: false,

            };
        case TYPES.USER_DETAIL_SUCCESS:
            return {
                ...state,
                userData: action.payload
                
            };
        case TYPES.USER_DETAIL_FAIL:
            return {
                ...state,
                authLoader: false,
            };
            case TYPES.USER_DETAIL_TO_REQUEST:
                return {
                    ...state,
                    authLoader: false,
    
                };
            case TYPES.USER_DETAIL_TO_SUCCESS:
                return {
                    ...state,
                    userData2: action.payload
                    
                };
            case TYPES.USER_DETAIL_TO_FAIL:
                return {
                    ...state,
                    authLoader: false,
                };
        default:
            return state;
    }
};

export default GetUserDetailReducer;
