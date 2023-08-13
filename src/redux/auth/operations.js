import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { logoutReset } from './slice';

// axios.defaults.baseURL = ''; //адреса задеплоєного бекенду
axios.defaults.baseURL = 'https://goose-backend.onrender.com';

const currentToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
    delete axios.defaults.headers.common.Authorization;
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/register', credentials);
      currentToken.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    currentToken.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  thunkAPI.dispatch(logoutReset());

  try {
    await axios.post('/users/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  } finally {
    currentToken.unset();
  }
});

const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    // console.log(state);
    const persistedToken = state.auth.token;
    // console.log('refreshUser');
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    currentToken.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { register, logout, login, refreshCurrentUser };
