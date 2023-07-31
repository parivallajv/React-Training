import { combineReducers } from "redux";
import iceReducer from "./IceCream/IceReducer";
import cakeReducer from "./cake/CakeReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
});
export default rootReducer;
