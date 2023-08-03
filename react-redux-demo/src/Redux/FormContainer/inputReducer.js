import {
  ADD_INPUT_VALUE,
  REMOVE_INPUT_VALUE,
  EDIT_INPUT_VALUE,
} from "./inputTypes";

const initialState = {
  inputValues: [],
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPUT_VALUE:
      return {
        ...state,
        inputValues: [...state.inputValues, action.payload],
      };
    case REMOVE_INPUT_VALUE:
      const updatedInputValues = [...state.inputValues];
      updatedInputValues.splice(action.payload, 1);
      return {
        ...state,
        inputValues: updatedInputValues,
      };
    case EDIT_INPUT_VALUE:
      const { index, updatedValue } = action.payload;
      const editedInputValues = [...state.inputValues];
      editedInputValues[index] = updatedValue;
      return {
        ...state,
        inputValues: editedInputValues,
      };
    default:
      return state;
  }
};

export default inputReducer;
