import at from "./actionTypes";

const initialState = {
  themeUpdatedAt: new Date()
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case at.TOGGLE_THEME:
      return { ...state, themeUpdatedAt: new Date() };
      
    default:
      return state;
  }
};

export default profile;
