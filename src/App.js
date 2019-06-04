import React from "react";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import "./App.css";
import { Main } from "./Main";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Redux</h1>
        </header>
        <Main myProp={"I'm defined on App"} />
      </div>
    </Provider>
  );
}

export default App;
