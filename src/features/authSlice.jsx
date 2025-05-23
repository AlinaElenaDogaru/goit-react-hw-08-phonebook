import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, fetchCurrentUser } from '../features/authOperations';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isLoadingRegister: false,
  isLoadingLogin: false,
  isLoadingLogout: false,
  isLoadingCurrentUser: false,
  registerError: null,
  loginError: null,
  logoutError: null,
  currentUserError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}, // Removed old reducers
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => {
        state.isLoadingRegister = true;
        state.registerError = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoadingRegister = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoadingRegister = false;
        state.registerError = action.payload || action.error.message;
      })
      // Login
      .addCase(login.pending, (state) => {
        state.isLoadingLogin = true;
        state.loginError = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoadingLogin = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoadingLogin = false;
        state.loginError = action.payload || action.error.message;
      })
      // Logout
      .addCase(logout.pending, (state) => {
        state.isLoadingLogout = true;
        state.logoutError = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoadingLogout = false;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoadingLogout = false;
        state.logoutError = action.payload || action.error.message;
        // Optionally clear user/token and set isLoggedIn to false
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      // Fetch Current User
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isLoadingCurrentUser = true;
        state.currentUserError = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoadingCurrentUser = false;
        state.user = action.payload; // Assuming payload is the user object
        state.isLoggedIn = true;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoadingCurrentUser = false;
        state.currentUserError = action.payload || action.error.message;
        // Optionally clear user/token and set isLoggedIn to false
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

// Removed old action exports
export default authSlice.reducer;

