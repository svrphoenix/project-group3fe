import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api/api';

export const getReview = createAsyncThunk(
  'reviews/get',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.get(`reviews/${id}`);
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
    const { id, ...body } = credentials;
    try {
      const { data } = await api.patch(`reviews/${id}`, body);
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
