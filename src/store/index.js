import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"
import rootReducer from "../reducers"

/*
export const initStore = {
  viewState: "auth",
  error: [],
  spotify_token: null,
  spotifyPlaylist: [],
  current
} */
/*
export const initStore = (initialState = {}) => {
  let store = createStore(
    rootReducer(),
    {},
    applyMiddleware(thunkMiddleware)
  )
}*/

const initStore = {
  viewState: "auth",
}

const store = createStore(rootReducer, initStore)

export default store;