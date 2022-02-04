import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducers = combineReducers ({
  cake: reducer,
})
export default rootReducers;