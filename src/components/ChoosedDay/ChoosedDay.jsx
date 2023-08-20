import { parseISO } from 'date-fns';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectTasks } from 'redux/tasks/selectors';
import { DayCalendarHead } from 'components/ChoosedDay/DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksColumnsList/TasksColumnsList';

export const ChoosedDay = () => {
  const tasks = useSelector(selectTasks);

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

  return (
    <>
      <DayCalendarHead dateObject={dateObject} />
      <TasksColumnsList daysTasks={daysTasks} />
    </>
  );
};
