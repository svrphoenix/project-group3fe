import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import * as SC from './CalendarTable.styled';
import PropTypes from 'prop-types';

export const CalendarTable = ({ currentDate }) => {
  const firstDayOfMonth = startOfMonth(currentDate);
  const startDayOfMonth = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });
  const endDayOfMonth = endOfMonth(currentDate, { weekStartsOn: 1 });
  const isCurrentMonth = date => isSameMonth(date, currentDate);
  const days = eachDayOfInterval({
    start: startDayOfMonth,
    end: endOfWeek(endDayOfMonth),
  });

  const isActive = date => isSameDay(date, currentDate);

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
              </SC.NavLink>
            )}
          </SC.Cell>
        );
      })}
    </SC.Cells>
  );
};

CalendarTable.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
};
