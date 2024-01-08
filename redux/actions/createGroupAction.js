import axios from "axios";
import { CREATE_GROUP} from "../../api/endpoints";

export const TYPES = {
    CREATE_GROUP_REQUEST: 'CREATE_GROUP_REQUEST',
    CREATE_GROUP_SUCCESS: 'CREATE_GROUP_SUCCESS',
    CREATE_GROUP_FAIL: 'CREATE_GROUP_FAIL',
}

export const CREATE_GROUP_ACTION = ({data,header,onSuccess,onFailure}) => async dispatch => {
    // console.log('action1',header)
    dispatch({type: TYPES.CREATE_GROUP_REQUEST});
    try{
        const output = await axios.post(CREATE_GROUP,data,header)
        if(output!=undefined) {
            // console.log('group=====>>>>>',output.data)
            dispatch({type: TYPES.CREATE_GROUP_SUCCESS, payload: output.data})
            onSuccess?.(output.data)
        }
        
    }catch(error){
        dispatch({type: TYPES.CREATE_GROUP_FAIL, payload: error})
        onFailure?.(error.output.request.status)
    }
}