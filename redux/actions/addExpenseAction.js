import axios from "axios";
import { ADD_EXPENSE} from "../../api/endpoints";

export const TYPES = {
    ADD_EXPENSE_REQUEST: 'ADD_EXPENSE_REQUEST',
    ADD_EXPENSE_SUCCESS: 'ADD_EXPENSE_SUCCESS',
    ADD_EXPENSE_FAIL: 'ADD_EXPENSE_FAIL',
}

export const AddExpenseAction = ({userData, header }) => async dispatch => {
    // console.log('action1', header)
    dispatch({ type: TYPES.ADD_EXPENSE_REQUEST });
    try {
        const output = await axios.post(ADD_EXPENSE, userData, header)
        if (output != undefined) {
            // console.log('expensessssssssss=====>>>>>', output.data)
            dispatch({ type: TYPES.ADD_EXPENSE_SUCCESS, payload: output.data })
            onSuccess?.(output.data)
        }

    } catch (error) {
        dispatch({ type: TYPES.ADD_EXPENSE_FAIL, payload: error })
        // onFailure?.(error.output.request.status)
    }
}