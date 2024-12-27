import axios, { setAuthHeader, clearAuthHeader } from './api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/signup', userData);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', userData);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});



