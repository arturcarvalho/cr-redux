import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

// NO THUNK YOU
// const configureStore = () => {
//   return createStore(rootReducer);
// };

// THUNK, BUT NO REDUX DEVTOOLS
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
