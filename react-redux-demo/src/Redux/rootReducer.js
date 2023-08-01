import { combineReducers } from "redux";
import iceReducer from "./IceCream/IceReducer";
import cakeReducer from "./cake/CakeReducer";
import inputReducer from "./FormContainer/inputReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
  input:inputReducer
});
export default rootReducer;
