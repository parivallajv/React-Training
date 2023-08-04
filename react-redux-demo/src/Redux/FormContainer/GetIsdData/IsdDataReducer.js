import { FETCH_ISD_FAILURE, FETCH_ISD_REQUEST, FETCH_ISD_SUCCESS } from "./IsdDataTypes";

const initialState = {
    loading:false,
  isdData: [],
  error:''
};

const isdDataReducer = (state = initialState, action) => {
    switch (action.type) {
     case FETCH_ISD_REQUEST:
        return {
          ...state,
          loading:true
        };
        case FETCH_ISD_SUCCESS:
        return {
          ...state,
          isdData: action?.payload,
          error:''
        };
        case FETCH_ISD_FAILURE:
        return {
          ...state,
          isdData: [],
          error:action?.payload
        };
      default:
        return state;
    }
  };
  
  export default isdDataReducer;
  