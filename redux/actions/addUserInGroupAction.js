import axios from "axios";
import {ADD_USER_IN_GROUP} from "../../api/endpoints";

export const TYPES = {
    ADD_USER_IN_GROUP_REQUEST: 'ADD_USER_IN_GROUP_REQUEST',
    ADD_USER_IN_GROUP_SUCCESS: 'ADD_USER_IN_GROUP_SUCCESS',
    ADD_USER_IN_GROUP_FAIL: 'ADD_USER_IN_GROUP_FAIL',
}

export const AddUserInGroupAction = ({ userData,header,onSuccess,onFailure }) => async dispatch => {
    // console.log('action1', userData,header)
    dispatch({ type: TYPES.ADD_USER_IN_GROUP_REQUEST });
    try {
        const output = await axios.post(ADD_USER_IN_GROUP, userData, header)
        if (output != undefined) {
            // console.log('USER_IN_GROUP444444.0=====>>>>>', output.data)
            dispatch({ type: TYPES.ADD_USER_IN_GROUP_SUCCESS, payload: output.data })
            onSuccess?.(output.data)
        }

    } catch (error) {
        dispatch({ type: TYPES.ADD_USER_IN_GROUP_FAIL, payload: error })
        onFailure?.(error.output.request.status)
    }
}