import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  parse,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import * as SC from './CalendarTable.styled';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectTasks } from 'redux/tasks/selectors';
import { testTasks } from './tests';
import useResize from 'hooks/useResize';

export const CalendarTable = () => {
  console.log(testTasks);
  // const tasks = useSelector(selectTasks);
  // console.log(tasks);
  const { currentDate } = useParams();
  const parsedDate = parse(currentDate, 'yyyy-MM', new Date());
  const firstDayOfMonth = startOfMonth(parsedDate);
  const startDayOfMonth = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });
  const endDayOfMonth = endOfMonth(parsedDate, { weekStartsOn: 1 });
  const isCurrentMonth = date => isSameMonth(date, parsedDate);
  const days = eachDayOfInterval({
    start: startDayOfMonth,
    end: endOfWeek(endDayOfMonth),
  });
  const width = useResize();

  const isActive = date => isSameDay(date, new Date());

  return (
    <SC.Cells>
      {days.map((day, index) => {
        return (
          <SC.Cell
            key={index}
            className={isCurrentMonth(day) ? '' : 'inactive'}
          >
            {isCurrentMonth(day) && (
              <SC.NavLink to={`/calendar/day/${format(day, 'yyyy-MM-dd')}`}>
                <SC.Number className={isActive(day) ? 'active' : ''}>
                  {format(day, 'd')}
                </SC.Number>
                <SC.TaskList>
                  {testTasks.length &&
                    (function () {
                      const dayTasks = testTasks?.filter(
                        ({ date }) => date === format(day, 'yyyy-MM-dd')
                      );
                      return dayTasks.slice(0, 3).map(dayTask => (
                        <SC.TaskListItem
                          className={dayTask.priority}
                          key={dayTask.owner?._id}
                        >
                          {dayTask.title.substring(0, width < 768 ? 4 : 8)}..
                        </SC.TaskListItem>
                      ));
                    })()}
                </SC.TaskList>
              </SC.NavLink>
            )}
          </SC.Cell>
        );
      })}
    </SC.Cells>
  );
};
