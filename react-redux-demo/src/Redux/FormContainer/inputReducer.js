import {
  // PRINT_FULL_NAME,
  // PRINT_GENDER,
  // PRINT_EMAIL_ID,
  // PRINT_CELL_NO,
  // PRINT_CHECKBOX,
  // SET_FULL_NAME,
  // SET_GENDER,
  // SET_EMAIL_ID,
  // SET_CELL_NO,
  // SET_CHECKBOX,
  ADD_INPUT_VALUE,
  REMOVE_INPUT_VALUE,
  CLEAR_INPUT_VALUES,
  EDIT_INPUT_VALUE
} from "./inputTypes";

const initialState = {
  inputValues: [],
  // fullName: "",
  // Gender: null,
  // EmailId: "",
  // CellNo: "",
  // checkBox: false,
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    // case PRINT_FULL_NAME:
    //   return {
    //     ...state,
    //   };
    // case PRINT_GENDER:
    //   return {
    //     ...state,
    //   };
    // case PRINT_EMAIL_ID:
    //   return {
    //     ...state,
    //   };
    // case PRINT_CELL_NO:
    //   return {
    //     ...state,
    //   };
    // case PRINT_CHECKBOX:
    //   return {
    //     ...state,
    //   };
    // case SET_FULL_NAME:
    //   return {
    //     ...state,
    //     fullName: action.payload,
    //   };
    // case SET_GENDER:
    //   return {
    //     ...state,
    //     Gender: action.payload,
    //   };
    // case SET_EMAIL_ID:
    //   return {
    //     ...state,
    //     EmailId: action.payload,
    //   };
    // case SET_CELL_NO:
    //   return {
    //     ...state,
    //     CellNo: action.payload,
    //   };
    // case SET_CHECKBOX:
    //   return {
    //     ...state,
    //     checkBox: action.payload,
    //   };
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
    case CLEAR_INPUT_VALUES:
      return {
        ...state,
        inputValues: [],
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
