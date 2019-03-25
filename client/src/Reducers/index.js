import { combineReducers } from "redux";
import authTokens from "./auth-reducer";
import viewState from "./viewstate-reducer";

const rootReducer = combineReducers({
  viewState,
  authTokens,
})

export default rootReducer;