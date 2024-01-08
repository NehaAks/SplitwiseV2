import axios from "axios";
import { ADD_FRIEND} from "../../api/endpoints";

export const TYPES = {
    ADD_FRIEND_REQUEST: 'ADD_FRIEND_REQUEST',
    ADD_FRIEND_SUCCESS: 'ADD_FRIEND_SUCCESS',
    ADD_FRIEND_FAIL: 'ADD_FRIEND_FAIL',
}

export const AddFriendAction = ({ userData,header }) => async dispatch => {
    // console.log('action1', header)
    dispatch({ type: TYPES.ADD_FRIEND_REQUEST });
    try {
        const output = await axios.post(ADD_FRIEND, userData, header)
        if (output != undefined) {
            // console.log('friend2.0=====>>>>>', output.data)
            dispatch({ type: TYPES.ADD_FRIEND_SUCCESS, payload: output.data })
            onSuccess?.(output.data)
        }

    } catch (error) {
        dispatch({ type: TYPES.ADD_FRIEND_FAIL, payload: error })
        // onFailure?.(error.output.request.status)
    }
}