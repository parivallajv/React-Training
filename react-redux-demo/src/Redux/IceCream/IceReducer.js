import { BUY_ICE, ADD_ICE } from "./IceTypes";

const initialState = {
  numOfIce: 20,
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
    default:
      return state;
  }
};

export default iceReducer;
