import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshCurrentUser } from './operations';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: '',
};

const handlePending = (state, _) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledUser = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.user = payload.user;
  state.token = payload.token;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutReset(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(register.pending, handlePending);
    builder.addCase(register.fulfilled, handleFulfilledUser);
    builder.addCase(register.rejected, handleRejected);

    builder.addCase(login.pending, handlePending);
    builder.addCase(login.fulfilled, handleFulfilledUser);
    builder.addCase(login.rejected, handleRejected);

    builder.addCase(logout.pending, handlePending);
    builder.addCase(logout.fulfilled, (state, _) => {
      state.isLoading = false;
    });
    builder.addCase(logout.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(refreshCurrentUser.pending, handlePending);
    builder.addCase(refreshCurrentUser.fulfilled, handleFulfilledUser);
    builder.addCase(refreshCurrentUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
export const { logoutReset } = authSlice.actions;
