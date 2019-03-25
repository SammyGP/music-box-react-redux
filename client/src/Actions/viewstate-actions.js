
export const VIEWSTATE_AUTH = () => {
  return {
    type: "VIEWSTATE_AUTH",
  }
}

export const VIEWSTATE_PLAYLIST = () => {
  return {
    type: "VIEWSTATE_PLAYLIST",
  }
};

export const VIEWSTATE_SONG = () => {
  return {
    type: "VIEWSTATE_SONG",
  }
};



export const setViewState = (newViewState) => {
  return {
    type: newViewState,
  }
}