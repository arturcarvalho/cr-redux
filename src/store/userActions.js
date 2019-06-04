import at from "./actionTypes";

const fetchUser = userId => {
  // console.log("fetching user", userId);
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    response => {
      if (!response.ok) {
        throw new Error("Not 200 response");
      }
      return response.json();
    }
  );
};

const fetchUserRequest = () => ({ type: at.FETCH_USER_REQUEST });
const fetchUserSuccess = user => ({ type: at.FETCH_USER_SUCCESS, user });
const fetchUserError = () => ({ type: at.FETCH_USER_ERROR });

const fetchFriendsSuccess = friends => ({
  type: at.FETCH_FRIENDS_SUCCESS,
  friends
});

// I need the thunk to be able to return a function
// NOT BEING USED, BUT IT'S THE SAME AS THE ASYNC LOGIN FUNCTION BELOW
export function login1(userId) {
  return dispatch => {
    dispatch(fetchUserRequest());

    return fetchUser(userId)
      .then(data => dispatch(fetchUserSuccess(data)))
      .catch(_err => dispatch(fetchUserError()));
  };
}

// This first line though... I always forget it's returning an async fn...
export const login = userId => async dispatch => {
  dispatch(fetchUserRequest());

  try {
    const data = await fetchUser(userId);
    dispatch(fetchUserSuccess(data));
  } catch (_err) {
    dispatch(fetchUserError());
  }
};

export const fetchFriends = () => async dispatch => {
  // I'm assuming fetch wont't fail for simplicity's sake.
  const friendsIds = [2, 3, 4];
  const promises = friendsIds.map(id => fetchUser(id));

  const friendsData = await Promise.all(promises);
  const names = friendsData.map(user => user.name);

  dispatch(fetchFriendsSuccess(names));
};

export const logout = () => ({ type: at.LOGOUT });
