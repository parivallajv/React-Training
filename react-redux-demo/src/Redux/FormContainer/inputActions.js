// import { PRINT_FULL_NAME, PRINT_GENDER, PRINT_EMAIL_ID, PRINT_CELL_NO, PRINT_CHECKBOX, SET_FULL_NAME, SET_GENDER, SET_EMAIL_ID, SET_CHECKBOX, SET_CELL_NO } from "./inputTypes";

import {
  ADD_INPUT_VALUE,
  CLEAR_INPUT_VALUES,
  REMOVE_INPUT_VALUE,
  EDIT_INPUT_VALUE,
} from "./inputTypes";

// 1. To Print the values
// export const getName = () => {
//   return {
//     type: PRINT_FULL_NAME,
//   };
// };

// export const getGender = () => {
//   return {
//     type: PRINT_GENDER,
//   };
// };
// export const getEmail = () => {
//   return {
//     type: PRINT_EMAIL_ID,
//   };
// };
// export const getCellNo = () => {
//   return {
//     type: PRINT_CELL_NO,
//   };
// };
// export const getCheckBox = () => {
//   return {
//     type: PRINT_CHECKBOX,
//   };
// };

// // 2. To Set the Values

// export const setName = (fullname) => {
//   return {
//     type: SET_FULL_NAME,
//     payload:fullname
//   };
// };

// export const setGender = (Gender) => {
//   return {
//     type: SET_GENDER,
//     payload:Gender
//   };
// };
// export const setEmail = (EmailId) => {
//   return {
//     type: SET_EMAIL_ID,
//     payload:EmailId
//   };
// };
// export const setCellNo = (CellNo) => {
//   return {
//     type: SET_CELL_NO,
//     payload:CellNo
//   };
// };
// export const setCheckBox = (checkBox) => {
//   return {
//     type: SET_CHECKBOX,
//     payload:checkBox
//   };
// };

// 3. To Access Array

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
