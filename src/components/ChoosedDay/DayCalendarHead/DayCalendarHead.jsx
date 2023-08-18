import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { format } from 'date-fns';
import { eachDayOfInterval, endOfWeek, isSameDay, startOfWeek } from 'date-fns';
import * as SC from './DayCalendarHead.styled';

export const DayCalendarHead = ({ dateObject }) => {
  const [currentDate, setCurrentDate] = useState();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const onClickDay = weeksDay => {
    setCurrentDate(weeksDay);
    Navigate(`/calendar/day/${format(weeksDay, 'yyyy-MM-dd')}`);
  };

  const startDayOfWeek = startOfWeek(dateObject, { weekStartsOn: 1 });
  const endDayOfWeek = endOfWeek(dateObject, { weekStartsOn: 1 });
  const daysOfWeek = eachDayOfInterval({
    start: startDayOfWeek,
    end: endDayOfWeek,
  });

  return (
    <SC.WeekdayBox>
      {daysOfWeek.map(weeksDay => {
        const isActive = isSameDay(weeksDay, dateObject);

        return (
          <SC.Weekday key={weeksDay}>
            {width > 768 ? format(weeksDay, 'EEE') : format(weeksDay, 'EEEEE')}
            <SC.DayNumber className={isActive ? 'current-date' : null}>
              {format(weeksDay, 'd')}
            </SC.DayNumber>
          </SC.Weekday>
        );
      })}
    </SC.WeekdayBox>
  );
};
