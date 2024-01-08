import axios from "axios";
import { GET_FRIENDS } from "../../api/endpoints";

export const TYPES = {
    GET_FRIEND_REQUEST: 'GET_FRIEND_REQUEST',
    GET_FRIEND_SUCCESS: 'GET_FRIEND_SUCCESS',
    GET_FRIEND_FAIL: 'GET_FRIEND_FAIL',
}

export const FriendListAction = ({ header }) => async dispatch => {
    // console.log('action1', header)
    dispatch({ type: TYPES.GET_FRIEND_REQUEST });
    try {
        const output = await axios.post(GET_FRIENDS, "", header)
        if (output != undefined) {
            // console.log('friend=====>>>>>', output.data)
            dispatch({ type: TYPES.GET_FRIEND_SUCCESS, payload: output.data })
            onSuccess?.(output.data)
        }

    } catch (error) {
        dispatch({ type: TYPES.GET_FRIEND_FAIL, payload: error })
        // onFailure?.(error.output.request.status)
    }
}