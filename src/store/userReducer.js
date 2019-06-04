import at from "./actionTypes";

const initialState = {
  themeUpdatedAt: new Date(), // a bit contrived, need to find a better one
  isLoggedIn: false,
  user: {},
  isLoading: false,
  isError: false,
  friends: []
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
      return { ...initialState, isError: true };

    case at.FETCH_FRIENDS_SUCCESS:
      return { ...initialState, friends: action.friends };

    case at.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default user;

//PRIVATE SELECTORS

export const getThemeUpdatedAt = state => {
  return state.user.themeUpdatedAt.toLocaleString();
};
