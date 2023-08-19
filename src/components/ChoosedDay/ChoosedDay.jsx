import { parseISO } from 'date-fns';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectTasks } from 'redux/tasks/selectors';
import { ColumnsTasksList } from './ColumnsTasksList/ColumnsTasksList';
import { DayCalendarHead } from 'components/ChoosedDay/DayCalendarHead/DayCalendarHead';

export const ChoosedDay = () => {
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

  return (
    <>
      <DayCalendarHead dateObject={dateObject} />
      <ColumnsTasksList currentDay={currentDay} daysTasks={daysTasks} />
    </>
  );
};
