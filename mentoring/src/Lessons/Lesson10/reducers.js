export default (state = {}, action) => {
  if (action.type === "USER_FETCH_SUCCEEDED") {
    return {
      ...state,
      user: action.user,
    };
  }
  if (action.type === "USER_FETCH_FAILED") {
    return {
      ...state,
      user: action.user,
    };
  }

  return state;
};
