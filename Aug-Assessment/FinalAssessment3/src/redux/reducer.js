import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  LOGIN_SUCCESS,
  FETCH_SECOND_API_DATA_REQUEST,
  FETCH_SECOND_API_DATA_SUCCESS,
  FETCH_SECOND_API_DATA_FAILURE,
} from "./actionTypes";

const initialState = {
  data: [],
  data2: [],
  loading: false,
  error: null,
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload };
    case FETCH_SECOND_API_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SECOND_API_DATA_SUCCESS:
      return { ...state, loading: false, data2: action.payload };
    case FETCH_SECOND_API_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
