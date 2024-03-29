import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

// NO THUNK YOU
// const configureStore = () => {
//   return createStore(rootReducer);
// };

// THUNK, BUT NO REDUX DEVTOOLS
// const configureStore = () => {
//   return createStore(rootReducer, applyMiddleware(thunk));
// };

// THUNK + REDUX DEVTOOLS
const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    /* preloadedState, (e.g. localStorage) */
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

export default configureStore;
