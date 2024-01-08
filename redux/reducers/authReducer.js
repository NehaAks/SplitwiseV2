import { TYPES } from '../actions/authAction';

const initialState = {
  userData: {},
  accessToken: null,
  instituteId: null,
  userId: null,
  role_id:null,
  displayName:null,
  authLoader: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AUTH_LOADER_RESET:
      return {
        ...state,
        authLoader: false,
        
      };
    case TYPES.LOGIN_USER_REQUEST:
      return {
        ...state,
        authLoader: true,
      };
    case TYPES.LOGIN_USER_SUCCESS:
      return {
        ...state,
        accessToken: action.payload?.output?.data?.token,
        instituteId: action.payload?.output?.data?.instituteId,
        userId: action.payload?.output?.data?.userId,
        role_id: action.payload?.output?.data?.role_id,
        displayName:action.payload?.output?.data?.displayname,
        authLoader: false,
      };
    case TYPES.LOGIN_USER_FAIL:
      return {
        ...state,
        authLoader: false,
      };
    // case TYPES.VERIFY_OTP_REQUEST:
    //   return {
    //     ...state,
    //     authLoader: true
    //   };
    // case TYPES.VERIFY_OTP_SUCCESS:
    //   return {
    //     ...state,
    //     authLoader: false
    //   };
    // case TYPES.VERIFY_OTP_FAILURE:
    //   return {
    //     ...state,
    //     authLoader: false
    //   }
    // case TYPES.SEND_OTP_REQUEST:
    //   return {
    //     ...state,
    //     loader: true,
    //   };
    // case TYPES.SEND_OTP_SUCCESS:
    //   return {
    //     ...state,
    //     loader: false,
    //   };
    // case TYPES.SEND_OTP_FAIL:
    //   return {
    //     ...state,
    //     loader: false,
    //   };
    // case TYPES.CHANGE_PASSWORD_REQUEST:
    //   return {
    //     ...state,
    //     authLoader: true,
    //   };
    // case TYPES.CHANGE_PASSWORD_SUCCESS:
    //   return {
    //     ...state,
    //     authLoader: false,
    //   };
    // case TYPES.CHANGE_PASSWORD_FAIL:
    //   return {
    //     ...state,
    //     authLoader: false,
    //   };
    // case TYPES.LOGOUT_USER_REQUEST:
    //   return {
    //     ...state,
    //     authLoader: true,
    //   };
    // case TYPES.LOGOUT_USER_SUCCESS:
    //   return {
    //     ...state,
    //     authLoader: false,
    //     accessToken: null
    //   };
    // case TYPES.LOGOUT_USER_FAILURE:
    //   return {
    //     ...state,
    //     authLoader: false,
    //   };
    default:
      return state;
  }
};

export default authReducer;
