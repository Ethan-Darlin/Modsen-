// src/redux/userActions.js
import axios from 'axios';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
      });
  };
};