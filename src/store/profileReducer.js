import at from "./actionTypes";

const initialState = {
  themeUpdatedAt: new Date(), // a bit contrived, need to find a better one
  isLoggedIn: false,
  user: {},
  isLoading: false,
  isError: false
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case at.TOGGLE_THEME:
      return { ...state, themeUpdatedAt: new Date() };

    case at.FETCH_PROFILE_REQUEST:
      return { ...state, user: action.user, isLoading: true, isError: false };

    case at.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false,
        isError: false,
        isLoggedIn: true
      };

    case at.FETCH_PROFILE_ERROR:
      return { ...state, isError: true };

    case at.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default profile;
