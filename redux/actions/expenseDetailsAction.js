import axios from "axios";
import {EXPENSE_DETAILS} from "../../api/endpoints";

export const TYPES = {
    EXPENSE_DETAILS_REQUEST: 'EXPENSE_DETAILS_REQUEST',
    EXPENSE_DETAILS_SUCCESS: 'EXPENSE_DETAILS_SUCCESS',
    EXPENSE_DETAILS_FAIL: 'EXPENSE_DETAILS_FAIL',
}

export const ExpenseDetailsAction = ({Id,header}) => async dispatch => {
    // console.log('action1',header)
    dispatch({type: TYPES.EXPENSE_DETAILS_REQUEST});
    try{
        const output = await axios.get(`${EXPENSE_DETAILS}/${Id}`,header)
        if(output!=undefined) {
            // console.log('details',output.data)
            dispatch({type: TYPES.EXPENSE_DETAILS_SUCCESS, payload: output.data})
            onSuccess?.(output.data)
        }
        
    }catch(error){
        dispatch({type: TYPES.EXPENSE_DETAILS_FAIL, payload: error})
        // onFailure?.(error.output.request.status)
    }
}