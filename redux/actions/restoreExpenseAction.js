import axios from "axios";
import {RESTORE_EXPENSE} from "../../api/endpoints";

export const TYPES = {
    RESTORE_EXPENSE_REQUEST: 'RESTORE_EXPENSE_REQUEST',
    RESTORE_EXPENSE_SUCCESS: 'RESTORE_EXPENSE_SUCCESS',
    RESTORE_EXPENSE_FAIL: 'RESTORE_EXPENSE_FAIL',
}

export const RestoreExpenseAction = ({userData, header,Id,onSuccess,onFailure }) => async dispatch => {
    // console.log('action1', header)
    dispatch({ type: TYPES.RESTORE_EXPENSE_REQUEST });
    try {
        const output = await axios.post(`${RESTORE_EXPENSE}/${Id}`, userData, header)
        if (output != undefined) {
            // console.log('restoresessssssssss=====>>>>>', output.data)
            dispatch({ type: TYPES.RESTORE_EXPENSE_SUCCESS, payload: output.data })
            onSuccess?.(output.data)
        }

    } catch (error) {
        dispatch({ type: TYPES.RESTORE_EXPENSE_FAIL, payload: error })
        onFailure?.(error.output.request.status)
    }
}