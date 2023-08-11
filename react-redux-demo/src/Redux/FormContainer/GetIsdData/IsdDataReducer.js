import { FETCH_ISD_SUCCESS } from "./IsdDataTypes";

const initialState = {
  loading: false,
  isdData: [],
  error: "",
};

const isdDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISD_SUCCESS:
      return {
        ...state,
        isdData: action?.payload,
      };
    default:
      return state;
  }
};

export default isdDataReducer;
