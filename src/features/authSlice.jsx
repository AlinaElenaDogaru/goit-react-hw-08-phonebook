import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logoutSuccess(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    fetchCurrentUserStart(state) {
      state.isFetchingCurrentUser = true;
    },
    fetchCurrentUserSuccess(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    fetchCurrentUserError(state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export const {
  loginSuccess,
  logoutSuccess,
  fetchCurrentUserStart,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
} = authSlice.actions;

export default authSlice.reducer;

