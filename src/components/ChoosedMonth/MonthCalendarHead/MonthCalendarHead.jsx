import { eachDayOfInterval, endOfWeek, format, startOfWeek } from 'date-fns';
import * as SC from './MonthCalendarHead.styled';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const MonthCalendarHead = ({ currentDate }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const startDayOfWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endDayOfWeek = endOfWeek(currentDate, { weekStartsOn: 1 });
  const daysOfWeek = eachDayOfInterval({
    start: startDayOfWeek,
    end: endDayOfWeek,
  });

  return (
    <SC.DaysOfWeekWrapper>
      {daysOfWeek.map(day => (
        <SC.Day key={day}>
          {width > 768 ? format(day, 'EEE') : format(day, 'EEEEE')}
        </SC.Day>
      ))}
    </SC.DaysOfWeekWrapper>
  );
};

// MonthCalendarHead.propTypes = {
//   width: PropTypes.number.isRequired,
//   day: PropTypes.instanceOf(Date).isRequired,
// };
