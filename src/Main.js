import React from "react";
import { connect } from "react-redux";

import { toggleTheme } from "./store/uiActions";
import { login, logout, fetchFriends } from "./store/userActions";
import { getThemeUpdatedAt } from "./store/rootReducer";

const MainComp = ({
  theme,
  themeUpdatedAt,
  isLoggedIn,
  isLoading,
  isError,
  user,
  friends,

  toggleTheme,
  login,
  logout,
  fetchFriends
}) => {
  // The number has 25% chance of being a bad one. (-1 id doesn't exist)
  const ids = [1, 1, 1, -1];
  const fakeUserId = ids[Math.floor(Math.random() * ids.length)];

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
        <span> {themeUpdatedAt}</span>
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <hr />

      <div>
        <p>Friends:</p>
        <button onClick={fetchFriends}>Fetch friends</button>
        {friends.map((name, idx) => (
          <p key={idx}>Friend: {name}</p>
        ))}
      </div>
      <hr />

      <div>
        <button onClick={logAction}>{isLoggedIn ? "Logout" : "Login"}</button>

        {isLoading && <div>LOADING USER</div>}

        {isLoggedIn && (
          <div>
            <em>User</em> {user.name}
          </div>
        )}

        {isError && <div>OHO!!! ERROR</div>}
      </div>
    </section>
  );
};

// state has the state from all reducers
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.myProp); // Outputs "I'm defined on App"

  return {
    theme: state.ui.theme,
    themeUpdatedAt: getThemeUpdatedAt(state),
    isLoggedIn: state.user.isLoggedIn,
    isLoading: state.user.isLoading,
    isError: state.user.isError,
    user: state.user.user,
    friends: state.user.friends
  };
};

// default export
// export default connect(...)(MainComp);

// named export
export const Main = connect(
  mapStateToProps,
  {
    login,
    logout,
    toggleTheme,
    fetchFriends
  }
)(MainComp);

// named export with "extended" actions
// export const Main = connect(
//   mapStateToProps,
//   dispatch => ({
//     login: userId => dispatch(login(userId)),
//     logout: () => dispatch(logout()),
//     toggleTheme: () => dispatch(toggleTheme()),
//     fetchFriends: () => dispatch(fetchFriends())
//   })
// )(MainComp);
