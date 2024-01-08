import axios from "axios";
import {DELETE_GROUP} from "../../api/endpoints";

export const TYPES = {
    DELETE_GROUP_REQUEST: 'DELETE_GROUP_REQUEST',
    DELETE_GROUP_SUCCESS: 'DELETE_GROUP_SUCCESS',
    DELETE_GROUP_FAIL: 'DELETE_GROUP_FAIL',
}

export const DeleteGroupAction = ({Id,header,onSuccess,onFailure }) => async dispatch => {
    dispatch({ type: TYPES.DELETE_GROUP_REQUEST });
    try {
        // console.log(`${DELETE_GROUP}/${Id}`)
        const output = await axios.post(`${DELETE_GROUP}/${Id}`,'', header)
        // console.log('deleteeeeeeeeeeee=====>>>>>', output.data)
        if (output != undefined) {
            
            dispatch({ type: TYPES.DELETE_GROUP_SUCCESS, payload: output.data })
            onSuccess?.(output.data)
        }

    } catch (error) {
        // console.log( error)
        dispatch({ type: TYPES.DELETE_GROUP_FAIL, payload: error })
        onFailure?.(error.output.request.status)
    }
}