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
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import useResize from 'hooks/useResize';
import { useMemo } from 'react';
import CircleBadge from 'components/CircleBadge/CircleBadge';
import { Tooltip } from 'react-tooltip';

const CalendarTable = () => {
  const tasks = useSelector(selectTasks);
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

  const tasksByDate = useMemo(() => {
    return tasks.reduce((acc, task) => {
      if (!acc[task.date]) {
        acc[task.date] = [];
      }
      acc[task.date].push(task);
      return acc;
    }, {});
  }, [tasks]);

  return (
    <SC.Cells>
      {days.map((day, index) => {
        const dayFormatted = format(day, 'yyyy-MM-dd');
        const dayTasks = tasksByDate[dayFormatted] || [];
        return (
          <SC.Cell
            key={index}
            className={isCurrentMonth(day) ? '' : 'inactive'}
          >
            {isCurrentMonth(day) && (
              <>
                <SC.NavLink
                  to={`/calendar/day/${format(day, 'yyyy-MM-dd')}`}
                  data-tooltip-id={
                    dayTasks.length > 2 ? `my-tooltip-${index}` : ''
                  }
                >
                  <SC.Number className={isActive(day) ? 'active' : ''}>
                    {format(day, 'd')}
                  </SC.Number>
                  {!!dayTasks.length && (
                    <SC.TaskList>
                      {dayTasks.slice(0, 2).map(dayTask => (
                        <SC.TaskListItem
                          className={dayTask.priority}
                          key={dayTask._id}
                        >
                          {dayTask.title.substring(0, width < 768 ? 4 : 8)}..
                        </SC.TaskListItem>
                      ))}
                    </SC.TaskList>
                  )}
                  {dayTasks.length > 2 && (
                    <CircleBadge text={dayTasks.length} color="#3e85f3" />
                  )}
                </SC.NavLink>
                <Tooltip
                  id={`my-tooltip-${index}`}
                  style={{ backgroundColor: '#3e85f3', zIndex: '999' }}
                >
                  <div>
                    <h3 style={{ marginBottom: '8px', textAlign: 'center' }}>
                      Tasks for this day
                    </h3>
                    <SC.TaskList>
                      {dayTasks.map((dayTask, inx) => (
                        <SC.TaskListItem
                          key={`${inx}-tlp`}
                          className={dayTask.priority}
                        >
                          {dayTask.title}
                        </SC.TaskListItem>
                      ))}
                    </SC.TaskList>
                  </div>
                </Tooltip>
              </>
            )}
          </SC.Cell>
        );
      })}
    </SC.Cells>
  );
};

export default CalendarTable;
