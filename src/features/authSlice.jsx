import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setRefreshing: (state, action) => {
      state.isRefreshing = action.payload;
    },
  },
});

export const { loginSuccess, logout, setRefreshing } = authSlice.actions;

export const selectIsLoggedIn = (state) => !!state.auth.token;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export default authSlice.reducer;
