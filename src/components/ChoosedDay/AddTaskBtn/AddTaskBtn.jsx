import React from 'react';
import * as SC from './AddTaskBtn.styled';

export const AddTaskBtn = ({ onToggleModal }) => {
  return (
    <SC.CreateTasksBtn onClick={onToggleModal}>Add task</SC.CreateTasksBtn>
  );
};
