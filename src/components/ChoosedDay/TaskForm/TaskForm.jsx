import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
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
  EditButton,
  StyledAddIcon,
  StyledEditIcon,
} from './TaskForm.styled';

import { addTask, patchTask } from 'redux/tasks/operations';
import { selectTasks } from 'redux/tasks/selectors';

const useDateValidation = () => {
  const params = useParams();
  const date = new Date(params.currentDay);

  if (Object.prototype.toString.call(date) === '[object Date]') {
    if (isNaN(date)) {
      return new Date();
    } else {
      return date;
    }
  }
};

const TaskForm = ({
  onCloseModal,
  editBtnVisible,
  id,
  editTask,
  addCategory,
}) => {
  const [title, setTitle] = useState(editTask?.title || '');
  const [start, setStart] = useState(editTask?.start || '09:00');
  const [end, setEnd] = useState(editTask?.end || '09:30');
  const [selectedOption, setSelectedOption] = useState(editTask?.priority);
  const [priority, setPriority] = useState(editTask?.priority || 'low');
  const category = editTask?.category || 'to-do';
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const validDate = useDateValidation();
  const currentDay = format(validDate, 'yyyy-MM-dd');

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setStart(editTask.start);
      setEnd(editTask.end);
      setPriority(editTask.priority);
      setSelectedOption(editTask.priority);
    }
  }, [editTask]);

  const handleOptionChange = event => {
    const value = event.target.value;
    setSelectedOption(value);
    setPriority(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const edit = {
      title,
      start,
      end,
      priority,
      date: currentDay,
      category,
    };

    const startTime = start.split(':');
    const endTime = end.split(':');

    const startHour = parseInt(startTime[0], 10);
    const endHour = parseInt(endTime[0], 10);
    const startMinute = parseInt(startTime[1], 10);
    const endMinute = parseInt(endTime[1], 10);

    if (
      startHour > endHour ||
      (startHour === endHour && startMinute >= endMinute)
    ) {
      toast.error('The start time must be earlier than the end time', {
        style: {
          background: 'orange',
          overflow: 'hidden',
        },
        icon: '❗',
        iconTheme: {
          primary: '#fff',
          secondary: 'orange',
        },
      });

      return;
    }

    if (title.trim() === '' || start.trim() === '' || end.trim() === '') {
      toast.error('All fields must be filled', {
        style: {
          background: 'orange',
          overflow: 'hidden',
        },
        icon: '❗',
        iconTheme: {
          primary: '#fff',
          secondary: 'orange',
        },
      });
      return;
    }

    if (
      title === editTask?.title &&
      end === editTask?.end &&
      start === editTask?.start &&
      priority === editTask?.priority
    ) {
      toast.error('Change at least one field', {
        style: {
          background: 'orange',
          overflow: 'hidden',
        },
        icon: '❗',
        iconTheme: {
          primary: '#fff',
          secondary: 'orange',
        },
      });
      return;
    }

    if (tasks.find(task => task._id === id)) {
      dispatch(patchTask({ id, task: edit }));
      toast.success('Successfully! The task has been changed');
    } else {
      dispatch(
        addTask({
          title,
          start,
          end,
          priority,
          date: currentDay,
          category: addCategory,
        })
      );
      toast.success('Successfully! Task added');
    }

    onCloseModal();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'title':
        return setTitle(value);
      case 'start':
        return setStart(value);
      case 'end':
        return setEnd(value);

      default:
        return value;
    }
  };

  return (
    <TaskFormStyled onSubmit={handleSubmit}>
      <TaskContainer>
        <TaskLabelStyled htmlFor="title">
          Title
          <TaskInputStyled
            type="text"
            name="title"
            id="title"
            placeholder="Enter text"
            maxLength={250}
            onChange={handleChange}
            value={title}
          />
        </TaskLabelStyled>
      </TaskContainer>

      <TimeWrapper>
        <TaskContainer>
          <TaskLabelStyled htmlFor="start">Start</TaskLabelStyled>
          <TaskInputStyled
            type="time"
            name="start"
            id="timeInput"
            value={start}
            onChange={handleChange}
            step="900"
          />
        </TaskContainer>

        <TaskContainer>
          <TaskLabelStyled htmlFor="end">End</TaskLabelStyled>
          <TaskInputStyled
            type="time"
            name="end"
            id="timeInput"
            value={end}
            onChange={handleChange}
            step="900"
          />
        </TaskContainer>
      </TimeWrapper>

      <RadioButtonContainer>
        <RadioButtonGorup>
          <RadioButtonLabel>
            <RadioButtonInput
              type="radio"
              name="option"
              value="low"
              checked={selectedOption === 'low'}
              onChange={handleOptionChange}
            />
            Low
          </RadioButtonLabel>
        </RadioButtonGorup>
        <RadioButtonGorup>
          <RadioButtonLabel>
            <RadioButtonInput
              type="radio"
              name="option"
              value="medium"
              checked={selectedOption === 'medium'}
              onChange={handleOptionChange}
            />
            Medium
          </RadioButtonLabel>
        </RadioButtonGorup>
        <RadioButtonGorup>
          <RadioButtonLabel>
            <RadioButtonInput
              type="radio"
              name="option"
              value="high"
              checked={selectedOption === 'high'}
              onChange={handleOptionChange}
            />
            High
          </RadioButtonLabel>
        </RadioButtonGorup>
      </RadioButtonContainer>

      <ButtonContainer>
        {editBtnVisible ? (
          <EditButton type="submit">
            <StyledEditIcon color="#fff" size={14.5} />
            Edit
          </EditButton>
        ) : (
          <>
            <AddButton type="submit">
              <StyledAddIcon color="#fff" size={11.7} />
              Add
            </AddButton>
            <CancelBtn type="button" onClick={onCloseModal}>
              Cancel
            </CancelBtn>
          </>
        )}
      </ButtonContainer>
    </TaskFormStyled>
  );
};

export { TaskForm };
