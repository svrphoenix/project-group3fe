import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import api from '../../api/api';

export const getAllTasks = createAsyncThunk(
  'tasks/getAll',
  async (date, thunkAPI) => {
    try {
      const response = await api.get(
        `tasks?month=${date.month}&year=${date.year}`
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

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const response = await api.post('tasks', task);

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
  'tasks/removeTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await api.delete(`tasks/${taskId}`);

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
  'tasks/updateTask',
  async ({ id, task }, thunkAPI) => {
    try {
      const response = await api.patch(`tasks/${id}`, task);

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
