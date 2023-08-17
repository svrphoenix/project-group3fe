import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  //   Legend,
  LabelList,
} from 'recharts';

import * as SC from './StatisticsChart.styled';

const data = [
  {
    name: 'To Do',
    ByMonth: 40,
    ByDay: 24,
  },
  {
    name: 'In Progress',
    ByMonth: 30,
    ByDay: 13,
  },
  {
    name: 'Done',
    ByMonth: 20,
    ByDay: 95,
  },
];

const renderLabelDay = () => {
  const allByDay = data.reduce((acc, value) => acc + value.ByDay, 0);

  data.map(value => {
    value.procentDay = `${parseInt((value.ByDay / allByDay) * 100)}%`;
  });
};

const renderLabelMonth = () => {
  const allByMonth = data.reduce((acc, value) => acc + value.ByMonth, 0);

  data.map(value => {
    value.procentMonth = `${parseInt((value.ByMonth / allByMonth) * 100)}%`;
  });
};

const StatisticsChart = () => {
  renderLabelDay();
  renderLabelMonth();

  return (
    <>
      <SC.chartDiv>
        <BarChart
          width={760}
          height={440}
          data={data}
          margin={{
            top: 40,
            right: 0,
            left: 0,
            bottom: 19,
          }}
          fontSize={14}
          fill={343434}
          barGap={14}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis dataKey="name" />
          <YAxis
            label={{
              value: 'Tasks',
              position: 'top',
              dy: -24,
              fontSize: 14,
              fill: '#343434',
            }}
          />
          <Tooltip />
          {/* <Legend
            align="right"
            verticalAlign="top"
            iconSize="8"
            iconType="circle"
          /> */}
          <Bar dataKey="ByDay" fill="#FFD2DD" barSize={27} fontSize={16}>
            <LabelList dataKey="procentDay" position="top" />
          </Bar>
          <Bar dataKey="ByMonth" fill="#3E85F3" barSize={27} fontSize={16}>
            <LabelList dataKey="procentMonth" position="top" />
          </Bar>
        </BarChart>
      </SC.chartDiv>
    </>
  );
};

export default StatisticsChart;
