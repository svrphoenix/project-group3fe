import React from 'react';


import {
  TaskFormStyled,
  TaskLabelStyled,
  TaskInputStyled,
  Wrapper,
  RadioButtonGorup,
  RadioButtonLabel,
  RadioButtonInput,
  AddButton,
  CancelBtn,
  ButtonIcon,
  Errors,
} from './TaskForm.styled';

const TaskForm = () => {
  return (
    <TaskFormStyled>
      <TaskLabelStyled htmlFor="title">
        Title
        <TaskInputStyled
          type="text"
          name="title"
          id="title"
          placeholder="Enter text"
        />
        <Errors>Error message</Errors>
      </TaskLabelStyled>

      <Wrapper>
        <TaskLabelStyled htmlFor="start">
          Start
          <TaskInputStyled
            type="time"
            step="60"
            name="start"
            id="start"
            placeholder="Select time"
          />
          <Errors>Error message</Errors>
        </TaskLabelStyled>

        <TaskLabelStyled htmlFor="end">
          End
          <TaskInputStyled
            type="time"
            step="60"
            name="end"
            id="end"
            placeholder="Select time"
          />
          <Errors>Error message</Errors>
        </TaskLabelStyled>
      </Wrapper>

      <RadioButtonGorup>
        {['low', 'medium', 'high'].map(priority => (
          <RadioButtonLabel key={priority}>
            <RadioButtonInput type="radio" value={priority} name="priority" />
            {priority}
          </RadioButtonLabel>
        ))}
      </RadioButtonGorup>

      <Wrapper>
        <ButtonIcon>
          {/* <Pencil width="18" height="18" fill="none" stroke="#ffffff" /> */}
          Edit
        </ButtonIcon>
        <AddButton
          aria-label="Button add"
          type="submit"
          style={{ width: '50%' }}
        >
          {/* <Plus width="20" height="20" fill="none" stroke="#ffffff" /> */}
          Add
        </AddButton>
        <CancelBtn
          aria-label="Button cancel"
          type="button"
          style={{ width: '50%' }}
        >
          Cancel
        </CancelBtn>
      </Wrapper>
    </TaskFormStyled>
  );
};

export default TaskForm;
