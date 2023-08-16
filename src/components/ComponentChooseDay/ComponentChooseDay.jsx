import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as tasksOperations from 'redux/tasks/operations';
import { selectTasks } from 'redux/tasks/selectors';
import { useParams } from 'react-router-dom';
import { getDate, getMonth, getYear, parseISO } from 'date-fns';
import { ReactComponent as PlusCircle } from 'images/icons/plus-circle.svg';
import { ReactComponent as Remove } from 'images/icons/arrow-circle-broken-right.svg';
import { ReactComponent as Pencil } from 'images/icons/pencil-task.svg';
import { ReactComponent as Trash } from 'images/icons/trash-task.svg';
import * as SC from './ComponentChooseDay.styled';

export const ComponentChooseDay = () => {
  // const tasks = useSelector(selectTasks);
  const tasks = [
    { _id: 1, title: 'Choose Day', priority: 'important' },
    { _id: 2, title: 'Choose Day2', priority: 'medium' },
    { _id: 3, title: 'Choose Day3', priority: 'low' },
  ];

  const dispatch = useDispatch();
  const { currentDay } = useParams();

  const dateObject = parseISO(currentDay);
  const day = getDate(dateObject);
  const month = getMonth(dateObject);
  const year = getYear(dateObject);

  const formattedMonth = String(month + 1).padStart(2, '0');
  const formattedDay = String(day).padStart(2, '0');

  console.log(formattedMonth);
  console.log(formattedDay);
  //   useEffect(() => {
  //     dispatch(tasksOperations.getDayTasks());
  //   }, [dispatch]);

  return (
    <SC.DaystasksWrapper>
      <SC.DaysTasksContainer>
        <SC.TasksHeader>
          <SC.TasksTitle>To do</SC.TasksTitle>
          <PlusCircle />
        </SC.TasksHeader>
        <SC.TasksBox>
          {tasks.map(task => (
            <SC.TaskItem key={task._id}>
              <SC.TaskDescr>{task.title}</SC.TaskDescr>
              <SC.TaskInfo>
                <SC.Avatar />
                <SC.Priority
                  style={{
                    background:
                      task.priority === 'important'
                        ? 'red'
                        : task.priority === 'medium'
                        ? 'orange'
                        : task.priority === 'low'
                        ? 'gray'
                        : 'black',
                  }}
                >
                  {task.priority}
                </SC.Priority>
                <SC.ControlPanel>
                  <Remove />
                  <Pencil />
                  <Trash />
                </SC.ControlPanel>
              </SC.TaskInfo>
            </SC.TaskItem>
          ))}
        </SC.TasksBox>
        <SC.CreateTasksBtn>Add task</SC.CreateTasksBtn>
      </SC.DaysTasksContainer>
      <SC.DaysTasksContainer>
        <SC.TasksHeader>
          <SC.TasksTitle>In progress</SC.TasksTitle>
          <PlusCircle />
        </SC.TasksHeader>
        <SC.TasksBox>
          {tasks.map(task => (
            <SC.TaskItem key={task._id}>
              <SC.TaskDescr>{task.title}</SC.TaskDescr>
            </SC.TaskItem>
          ))}
        </SC.TasksBox>
        <SC.CreateTasksBtn>Add task</SC.CreateTasksBtn>
      </SC.DaysTasksContainer>
      <SC.DaysTasksContainer>
        <SC.TasksHeader>
          <SC.TasksTitle>Done</SC.TasksTitle>
          <PlusCircle />
        </SC.TasksHeader>
        <SC.TasksBox>
          {tasks.map(task => (
            <SC.TaskItem key={task._id}>
              <SC.TaskDescr>{task.title}</SC.TaskDescr>
            </SC.TaskItem>
          ))}
        </SC.TasksBox>
        <SC.CreateTasksBtn>Add task</SC.CreateTasksBtn>
      </SC.DaysTasksContainer>
    </SC.DaystasksWrapper>
  );
};
