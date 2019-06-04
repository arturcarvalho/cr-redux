import at from "./actionTypes";

const initialState = {
  theme: "light" // light OR dark
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case at.TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    default:
      return state;
  }
};

export default ui;