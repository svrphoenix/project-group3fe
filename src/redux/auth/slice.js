import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshCurrentUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      avatarURL: null,
      phone: null,
      birthday: null,
      skype: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(logout.fulfilled, state => {
      state.user = {
        name: null,
        email: null,
        avatarURL: null,
        phone: null,
        birthday: null,
        skype: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(refreshCurrentUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refreshCurrentUser.rejected, state => {
      state.isRefreshing = false;
    });
  },
});

export const authReducer = authSlice.reducer;
