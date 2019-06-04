import { combineReducers } from "redux";

import ui from "./uiReducer";
import user, * as fromUser from "./userReducer";

const rootReducer = combineReducers({
  ui,
  user
});

export default rootReducer;

// PUBLIC SELECTORS
export const getThemeUpdatedAt = state => fromUser.getThemeUpdatedAt(state);
