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
    ByDay: 65,
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
      <BarChart
        width={800}
        height={440}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend
            align="right"
            verticalAlign="top"
            iconSize="8"
            iconType="circle"
          /> */}
        <Bar dataKey="ByDay" fill="#FFD2DD" barSize={27}>
          <LabelList dataKey="procentDay" position="top" />
        </Bar>
        <Bar dataKey="ByMonth" fill="#3E85F3" barSize={27}>
          <LabelList dataKey="procentMonth" position="top" />
        </Bar>
      </BarChart>
    </>
  );
};

export default StatisticsChart;
