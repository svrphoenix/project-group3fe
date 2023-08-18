import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';



import {
  TaskFormStyled,
  TaskContainer,
  TaskLabelStyled,
  TaskInputStyled,
  TimeWrapper,
  RadioButtonContainer,
  RadioButtonGorup,
  RadioButtonLabel,
  RadioButtonInput,
  ButtonContainer,
  AddButton,
  CancelBtn,
  ButtonIcon,
} from './TaskForm.styled';

const TaskForm = () => {
  return (
    <TaskFormStyled>
      <TaskContainer>
        <TaskLabelStyled htmlFor="title">
          Title
          <TaskInputStyled
            type="text"
            name="title"
            id="title"
            placeholder="Enter text"
          />
        </TaskLabelStyled>
      </TaskContainer>

      <TimeWrapper>
        <TimeWrapper>
          <TaskLabelStyled htmlFor="start">
            Start
            <TaskInputStyled
              type="time"
              step="60"
              name="start"
              id="start"
              placeholder="Select time"
            />
          </TaskLabelStyled>
        </TimeWrapper>

        <TimeWrapper>
          <TaskLabelStyled htmlFor="end">
            End
            <TaskInputStyled
              type="time"
              step="60"
              name="end"
              id="end"
              placeholder="Select time"
            />
          </TaskLabelStyled>
        </TimeWrapper>
      </TimeWrapper>

      <RadioButtonContainer>
        <RadioButtonGorup>
          <RadioButtonLabel>
            <RadioButtonInput type="radio" name="option" value="low" />
          </RadioButtonLabel>
        </RadioButtonGorup>
        <RadioButtonGorup>
          <RadioButtonLabel>
            <RadioButtonInput type="radio" name="option" value="medium" />
          </RadioButtonLabel>
        </RadioButtonGorup>
        <RadioButtonGorup>
          <RadioButtonLabel>
            <RadioButtonInput type="radio" name="option" value="high" />
          </RadioButtonLabel>
        </RadioButtonGorup>
      </RadioButtonContainer>

      <ButtonContainer>
        <ButtonIcon>
          {/* <Pencil width="18" height="18" fill="none" stroke="#ffffff" /> */}
          Edit
        </ButtonIcon>
        <AddButton aria-label="Button add" type="submit">
          {/* <Plus width="20" height="20" fill="none" stroke="#ffffff" /> */}
          Add
        </AddButton>
        <CancelBtn aria-label="Button cancel" type="button">
          Cancel
        </CancelBtn>
      </ButtonContainer>
    </TaskFormStyled>
  );
};

export default TaskForm;
