// import PropTypes from 'prop-types';
import StatisticsChart from 'components/Statistics/StatisticsChart';
// import { PeriodPaginator } from 'components/Calendar/PeriodPaginator/PeriodPaginator';
import * as SC from './StatisticsPage.styled';

import { useState } from 'react';
import { PeriodPaginator } from 'components/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import { format, addDays, parse } from 'date-fns';
import { useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const StatisticsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentDay = searchParams.get('day');
  const currentMonth = searchParams.get('month');

  // const initialDate = currentDay
  //   ? parse(currentDay, 'yyyy-MM-dd', new Date())
  //   : new Date();

  // const [currentDate, setCurrentDate] = useState(initialDate);

  // const formatedDate = currentDay
  //   ? format(currentDate, 'dd MMMM yyyy')
  //   : format(currentDate, 'MMMM yyyy');

  // const prevHandler = () => {
  //   const prevDate = addDays(currentDate, -1);
  //   setCurrentDate(prevDate);
  //   navigate(`/statistics/day/${format(prevDate, 'yyyy-MM-dd')}`);
  // };

  // const nextHandler = () => {
  //   const nextDate = addDays(currentDate, 1);
  //   setCurrentDate(nextDate);
  //   navigate(`/statistics/day/${format(nextDate, 'yyyy-MM-dd')}`);
  // };

  return (
    <>
      <SC.StatisticsDiv>
        <SC.StatisticsHeaderDiv>
          {/* <PeriodPaginator
            date={formatedDate}
            prevHandler={prevHandler}
            nextHandler={nextHandler}
          /> */}

          <SC.ChartLegend>
            <SC.ChartLegendItem>By day</SC.ChartLegendItem>
            <SC.ChartLegendItem>By Month</SC.ChartLegendItem>
          </SC.ChartLegend>
        </SC.StatisticsHeaderDiv>

        <StatisticsChart />
      </SC.StatisticsDiv>
    </>
  );
};

// StatisticsPage.propTypes = {};

export default StatisticsPage;
