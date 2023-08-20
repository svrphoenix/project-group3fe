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
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTasks } from 'redux/tasks/operations';
import { useSearchParams } from 'react-router-dom';
import * as SC from './StatisticsChart.styled';

const StatisticsChart = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [monthTasks, setMonthTasks] = useState([]);

  const day = searchParams.get('day');
  const month = searchParams.get('month');
  const formattedMonth = String(month).padStart(2, '0');
  const year = searchParams.get('year');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!month) {
      return;
    }

    dispatch(getAllTasks({ month: formattedMonth, year })).then(res =>
      setMonthTasks(res.payload)
    );
  }, [day]);

  const [toDoByMonth, setToDoByMonth] = useState();
  const [inProgressByMonth, setInProgressByMonth] = useState();
  const [doneByMonth, setDoneByMonth] = useState();

  const [toDoByDay, setToDoByDay] = useState();
  const [inProgressByDay, setInProgressByDay] = useState();
  const [doneByDay, setDoneByDay] = useState();

  useEffect(() => {
    // month
    setToDoByMonth(monthTasks.filter(task => task.category === 'to-do').length);

    setInProgressByMonth(
      monthTasks.filter(task => task.category === 'in-progress').length
    );

    setDoneByMonth(monthTasks.filter(task => task.category === 'done').length);

    // day
    setToDoByDay(
      monthTasks.filter(
        task => task.category === 'to-do' && task.date.split('-')[2] === day
      ).length
    );

    setInProgressByDay(
      monthTasks.filter(
        task =>
          task.category === 'in-progress' && task.date.split('-')[2] === day
      ).length
    );

    setDoneByDay(
      monthTasks.filter(
        task => task.category === 'done' && task.date.split('-')[2] === day
      ).length
    );
  }, [dispatch, day, monthTasks]);

  const data = [
    {
      name: 'To Do',
      ByMonth: toDoByMonth,
      ByDay: toDoByDay,
    },
    {
      name: 'In Progress',
      ByMonth: inProgressByMonth,
      ByDay: inProgressByDay,
    },
    {
      name: 'Done',
      ByMonth: doneByMonth,
      ByDay: doneByDay,
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

  useEffect(() => {
    renderLabelDay();
    renderLabelMonth();
  }, [data]);

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
