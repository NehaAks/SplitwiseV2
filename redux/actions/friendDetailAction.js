import axios from "axios";
import {FRIEND_DETAIL} from "../../api/endpoints";

export const TYPES = {
    FRIEND_DETAIL_REQUEST: 'FRIEND_DETAIL_REQUEST',
    FRIEND_DETAIL_SUCCESS: 'FRIEND_DETAIL_SUCCESS',
    FRIEND_DETAIL_FAIL: 'FRIEND_DETAIL_FAIL',
}

export const FriendDetailAction = ({ Id,header,onSuccess}) => async dispatch => {
    // console.log('action1:',Id)
    dispatch({ type: TYPES.FRIEND_DETAIL_REQUEST });
    try {
        const output = await axios.get(`${FRIEND_DETAIL}/${Id}`, header)
        // console.log('output?.data:',output?.data)
        if (output != undefined) {
            // console.log('friendf=====>>>>>', output.data)
            dispatch({ type: TYPES.FRIEND_DETAIL_SUCCESS, payload: output.data })
            onSuccess?.(output.data)
        }

    } catch (error) {
        // console.log(error)
        dispatch({ type: TYPES.FRIEND_DETAIL_FAIL, payload: error })
        // onFailure?.(error.output.request.status)
    }
}