
export const authenticate = () => {
  
}

export const setAccessToken = (access_token) => {
  return {
    type: "SET_ACCESS_TOKEN",
    access_token,
  }
}

export const setRefreshToken = (refresh_token) => {
  return {
    type: "SET_REFRESH_TOKEN",
    refresh_token,
  }
}