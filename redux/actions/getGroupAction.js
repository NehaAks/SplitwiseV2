import axios from "axios";
import { GET_GROUP } from "../../api/endpoints";

export const TYPES = {
    GET_GROUP_REQUEST: 'GET_GROUP_REQUEST',
    GET_GROUP_SUCCESS: 'GET_GROUP_SUCCESS',
    GET_GROUP_FAIL: 'GET_GROUP_FAIL',

    STORE_REQUEST: 'STORE_REQUEST',
    STORE_SUCCESS: 'STORE_SUCCESS',
    STORE_FAIL: 'STORE_FAIL',
}

export const GET_GROUP_ACTION = ({ header }) => async dispatch => {
    // console.log('action1',header)
    dispatch({ type: TYPES.GET_GROUP_REQUEST });
    try {
        const output = await axios.post(GET_GROUP, " ", header)
        if (output != undefined) {
            // console.log('action',output.data)
            dispatch({ type: TYPES.GET_GROUP_SUCCESS, payload: output.data })
            onSuccess?.(output.data)
        }

    } catch (error) {
        dispatch({ type: TYPES.GET_GROUP_FAIL, payload: error })
        // onFailure?.(error.output.request.status)
    }
}

export const storeGroupArray = ({ arr }) => async dispatch => {
    // console.log('action1',header)
    dispatch({ type: TYPES.STORE_REQUEST });
    try {
// console.log('arr:',arr)
        dispatch({ type: TYPES.STORE_SUCCESS, payload: arr })

    } catch (error) {
        dispatch({ type: TYPES.STORE_FAIL, payload: error })
        // onFailure?.(error.output.request.status)
    }
}

