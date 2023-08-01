import { BUY_ICE, ADD_ICE, PRINT_NAME, SET_NAME } from "./IceTypes";

const initialState = {
  numOfIce: 20,
  outName: "",
};

const iceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        numOfIce: state.numOfIce - 1,
      };

    case ADD_ICE:
      return {
        ...state,
        numOfIce: state.numOfIce + 1,
      };

    case PRINT_NAME:
      return {
        ...state,
      };
    case SET_NAME:
      return {
        ...state,
        outName: action.payload,
      };
    default:
      return state;
  }
};

export default iceReducer;
