import at from "./actionTypes";

const fetchUser = userId => {
  console.log("fetching user", userId);
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
};

const fetchUserRequest = () => ({ type: at.FETCH_USER_REQUEST });
const fetchUserSuccess = user => ({ type: at.FETCH_USER_SUCCESS, user });
const fetchUserError = () => ({ type: at.FETCH_USER_ERROR });

// I need the thunk to be able to return a function
export function login(userId) {
  return dispatch => {
    dispatch(fetchUserRequest());

    return fetchUser(userId)
      .then(response => {
        if (!response.ok) {
          throw new Error("Not 200 response");
        }
        return response.json();
      })

      .then(data => dispatch(fetchUserSuccess(data)))
      .catch(_err => dispatch(fetchUserError()));
  };
}

export const logout = () => ({ type: at.LOGOUT });
