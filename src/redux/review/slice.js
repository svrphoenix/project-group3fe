import { createSlice } from '@reduxjs/toolkit';
import { deleteReview, postReview, updateReview } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.user.comment = payload.comment;
  state.user.rating = payload.rating;
  state.user.id = payload._id;
};

const handleDeleteFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.user.comment = '';
  state.user.rating = 0;
  state.user.id = null;
};

const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    user: {
      id: null,
      rating: 0,
      comment: '',
    },
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [postReview.pending]: handlePending,
    [updateReview.pending]: handlePending,
    [deleteReview.pending]: handlePending,
    [postReview.rejected]: handleRejected,
    [updateReview.rejected]: handleRejected,
    [deleteReview.rejected]: handleRejected,
    [postReview.fulfilled]: handleFulfilled,
    [updateReview.fulfilled]: handleFulfilled,
    [deleteReview.fulfilled]: handleDeleteFulfilled,
  },
});

export const reviewReducer = reviewSlice.reducer;
