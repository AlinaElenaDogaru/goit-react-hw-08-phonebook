import api from './api';

// Register
export const registerUser = async (userData) => {
  const { data } = await api.post('/users/signup', userData);
  return data;
};

// Login
export const loginUser = async (userData) => {
  const { data } = await api.post('/users/login', userData);
  return data;
};

// Logout
export const logoutUser = async () => {
  await api.post('/users/logout');
};

// Get Current User
export const fetchCurrentUser = async () => {
  const { data } = await api.get('/users/current');
  return data;
};


