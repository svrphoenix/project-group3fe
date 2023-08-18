import { getMonth, getYear, parseISO } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as tasksOperations from 'redux/tasks/operations';
import { useParams } from 'react-router-dom';
import { selectTasks } from 'redux/tasks/selectors';
import { DayCalendarHead } from 'components/ChoosedDay/DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksColumnsList/TasksColumnsList';

export const ChoosedDay = () => {
  const dispatch = useDispatch();
  // const tasks = useSelector(selectTasks);
  const tasks = [
    {
      title: 'Do a morning exercise Do a morning exercise',
      start: '09:00',
      end: '09:10',
      priority: 'low',
      date: '2023-08-18',
      category: 'to-do',
      owner: {
        _id: 'tyd5eb99a3ed01b542412a78',
        avatarURL:
          'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png',
      },
    },
    {
      title: 'Buy milk',
      start: '09:00',
      end: '09:10',
      priority: 'high',
      date: '2023-08-18',
      category: 'to-do',
      owner: {
        _id: 'tyd5eb99a3ed01b542412a87',
        avatarURL: 'https://vrt.com/upload/avatar.jpg',
      },
    },
    {
      title: 'Do something bad',
      start: '09:00',
      end: '09:10',
      priority: 'medium',
      date: '2023-08-18',
      category: 'in-progress',
      owner: {
        _id: 'tyd5eb99a3ed01b542412a79',
        avatarURL: 'https://vrt.com/upload/avatar.jpg',
      },
    },
  ];
  const { currentDay } = useParams();

  const daysTasks = {
    todo: tasks.filter(
      task => task.date === currentDay && task.category === 'to-do'
    ),
    inProgress: tasks.filter(
      task => task.date === currentDay && task.category === 'in-progress'
    ),
    done: tasks.filter(
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
      <TasksColumnsList daysTasks={daysTasks} />
    </>
  );
};
