import axios from "axios";

import {
  FETCH_ISD_FAILURE,
  FETCH_ISD_REQUEST,
  FETCH_ISD_SUCCESS,
} from "./IsdDataTypes";

export const fetchIsdRequest = () => {
  return {
    type: FETCH_ISD_REQUEST,
  };
};

export const fetchIsdSuccess = (isdData) => {
  return {
    type: FETCH_ISD_SUCCESS,
    payload: isdData,
  };
};

export const fetchIsdFailure = (error) => {
  return {
    type: FETCH_ISD_FAILURE,
    payload: error,
  };
};

const url =
  "https://gist.githubusercontent.com/devhammed/78cfbee0c36dfdaa4fce7e79c0d39208/raw/07df5ed443941c504c65e81c83e6313473409d4c/countries.json";

export const fetchIsdData = () => {
  return (dispatch) => {
    dispatch(fetchIsdRequest());
    axios
      .get(url)
      .then((res) => {
        const isdData = res.data;
        dispatch(fetchIsdSuccess(isdData));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchIsdFailure(errMsg));
      });
  };
};
