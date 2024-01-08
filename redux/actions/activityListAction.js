import axios from "axios";
import { GET_ALL_EXPENSES,} from "../../api/endpoints";

export const TYPES = {
    GET_ACTIVITY_REQUEST: 'GET_ACTIVITY_REQUEST',
    GET_ACTIVITY_SUCCESS: 'GET_ACTIVITY_SUCCESS',
    GET_ACTIVITY_FAIL: 'GET_ACTIVITY_FAIL',
}

export const ActivityListAction = ({ header }) => async dispatch => {
    // console.log('Activity', header)
    dispatch({ type: TYPES.GET_ACTIVITY_REQUEST });
    try {
        const output = await axios.get(GET_ALL_EXPENSES, header)
        if (output != undefined) {
            // console.log('ACTIVITY=====>>>>>', output.data)
            dispatch({ type: TYPES.GET_ACTIVITY_SUCCESS, payload: output.data })
            onSuccess?.(output.data)
        }

    } catch (error) {
        dispatch({ type: TYPES.GET_ACTIVITY_FAIL, payload: error })
        // onFailure?.(error.output.request.status)
    }
}