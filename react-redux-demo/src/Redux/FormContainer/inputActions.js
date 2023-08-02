
import {
  ADD_INPUT_VALUE,
  CLEAR_INPUT_VALUES,
  REMOVE_INPUT_VALUE,
  EDIT_INPUT_VALUE,
  GET_ISD_DATA,
} from "./inputTypes";

export const addInputValue = (inputValue) => {
  return {
    type: ADD_INPUT_VALUE,
    payload: inputValue,
  };
};

export const removeInputValues = (index) => {
  return {
    type: REMOVE_INPUT_VALUE,
    payload: index,
  };
};

export const clearInputValues = () => {
  return {
    type: CLEAR_INPUT_VALUES,
  };
};

export const editInputValue = (index, updatedValue) => {
  return {
    type: EDIT_INPUT_VALUE,
    payload: { index, updatedValue },
  };
};

export const getIsdData=()=>{
  return{
    type:GET_ISD_DATA,
  }
}
