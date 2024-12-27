import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice.jsx';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export const persistToken = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type.includes('auth/loginSuccess')) {
    localStorage.setItem('token', store.getState().auth.token);
  } else if (action.type.includes('auth/logoutSuccess')) {
    localStorage.removeItem('token');
  }

  return result;
};

store.subscribe(() => persistToken(store));

export default store;


