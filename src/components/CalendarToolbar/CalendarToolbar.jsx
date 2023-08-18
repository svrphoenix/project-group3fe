import { useState } from 'react';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import * as SC from './CalendarToolbar.styled';
import { format, addDays, parse } from 'date-fns';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router';

export const CalendarToolbar = ({ type = 'month' }) => {
  const params = useParams();
  const navigate = useNavigate();

  console.log(Boolean(params.currentDay));
  const initialDate = params.currentDay
    ? parse(params.currentDay, 'yyyy-MM-dd', new Date())
    : new Date();

  const [currentDate, setCurrentDate] = useState(initialDate);

  const formatedDate =
    type === 'month'
      ? format(currentDate, 'MMMM yyyy')
      : format(currentDate, 'dd MMMM yyyy');

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
