import { useEffect, useState } from 'react';
import { PeriodPaginator } from '../PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from '../PeriodTypeSelect/PeriodTypeSelect';
import { MonthCalendarHead } from '../MonthCalendarHead/MonthCalendarHead';
import { DayCalendarHead } from '../DayCalendarHead/DayCalendarHead';
import * as SC from './CalendarToolbar.styled';
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameDay,
  addDays,
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
  const prevHandler = () => {
    type === 'month'
      ? setCurrentDate(
          prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1)
        )
      : setCurrentDate(prevDate => addDays(prevDate, -1));
  };
  const nextHandler = () => {
    type === 'month'
      ? setCurrentDate(
          prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1)
        )
      : setCurrentDate(prevDate => addDays(prevDate, 1));
  };

  return (
    <>
      <SC.CalendarToolbarWrapper>
        <PeriodPaginator
          date={formatedDate}
          prevHandler={prevHandler}
          nextHandler={nextHandler}
        />
        <PeriodTypeSelect type={type} />
      </SC.CalendarToolbarWrapper>
      <SC.DaysOfWeekWrapper>
        {daysOfWeek.map(day => {
          const isActive = isSameDay(day, currentDate);

          return type === 'month' ? (
            <MonthCalendarHead key={day} day={day} width={width} />
          ) : (
            <DayCalendarHead
              key={day}
              day={day}
              width={width}
              isActive={isActive}
            />
          );
        })}
      </SC.DaysOfWeekWrapper>
    </>
  );
};

CalendarToolbar.propTypes = {
  type: PropTypes.string,
};
