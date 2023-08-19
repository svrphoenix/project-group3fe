// import PropTypes from 'prop-types';
import { useState } from 'react';
import { PeriodPaginator } from 'components/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import { format, addDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';

import StatisticsChart from 'components/Statistics/StatisticsChart';
import * as SC from './StatisticsPage.styled';

const StatisticsPage = () => {
  const [_, setSearchParams] = useSearchParams();

  const initialDate = new Date();

  const [currentDate, setCurrentDate] = useState(initialDate);

  const formatedDate = format(currentDate, 'dd MMMM yyyy');

  const prevHandler = () => {
    const prevDate = addDays(currentDate, -1);
    setCurrentDate(prevDate);

    setSearchParams({
      month: prevDate.getMonth() + 1,
      day: prevDate.getDate(),
      year: prevDate.getFullYear(),
    });
  };

  const nextHandler = () => {
    const nextDate = addDays(currentDate, 1);
    setCurrentDate(nextDate);

    setSearchParams({
      month: nextDate.getMonth() + 1,
      day: nextDate.getDate(),
      year: nextDate.getFullYear(),
    });
  };

  return (
    <>
      <SC.StatisticsDiv>
        <SC.StatisticsHeaderDiv>
          <PeriodPaginator
            date={formatedDate}
            prevHandler={prevHandler}
            nextHandler={nextHandler}
          />

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
