import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const getReview = createAsyncThunk(
  'reviews/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('reviews/own');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postReview = createAsyncThunk(
  'reviews/post',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post('/reviews', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'reviews/update',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.patch('reviews/own', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`reviews/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
