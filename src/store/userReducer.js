import at from "./actionTypes";

const initialState = {
  themeUpdatedAt: new Date(), // a bit contrived, need to find a better one
  isLoggedIn: false,
  user: {},
  isLoading: false,
  isError: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case at.TOGGLE_THEME:
      return { ...state, themeUpdatedAt: new Date() };

    case at.FETCH_USER_REQUEST:
      return { ...state, user: action.user, isLoading: true, isError: false };

    case at.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false,
        isError: false,
        isLoggedIn: true
      };

    case at.FETCH_USER_ERROR:
      return { ...state, isError: true };

    case at.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default user;