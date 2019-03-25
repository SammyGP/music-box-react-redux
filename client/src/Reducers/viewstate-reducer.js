
const viewState = (state = {viewState: "auth"}, action) => {
  switch(action.type) {
    case "AUTH":
      return Object.assign({}, state, {
        viewState: "auth"
      })
    case "PLAYLIST":
      return Object.assign({}, state, {
        viewState: "playlist"
      })

    default:
      return state;
  }
}

export default viewState;