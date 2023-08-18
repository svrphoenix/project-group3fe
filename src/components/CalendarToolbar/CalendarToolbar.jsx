import { useState } from 'react';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import * as SC from './CalendarToolbar.styled';
import { format, addDays, parse } from 'date-fns';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router';

export const CalendarToolbar = ({ type = 'month' }) => {
  const { currentDay } = useParams();
  const navigate = useNavigate();

  const initialDate = currentDay
    ? parse(currentDay, 'yyyy-MM-dd', new Date())
    : new Date();

  const [currentDate, setCurrentDate] = useState(initialDate);

  const formatedDate = currentDay
    ? format(currentDate, 'dd MMMM yyyy')
    : format(currentDate, 'MMMM yyyy');

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
    currentDay ? prevHandleDay() : prevHandleMonth();
  };
  const nextHandler = () => {
    currentDay ? nextHandleDay() : nextHandleMonth();
  };

  return (
    <>
      <SC.CalendarToolbarWrapper>
        <PeriodPaginator
          date={formatedDate}
          prevHandler={prevHandler}
          nextHandler={nextHandler}
        />
        <PeriodTypeSelect />
      </SC.CalendarToolbarWrapper>
    </>
  );
};

CalendarToolbar.propTypes = {
  type: PropTypes.string,
};
