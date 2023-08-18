import { createSlice } from '@reduxjs/toolkit';
import {
  deleteReview,
  postReview,
  updateReview,
  getReview,
} from './operations';

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
  state.user.comment = payload.comment || '';
  state.user.rating = payload.rating || 0;
};

const handleDeleteFulfilled = state => {
  state.isLoading = false;
  state.error = null;
  state.user.comment = '';
  state.user.rating = 0;
};

const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    user: {
      rating: 0,
      comment: '',
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    resetReviewState(state) {
      state.user.comment = '';
      state.user.rating = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getReview.pending, handlePending)
      .addCase(postReview.pending, handlePending)
      .addCase(updateReview.pending, handlePending)
      .addCase(deleteReview.pending, handlePending)

      .addCase(getReview.rejected, handleRejected)
      .addCase(postReview.rejected, handleRejected)
      .addCase(updateReview.rejected, handleRejected)
      .addCase(deleteReview.rejected, handleRejected)

      .addCase(getReview.fulfilled, handleFulfilled)
      .addCase(postReview.fulfilled, handleFulfilled)
      .addCase(updateReview.fulfilled, handleFulfilled)
      .addCase(deleteReview.fulfilled, handleDeleteFulfilled);
  },
});

export const reviewReducer = reviewSlice.reducer;
export const { resetReviewState } = reviewSlice.actions;
