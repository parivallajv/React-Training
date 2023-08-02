import { useEffect, useState } from "react";
import { GET_ISD_DATA } from "./inputTypes";
import axios from "axios";

const initialState = {
  isdData: [],
};

const url =
  "https://gist.githubusercontent.com/devhammed/78cfbee0c36dfdaa4fce7e79c0d39208/raw/07df5ed443941c504c65e81c83e6313473409d4c/countries.json";

const isdDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ISD_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
};
