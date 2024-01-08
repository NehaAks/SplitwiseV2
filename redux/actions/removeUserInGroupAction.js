import axios from "axios";
import {REMOVE_USER_IN_GROUP} from "../../api/endpoints";

export const TYPES = {
    REMOVE_USER_IN_GROUP_REQUEST: 'REMOVE_USER_IN_GROUP_REQUEST',
    REMOVE_USER_IN_GROUP_SUCCESS: 'REMOVE_USER_IN_GROUP_SUCCESS',
    REMOVE_USER_IN_GROUP_FAIL: 'REMOVE_USER_IN_GROUP_FAIL',
}

export const RemoveUserInGroupAction = ({ userData,header,onSuccess,onFailure }) => async dispatch => {
    // console.log('action1', header,userData)
    // console.log('action2', userData)
    dispatch({ type: TYPES.REMOVE_USER_IN_GROUP_REQUEST });
    try {
        const output = await axios.post(REMOVE_USER_IN_GROUP, userData, header)
        if (output != undefined) {
            // console.log('USER_IN_GROUP2.0=====>>>>>', output.data)
            dispatch({ type: TYPES.REMOVE_USER_IN_GROUP_SUCCESS, payload: output.data })
            onSuccess?.(output.data)
        }

    } catch (error) {
        dispatch({ type: TYPES.REMOVE_USER_IN_GROUP_FAIL, payload: error })
        onFailure?.(error.output.request.status)
    }
}