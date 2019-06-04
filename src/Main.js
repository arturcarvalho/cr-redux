import React from "react";
import { connect } from "react-redux";

import { toggleTheme } from "./store/uiActions";
import { login, logout } from "./store/profileActions";

const MainComp = ({
  theme,
  themeUpdatedAt,
  isLoggedIn,
  isLoading,
  user,

  toggleTheme,
  login,
  logout
}) => {
  const fakeUserId = 1; // Hardcoded.

  const doLogin = () => login(fakeUserId);
  const doLogout = () => logout(); // not really needed
  const logAction = isLoggedIn ? doLogout : doLogin;
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
      <div>
        <button onClick={logAction}>{isLoggedIn ? "Logout" : "Login"}</button>

        {isLoading && <div>LOADING USER</div>}
        {isLoggedIn && (
          <div>
            <em>User</em> <span>{user.name}</span>
          </div>
        )}
      </div>
    </section>
  );
};

// state has the state from all reducers
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.myProp);

  return {
    theme: state.ui.theme,
    themeUpdatedAt: state.profile.themeUpdatedAt,
    isLoggedIn: state.profile.isLoggedIn,
    isLoading: state.profile.isLoading,
    user: state.profile.user
  };
};

// default export
// export default connect(...)(MainComp);

// named export
// export const Main = connect(
//   mapStateToProps,
//   { toggleTheme }
// )(MainComp);

// named export
export const Main = connect(
  mapStateToProps,
  dispatch => ({
    login: userId => dispatch(login(userId)),
    logout: () => dispatch(logout()),
    toggleTheme: () => dispatch(toggleTheme())
  })
)(MainComp);
