import axios from "axios";
import { LOGIN} from "../../api/endpoints";

export const TYPES = {

    AUTH_LOADER_RESET: 'AUTH_LOADER_RESET',
    LOGIN_USER_REQUEST: 'LOGIN_USER_REQUEST',
    LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
    LOGIN_USER_FAIL: 'LOGIN_USER_FAIL',

    GET_OTP_REQUEST: 'GET_OTP_REQUEST',
    GET_OTP_SUCCESS: 'GET_OTP_SUCCESS',
    GET_OTP_FAIL: 'GET_OTP_FAIL',

    SEND_OTP_REQUEST: 'SEND_OTP_REQUEST',
    SEND_OTP_SUCCESS: 'SEND_OTP_SUCCESS',
    SEND_OTP_FAIL: 'SEND_OTP_FAIL',

    VERIFY_OTP_REQUEST: 'VERIFY_OTP_REQUEST',
    VERIFY_OTP_SUCCESS: 'VERIFY_OTP_SUCCESS',
    VERIFY_OTP_FAILURE: 'VERIFY_OTP_FAILURE',

    LOGOUT_USER_REQUEST: 'LOGOUT_USER_REQUEST',
    LOGOUT_USER_SUCCESS: 'LOGOUT_USER_SUCCESS',
    LOGOUT_USER_FAILURE: 'LOGOUT_USER_FAILURE',

    CHANGE_PASSWORD_REQUEST:'CHANGE_PASSWORD_REQUEST',
    CHANGE_PASSWORD_SUCCESS:'CHANGE_PASSWORD_SUCCESS',
    CHANGE_PASSWORD_FAIL:'CHANGE_PASSWORD_FAIL',
   
}

export const login = ({loginData, onSuccess, onFailure}) => async dispatch => {
    // console.log('action1',loginData)
    dispatch({type: TYPES.LOGIN_USER_REQUEST});
    // console.log('action11222',LOGIN)
    try{
        const output = await axios.post(LOGIN, loginData)
        if(output!=undefined) {
            // console.log('action',output.data)
            dispatch({type: TYPES.LOGIN_USER_SUCCESS, payload: output.data})
            onSuccess?.(output.data)
        }
        
    }catch(error){
        dispatch({type: TYPES.LOGIN_USER_FAIL, payload: error})
        // onFailure?.(error.output.request.status)
    }
}

// export const resetAuthLoader = () => async dispatch => {
//     dispatch({type: TYPES.AUTH_LOADER_RESET});
// }

// export const sendOtp = ({ loginObject, onSuccess, onFailure }) => async dispatch => {
//     dispatch({ type: TYPES.SEND_OTP_REQUEST });
//     try {
//         const output = await axios.post(EUPP_BASE_URL, loginObject)
//         if (output != null) {
//             dispatch({ type: TYPES.SEND_OTP_SUCCESS, payload: output.data })
//             onSuccess?.(output.data.data.output)
//         }
//     } catch (error) {
//         dispatch({ type: TYPES.SEND_OTP_FAIL, payload: error })
//         onFailure?.(error.output.request.status)
//     }

// }

// export const verifyOtp = ({loginObject, onSuccess, onFailure}) => async dispatch =>{
//     dispatch({type:TYPES.VERIFY_OTP_REQUEST});
//     try{
//         const output = await axios.post(BASE_URL, loginObject)
//         if(output != null) {
            
//             dispatch({type: TYPES.VERIFY_OTP_SUCCESS, payload: output.data})
//             onSuccess?.(output.data)
            
//         }
//     }catch(error){
//         dispatch({type: TYPES.VERIFY_OTP_FAILURE, payload: error})
//         onFailure?.('Something went wrong. Please try again after some time')
//     }
// }

// export const changepassword=({passwordObject, onSuccess, onFailure})=> async dispatch => {
//     dispatch({type:TYPES.CHANGE_PASSWORD_REQUEST});

//     try{
//         const output = await axios.post(BASE_URL, passwordObject )
//         console.log(output.data)
//            if(output != undefined) {
//             dispatch({type: TYPES.CHANGE_PASSWORD_SUCCESS, payload: output.data})
//             onSuccess?.(output.data)
//         }
//         }
//         catch(error){
//         dispatch({type: TYPES.CHANGE_PASSWORD_FAIL, payload: error})
//         onFailure?.(error.output.request.status);
//     }
// }


export const logout = ({onSuccess,onFailure}) => async dispatch =>{
    dispatch({type:TYPES.LOGOUT_USER_REQUEST});
    try{
        dispatch({type:TYPES.LOGOUT_USER_SUCCESS});
        onSuccess?.('Logout successfully')
    }
    catch(error)
    {
        dispatch({type:TYPES.LOGOUT_USER_FAILURE})
        onFailure?.('Something went wrong. Please try again after some time')
    }
}




