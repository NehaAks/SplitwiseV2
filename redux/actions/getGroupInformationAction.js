import axios from "axios";
import {GET_GROUP_INFORMATION} from "../../api/endpoints";

export const TYPES = {
    GET_GROUP_INFORMATION_REQUEST: 'GET_GROUP_INFORMATION_REQUEST',
    GET_GROUP_INFORMATION_SUCCESS: 'GET_GROUP_INFORMATION_SUCCESS',
    GET_GROUP_INFORMATION_FAIL: 'GET_GROUP_INFORMATION_FAIL',
}

export const GetGroupInformationAction = ({header,Id,onSuccess,onFailure}) => async dispatch => {
    // console.log('action1:',Id)
    dispatch({type: TYPES.GET_GROUP_INFORMATION_REQUEST});
    try{
        const output = await axios.get(`${GET_GROUP_INFORMATION}/${Id}`,header)
        // console.log('response:',output?.data)
        if(output!=undefined) {
            // console.log('information2252',output.data)
            dispatch({type: TYPES.GET_GROUP_INFORMATION_SUCCESS, payload: output.data})
            onSuccess?.(output.data)
        }
        
    }catch(error){
            // console.log('error:',error)
        dispatch({type: TYPES.GET_GROUP_INFORMATION_FAIL, payload: error})
        onFailure?.(error.output.request.status)
    }
}