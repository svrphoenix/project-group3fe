import { useEffect, useState } from 'react';
import PeriodPaginator from './PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from './PeriodTypeSelect/PeriodTypeSelect';
import * as SC from './CalendarToolbar.styled';
import { format, addDays, parse } from 'date-fns';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getAllTasks } from 'redux/tasks/operations';

const CalendarToolbar = () => {
  const { currentDay } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialDate = currentDay
    ? parse(currentDay, 'yyyy-MM-dd', new Date())
    : new Date();

  const [currentDate, setCurrentDate] = useState(initialDate);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const formattedMonth = String(month + 1).padStart(2, '0');

  useEffect(() => {
    dispatch(getAllTasks({ year, month: formattedMonth }));
  }, [dispatch, year, formattedMonth]);

  const formatedDate = currentDay
    ? format(currentDate, 'dd MMMM yyyy')
    : format(currentDate, 'MMMM yyyy');

  const prevHandleMonth = () => {
    const prevDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
    setCurrentDate(prevDate);
    navigate(`/calendar/month/${format(prevDate, 'yyyy-MM')}`);
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
    navigate(`/calendar/month/${format(nextDate, 'yyyy-MM')}`);
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

export default CalendarToolbar;
