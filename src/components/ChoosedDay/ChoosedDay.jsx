import { getMonth, getYear, parseISO } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as tasksOperations from 'redux/tasks/operations';
import { useParams } from 'react-router-dom';
import { selectTasks } from 'redux/tasks/selectors';
import { ColumnsTasksList } from './ColumnsTasksList/ColumnsTasksList';
import { DayCalendarHead } from 'components/ChoosedDay/DayCalendarHead/DayCalendarHead';

export const ChoosedDay = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const { currentDay } = useParams();

  const daysTasks = {
    'to-do': tasks.filter(
      task => task.date === currentDay && task.category === 'to-do'
    ),
    inProgresDaysTasks: tasks.filter(
      task => task.date === currentDay && task.category === 'in-progress'
    ),
    doneDaysTasks: tasks.filter(
      task => task.date === currentDay && task.category === 'done'
    ),
  };

  const dateObject = parseISO(currentDay);
  const month = getMonth(dateObject);
  const year = getYear(dateObject);

  const formattedMonth = String(month + 1).padStart(2, '0');

  useEffect(() => {
    dispatch(tasksOperations.getAllTasks({ year, month: formattedMonth }));
  }, [dispatch, formattedMonth, year]);

  return (
    <>
      <DayCalendarHead dateObject={dateObject} />
      <ColumnsTasksList currentDay={currentDay} />
    </>
  );
};
