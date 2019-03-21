import { combineReducers } from "redux";
import authReducer from "./auth";

/*
const rootReducer = () => {
  return({
    authReducer
  })
}*/

const rootReducer = combineReducers({
  authReducer,
})

export default rootReducer;