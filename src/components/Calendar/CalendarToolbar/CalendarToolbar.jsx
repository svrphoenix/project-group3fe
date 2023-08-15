import { useEffect, useState } from 'react';
import { PeriodPaginator } from '../PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from '../PeriodTypeSelect/PeriodTypeSelect';
import * as SC from './CalendarToolbar.styled';
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameDay,
} from 'date-fns';
import PropTypes from 'prop-types';

export const CalendarToolbar = ({ type = 'day' }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const formatedDate =
    type === 'month'
      ? format(currentDate, 'MMMM')
      : format(currentDate, 'd MMMM');

  const startDayOfWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endDayOfWeek = endOfWeek(currentDate, { weekStartsOn: 1 });
  const daysOfWeek = eachDayOfInterval({
    start: startDayOfWeek,
    end: endDayOfWeek,
  });

  return (
    <>
      <SC.CalendarToolbarWrapper>
        <PeriodPaginator date={formatedDate} />
        <PeriodTypeSelect type={type} />
      </SC.CalendarToolbarWrapper>
      <SC.DaysOfWeekWrapper>
        {daysOfWeek.map(day => {
          const isActive = isSameDay(day, currentDate);

          return type === 'month' ? (
            <SC.Day key={day}>
              {width > 768 ? format(day, 'EEE') : format(day, 'EEEEE')}
            </SC.Day>
          ) : (
            <SC.Day key={day}>
              {width > 768 ? format(day, 'EEE') : format(day, 'EEEEE')}
              <SC.DayNumber className={isActive ? 'current-date' : null}>
                {format(day, 'd')}
              </SC.DayNumber>
            </SC.Day>
          );
        })}
      </SC.DaysOfWeekWrapper>
    </>
  );
};

CalendarToolbar.propTypes = {
  type: PropTypes.string,
};
