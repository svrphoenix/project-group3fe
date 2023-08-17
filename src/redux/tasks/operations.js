import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import api from '../../api/api';

const BASE_URL = 'api/tasks';

const handleResponse = (response, errorMessage) => {
  if (response.status !== 200) {
    throw new Error(errorMessage);
  }
  return response.data;
};

export const getAllTasks = createAsyncThunk(
  'tasks/getAll',
  async (date, thunkAPI) => {
    try {
      const response = await api.get(
        `${BASE_URL}?month=${date.month}&year=${date.year}`
      );

      return handleResponse(
        response,
        'Failed to fetch tasks due to server error'
      );
    } catch (error) {
      toast.error(`Failed to fetch all tasks: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDayTasks = createAsyncThunk(
  'tasks/getDay',
  async (date, thunkAPI) => {
    try {
      const response = await api.get(
        `${BASE_URL}?month=${date.month}&day=${date.day}&year=${date.year}`
      );

      return handleResponse(
        response,
        'Failed to fetch daily tasks due to server error'
      );
    } catch (error) {
      toast.error(`Failed to fetch tasks for the day: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const response = await api.post(BASE_URL, task);

      if (response.status !== 201) {
        throw new Error('Failed to add task due to server error');
      }

      return response.data;
    } catch (error) {
      toast.error(`Failed to add task: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/removeTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await api.delete(`${BASE_URL}/${taskId}`);

      if (response.status !== 200) {
        throw new Error('Failed to delete task due to server error');
      }

      toast.success('Task deleted successfully');
      return response.data;
    } catch (error) {
      toast.error(`Sorry, task wasn’t deleted: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ id, task }, thunkAPI) => {
    try {
      const response = await api.patch(`${BASE_URL}/${id}`, task);

      if (response.status !== 200) {
        throw new Error('Failed to update task due to server error');
      }

      toast.success('Task has been successfully corrected');
      return response.data;
    } catch (error) {
      toast.error(`Sorry, something went wrong: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
