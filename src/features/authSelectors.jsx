export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getUserEmail = (state) => state.auth.user?.email; // Added optional chaining

// Register Selectors
export const getIsLoadingRegister = (state) => state.auth.isLoadingRegister;
export const getRegisterError = (state) => state.auth.registerError;

// Login Selectors
export const getIsLoadingLogin = (state) => state.auth.isLoadingLogin;
export const getLoginError = (state) => state.auth.loginError;

// Logout Selectors
export const getIsLoadingLogout = (state) => state.auth.isLoadingLogout;
export const getLogoutError = (state) => state.auth.logoutError;

// Current User Selectors
export const getIsLoadingCurrentUser = (state) => state.auth.isLoadingCurrentUser;
export const getCurrentUserError = (state) => state.auth.currentUserError;
