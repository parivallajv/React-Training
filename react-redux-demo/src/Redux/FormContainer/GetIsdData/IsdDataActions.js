import axios from "axios";

import {
  FETCH_ISD_SUCCESS,
} from "./IsdDataTypes";

export const fetchIsdSuccess = (isdData) => {
  return {
    type: FETCH_ISD_SUCCESS,
    payload: isdData,
  };
};


const url =
  "https://gist.githubusercontent.com/devhammed/78cfbee0c36dfdaa4fce7e79c0d39208/raw/07df5ed443941c504c65e81c83e6313473409d4c/countries.json";

export const fetchIsdData = () => {
  return (dispatch) => {
    
    axios
      .get(url)
      .then((res) => {
        const isdData = res?.data;
        dispatch(fetchIsdSuccess(isdData));
        console.log("promise");
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
        
      });
  };
};


