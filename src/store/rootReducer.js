import { combineReducers } from "redux";

import ui from "./uiReducer";
import profile from "./profileReducer";

const rootReducer = combineReducers({
  ui,
  profile
});

export default rootReducer;

// PUBLIC SELECTORS
// TODO
