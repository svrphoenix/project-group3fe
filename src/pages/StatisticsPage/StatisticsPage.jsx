// import PropTypes from 'prop-types';
import StatisticsChart from 'components/Statistics/StatisticsChart';
// import PeriodPaginator from 'components/PeriodPaginator/PeriodPaginator';
import * as SC from './StatisticsPage.styled';

const StatisticsPage = () => {
  return (
    <>
      <h1>Statistics</h1>

      <SC.StatisticsDiv>
        <SC.StatisticsHeaderDiv>
          {/* <PeriodPaginator /> */}

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
