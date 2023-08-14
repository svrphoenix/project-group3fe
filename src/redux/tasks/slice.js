import { createSlice } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  getAllTasks,
  getDayTasks,
  patchTask,
} from './operations';

const startLoading = state => {
  state.isLoading = true;
  state.error = null;
};

const loadingFailed = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(getDayTasks.pending, startLoading)
      .addCase(getDayTasks.fulfilled, (state, { payload }) => {
        state.tasks = payload;
        state.isLoading = false;
      })
      .addCase(getDayTasks.rejected, loadingFailed)

      .addCase(addTask.pending, startLoading)
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.tasks.push(payload);
        state.isLoading = false;
      })
      .addCase(addTask.rejected, loadingFailed)

      .addCase(getAllTasks.pending, startLoading)
      .addCase(getAllTasks.fulfilled, (state, { payload }) => {
        state.tasks = payload;
        state.isLoading = false;
      })
      .addCase(getAllTasks.rejected, loadingFailed)

      .addCase(deleteTask.pending, startLoading)
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.tasks = state.tasks.filter(task => task._id !== payload);
        state.isLoading = false;
      })
      .addCase(deleteTask.rejected, loadingFailed)

      .addCase(patchTask.pending, startLoading)
      .addCase(patchTask.fulfilled, (state, { payload }) => {
        state.tasks = state.tasks.map(task =>
          task._id === payload._id ? payload : task
        );
        state.isLoading = false;
      })
      .addCase(patchTask.rejected, loadingFailed);
  },
});

export const tasksReducer = taskSlice.reducer;
