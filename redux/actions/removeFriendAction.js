import axios from "axios";
import { REMOVE_FRIENDS } from "../../api/endpoints";

export const TYPES = {
    REMOVE_FRIEND_REQUEST: 'REMOVE_FRIEND_REQUEST',
    REMOVE_FRIEND_SUCCESS: 'REMOVE_FRIEND_SUCCESS',
    REMOVE_FRIEND_FAIL: 'REMOVE_FRIEND_FAIL',
}

export const RemoveFriendsAction = ({ Id,header,onSuccess,onFailure }) => async dispatch => {
    // console.log('action1', header)
    dispatch({ type: TYPES.REMOVE_FRIEND_REQUEST });
    try {
        const output = await axios.post(`${REMOVE_FRIENDS}/${Id}`, "", header)
        if (output != undefined) {
            // console.log('friendkishore=====>>>>>', output.data)
            dispatch({ type: TYPES.REMOVE_FRIEND_SUCCESS, payload: output.data })
            onSuccess?.(output.data)
        }

    } catch (error) {
        dispatch({ type: TYPES.REMOVE_FRIEND_FAIL, payload: error })
        onFailure?.(error.output.request.status)
    }
}