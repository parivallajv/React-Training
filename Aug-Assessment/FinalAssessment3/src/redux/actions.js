export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const FETCH_SECOND_API_DATA_REQUEST = "FETCH_SECOND_API_DATA_REQUEST";
export const FETCH_SECOND_API_DATA_SUCCESS = "FETCH_SECOND_API_DATA_SUCCESS";
export const FETCH_SECOND_API_DATA_FAILURE = "FETCH_SECOND_API_DATA_FAILURE";

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchSecondApiDataRequest = () => ({
  type: FETCH_SECOND_API_DATA_REQUEST,
});

export const fetchSecondApiDataSuccess = (data) => ({
  type: FETCH_SECOND_API_DATA_SUCCESS,
  payload: data,
});

export const fetchSecondApiDataFailure = (error) => ({
  type: FETCH_SECOND_API_DATA_FAILURE,
  payload: error,
});

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});
