import axios from "axios";
import { DELETE_EXPENSE } from "../../api/endpoints";

export const TYPES = {
    DELETE_EXPENSE_REQUEST: 'DELETE_EXPENSE_REQUEST',
    DELETE_EXPENSE_SUCCESS: 'DELETE_EXPENSE_SUCCESS',
    DELETE_EXPENSE_FAIL: 'DELETE_EXPENSE_FAIL',
}

export const DeleteExpenseAction = ({userData,header,Id,onSuccess,onFailure }) => async dispatch => {
    dispatch({ type: TYPES.DELETE_EXPENSE_REQUEST });
    try {
        // console.log(`${DELETE_EXPENSE}/${Id}`)
        const output = await axios.post(`${DELETE_EXPENSE}/${Id}`, userData,header)
        // console.log('delete=====>>>>>', output.data)
        if (output != undefined) {
            
            dispatch({ type: TYPES.DELETE_EXPENSE_SUCCESS, payload: output.data })
            onSuccess?.(output.data)
        }

    } catch (error) {
        // console.log(error)
        dispatch({ type: TYPES.DELETE_EXPENSE_FAIL, payload: error })
        onFailure?.(error.output.request.status)
    }
}