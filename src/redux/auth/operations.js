import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = ''; 

const currentToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {}
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {}
);

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {});

const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {}
);

export { register, logOut, logIn, refreshCurrentUser };
