import { getMonth, getYear, parseISO } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import * as tasksOperations from 'redux/tasks/operations';
import { useParams } from 'react-router-dom';
import * as SC from './TasksColumnsList.styled';
import { TasksColumn } from '../TasksColumn/TasksColumn';

export const ComponentChooseDay = () => {
  const dispatch = useDispatch();
  const { currentDay } = useParams();

  const dateObject = parseISO(currentDay);
  // const day = getDate(dateObject);
  const month = getMonth(dateObject);
  const year = getYear(dateObject);

  const formattedMonth = String(month + 1).padStart(2, '0');
  // const formattedDay = String(day).padStart(2, '0');

  useEffect(() => {
    dispatch(tasksOperations.getAllTasks({ year, month: formattedMonth }));
  }, [dispatch, formattedMonth, year]);

  return (
    <SC.ScrollableContainer>
      <SC.DaystasksWrapper>
        <TasksColumn currentDay={currentDay} />
      </SC.DaystasksWrapper>
    </SC.ScrollableContainer>
  );
};
