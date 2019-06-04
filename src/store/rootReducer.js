import { combineReducers } from "redux";

import ui from "./uiReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  ui,
  user
});

export default rootReducer;

// PUBLIC SELECTORS
// TODO
