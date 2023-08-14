import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const postReview = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
