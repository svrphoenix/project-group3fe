import * as authService from 'api/authServices';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { logoutReset } from './slice';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const data = await authService.register(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const data = await authService.login(credentials);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  thunkAPI.dispatch(logoutReset());
  try {
    await authService.logout();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log('refreshUser');
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const data = await authService.getCurrent(persistedToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { register, logout, login, refreshCurrentUser };
