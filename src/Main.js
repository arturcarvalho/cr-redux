import React from "react";
import { connect } from "react-redux";

import { toggleTheme } from "./store/uiActions";

const MainComp = ({ theme, themeUpdatedAt, toggleTheme }) => {
  return (
    <section>
      <div>
        <em>Current theme:</em>
        <span> {theme}</span>
      </div>

      <div>
        <em>Theme updated at:</em>
        <span> {themeUpdatedAt.toISOString()}</span>
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <hr />
    </section>
  );
};

// state has the state from all reducers
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.myProp);

  return {
    theme: state.ui.theme,
    themeUpdatedAt: state.profile.themeUpdatedAt
  };
};

// default export
// export default connect(...)(MainComp);

// named export
// export const Main = connect(
//   mapStateToProps,
//   { toggleTheme }
// )(MainComp);

// equivalent to the export above
export const Main = connect(
  mapStateToProps,
  dispatch => ({ toggleTheme: () => dispatch(toggleTheme()) })  
)(MainComp);

// dispatch => ({
//   fetchGame: id => dispatch(fetchGame(id))
//   })
