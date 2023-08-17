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
  parse,
} from 'date-fns';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router';
import { CalendarTable } from '../CalendarTable/CalendarTable';
import { ComponentChooseDay } from 'components/ChoosedDay/TasksColumnsList/TasksColumnsList';

export const CalendarToolbar = ({ type = 'month' }) => {
  const params = useParams();
  const navigate = useNavigate();
  const initialDate =
    type === 'day'
      ? parse(params.currentDate || params.currentDay, 'yyyy-MM-dd', new Date())
      : new Date();
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const formatedDate =
    type === 'month'
      ? format(currentDate, 'MMMM yyyy')
      : format(currentDate, 'dd MMMM yyyy');

  const startDayOfWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endDayOfWeek = endOfWeek(currentDate, { weekStartsOn: 1 });
  const daysOfWeek = eachDayOfInterval({
    start: startDayOfWeek,
    end: endDayOfWeek,
  });
  const prevHandleMonth = () => {
    const prevDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
    setCurrentDate(prevDate);
    navigate(`/calendar/month/${format(prevDate, 'MMMM').toLowerCase()}`);
  };

  const prevHandleDay = () => {
    const prevDate = addDays(currentDate, -1);
    setCurrentDate(prevDate);
    navigate(`/calendar/day/${format(prevDate, 'yyyy-MM-dd')}`);
  };

  const nextHandleMonth = () => {
    const nextDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    setCurrentDate(nextDate);
    navigate(`/calendar/month/${format(nextDate, 'MMMM').toLowerCase()}`);
  };

  const nextHandleDay = () => {
    const nextDate = addDays(currentDate, 1);
    setCurrentDate(nextDate);
    navigate(`/calendar/day/${format(nextDate, 'yyyy-MM-dd')}`);
  };
  const prevHandler = () => {
    type === 'month' ? prevHandleMonth() : prevHandleDay();
  };
  const nextHandler = () => {
    type === 'month' ? nextHandleMonth() : nextHandleDay();
  };
  const onClickDay = day => {
    setCurrentDate(day);
    navigate(`/calendar/day/${format(day, 'yyyy-MM-dd')}`);
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
              onClick={() => onClickDay(day)}
            />
          );
        })}
      </SC.DaysOfWeekWrapper>
      {type === 'month' && <CalendarTable currentDate={currentDate} />}
      {type === 'day' && <ComponentChooseDay />}
    </>
  );
};

CalendarToolbar.propTypes = {
  type: PropTypes.string,
};
