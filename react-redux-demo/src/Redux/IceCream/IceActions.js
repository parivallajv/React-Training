import { BUY_ICE, ADD_ICE, PRINT_NAME, SET_NAME } from "./IceTypes";

export const buyIce = () => {
  return {
    type: BUY_ICE,
  };
};

export const addIce = () => {
  return {
    type: ADD_ICE,
  };
};

export const printName = () => {
  return {
    type: PRINT_NAME,
  };
};
export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};
