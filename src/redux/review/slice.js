import { createSlice } from '@reduxjs/toolkit';
import { fetchReview } from './operations';

const handlePending = state => {
  state.user.isLoading = true;
};

const handleRejected = (state, action) => {
  state.user.isLoading = false;
  state.user.error = action.payload;
};

const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    user: {
      rate: 0,
      review: '',
      isLoading: false,
      error: null,
    },
  },
  extraReducers: {
    [fetchReview.pending]: handlePending,
    [fetchReview.rejected]: handleRejected,
    [fetchReview.fulfilled](state, action) {
      state.review.isLoading = false;
      state.review.error = null;
      state.review.review = action.payload;
    },
  },
});

export const reviewReducer = reviewSlice.reducer;
