import axios from "axios";
import { USER_DETAIL} from "../../api/endpoints";

export const TYPES = {
    USER_DETAIL_REQUEST: 'USER_DETAIL_REQUEST',
    USER_DETAIL_SUCCESS: 'USER_DETAIL_SUCCESS',
    USER_DETAIL_FAIL: 'USER_DETAIL_FAIL',

    USER_DETAIL_TO_REQUEST: 'USER_DETAIL_TO_REQUEST',
    USER_DETAIL_TO_SUCCESS: 'USER_DETAIL_TO_SUCCESS',
    USER_DETAIL_TO_FAIL: 'USER_DETAIL_TO_FAIL',
}

export const GetUserDetailAction = ({Id,header }) => async dispatch => {
    // console.log('hello',header,Id)
    dispatch({ type: TYPES.USER_DETAIL_REQUEST });
    try {
        // console.log(`${USER_DETAIL}/${Id}`)
        const output = await axios.post(`${USER_DETAIL}/${Id}`,'',header)
        // console.log('delete=====>>>>>', output.data)
        if (output != undefined) {
            // console.log('delete=====>>>>>', output.data)
            dispatch({ type: TYPES.USER_DETAIL_SUCCESS, payload: output.data })
            // onSuccess?.(output.data)
        }

    } catch (error) {
        // console.log(error)
        dispatch({ type: TYPES. USER_DETAIL_FAIL, payload: error })
        // onFailure?.(error.output.request.status)
    }
}

export const GetUserToAction = ({Id,header }) => async dispatch => {
    // console.log('hello',header,Id)
    dispatch({ type: TYPES.USER_DETAIL_TO_REQUEST });
    try {
        // console.log(`${USER_DETAIL}/${Id}`)
        const output = await axios.post(`${USER_DETAIL}/${Id}`,'',header)
        // console.log('delete=====>>>>>', output.data)
        if (output != undefined) {
            // console.log('delete=====>>>>>', output.data)
            dispatch({ type: TYPES.USER_DETAIL_TO_SUCCESS, payload: output.data })
            // onSuccess?.(output.data)
        }

    } catch (error) {
        // console.log(error)
        dispatch({ type: TYPES. USER_DETAIL_TO_FAIL, payload: error })
        // onFailure?.(error.output.request.status)
    }
}