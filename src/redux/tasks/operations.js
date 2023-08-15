import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const BASE_URL = 'api/tasks'; // спільний URL

export const getAllTasks = createAsyncThunk(
  'tasks/fetchAllTasks',
  async (date, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}?month=${date.month}&year=${date.year}`
      );

      if (response.status !== 200) {
        throw new Error('Failed to fetch tasks due to server error');
      }

      return response.data;
    } catch (error) {
      toast.error('Failed to fetch all tasks: ' + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDayTasks = createAsyncThunk(
  'tasks/fetchDayTasks',
  async (date, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}?month=${date.month}&day=${date.day}&year=${date.year}`
      );

      if (response.status !== 200) {
        throw new Error('Failed to fetch daily tasks due to server error');
      }

      return response.data;
    } catch (error) {
      toast.error('Failed to fetch tasks for the day: ' + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL, task);

      if (response.status !== 201) {
        throw new Error('Failed to add task due to server error');
      }

      return response.data;
    } catch (error) {
      toast.error('Failed to add task: ' + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/delTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${taskId}`);

      if (response.status !== 200) {
        throw new Error('Failed to delete task due to server error');
      }

      toast.success('Task deleted successfully');
      return response.data;
    } catch (error) {
      toast.error('Sorry, task wasn’t deleted: ' + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchTask = createAsyncThunk(
  'tasks/patchTask',
  async ({ id, task }, thunkAPI) => {
    try {
      const response = await axios.patch(`${BASE_URL}/${id}`, task);

      if (response.status !== 200) {
        throw new Error('Failed to update task due to server error');
      }

      toast.success('Task has been successfully corrected');
      return response.data;
    } catch (error) {
      toast.error('Sorry, something went wrong: ' + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
