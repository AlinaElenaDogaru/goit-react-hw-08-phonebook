import { registerUser, loginUser, logoutUser, fetchCurrentUser } from '../features/auth';
import {
  loginSuccess,
  logoutSuccess,
  fetchCurrentUserStart,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
} from '../features/authSlice';
import { setAuthHeader } from './api';

export const register = (userData) => async (dispatch) => {
  try {
    const data = await registerUser(userData);
    dispatch(loginSuccess(data));
  } catch (error) {
    console.error('Error registering user:', error.message);
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const data = await loginUser(userData);
    dispatch(loginSuccess(data));
  } catch (error) {
    console.error('Error logging in:', error.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await logoutUser();
    dispatch(logoutSuccess());
  } catch (error) {
    console.error('Error logging out:', error.message);
  }
};

export const fetchCurrentUserThunk = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  if (!token) return;

  dispatch(fetchCurrentUserStart());
  try {
    setAuthHeader(token);
    const user = await fetchCurrentUser();
    dispatch(fetchCurrentUserSuccess(user));
  } catch (error) {
    console.error('Error fetching current user:', error.message);
    dispatch(fetchCurrentUserError());
  }
};
