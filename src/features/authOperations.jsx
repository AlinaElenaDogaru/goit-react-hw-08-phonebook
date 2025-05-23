import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser as fetchCurrentUserApi,
} from './auth';
import { setAuthHeader, clearAuthHeader } from './api';

export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const data = await registerUser(userData);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const data = await loginUser(userData);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logoutUser();
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;

  if (!token) {
    return thunkAPI.rejectWithValue('No token found');
  }

  setAuthHeader(token);
  try {
    const data = await fetchCurrentUserApi();
    return data;
  } catch (error) {
    clearAuthHeader();
    return thunkAPI.rejectWithValue(error.message);
  }
});



