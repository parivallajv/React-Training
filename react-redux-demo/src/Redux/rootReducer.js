import { combineReducers } from "redux";
import iceReducer from "./IceCream/IceReducer";
import cakeReducer from "./cake/CakeReducer";
import inputReducer from "./FormContainer/inputReducer";
import isdDataReducer from "./FormContainer/GetIsdData/IsdDataReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
  input:inputReducer,
  isdData:isdDataReducer
});
export default rootReducer;
