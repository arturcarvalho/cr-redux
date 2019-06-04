import at from "./actionTypes";

const fetchUser = userId => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
};

const fetchUserRequest = () => ({ type: at.FETCH_USER_REQUEST });
const fetchUserSuccess = user => ({ type: at.FETCH_USER_SUCCESS, user });
const fetchUserError = () => ({ type: at.FETCH_USER_ERROR });

// I need the thunk to be able to return a function
export const login = userId => {
  return dispatch => {
    dispatch(fetchUserRequest());

    return fetchUser(userId)
      .then(response => response.json())
      .then(data => dispatch(fetchUserSuccess(data)))
      .catch(_err => dispatch(fetchUserError()));
  };
};

export const logout = () => ({ type: at.LOGOUT });
