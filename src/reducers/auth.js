
const authReducer = (state = {test: true}, action) => {
  switch(action.type) {

    case "SET_ACCESS_TOKEN":
      return Object.assign({}, state, {
        access_token: action.access_token,
      })

    case "SET_REFRESH_TOKEN":
      return Object.assign({}, state, {
        access_token: action.refresh_token,
      })

    default:
      return state;
  }
}

export default authReducer 