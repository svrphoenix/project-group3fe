import { useState } from 'react';
import { addDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { SVG } from 'images';

import StatisticsChart from 'components/Statistics/StatisticsChart';
import * as SC from './StatisticsPage.styled';

const StatisticsPage = () => {
  /* eslint-disable no-unused-vars */
  const [searchParams, setSearchParams] = useSearchParams();
  /* eslint-enable no-unused-vars */
  const initialDate = new Date();

  const [currentDate, setCurrentDate] = useState(initialDate);

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
          <SC.PeriodPaginatorWrapper>
            <SC.CustomDatePickerWidth>
              <SC.StyledDatePicker
                selected={currentDate}
                onChange={date => {
                  setCurrentDate(date);
                  setSearchParams({
                    month: date.getMonth() + 1,
                    day: date.getDate(),
                    year: date.getFullYear(),
                  });
                }}
                dateFormat="dd MMMM yyyy"
              />
            </SC.CustomDatePickerWidth>

            <SC.ButtonGroup>
              <SC.Button onClick={prevHandler}>
                <SVG.LeftChevron />
              </SC.Button>
              <SC.Button onClick={nextHandler}>
                <SVG.RightChevron />
              </SC.Button>
            </SC.ButtonGroup>
          </SC.PeriodPaginatorWrapper>

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

export default StatisticsPage;
