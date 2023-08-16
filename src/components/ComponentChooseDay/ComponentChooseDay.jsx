import { getDate, getMonth, getYear, parseISO } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as tasksOperations from 'redux/tasks/operations';
import { selectTasks } from 'redux/tasks/selectors';
import { useParams } from 'react-router-dom';
import useModalToggle from 'hooks/useModalToggle';
import { ReactComponent as PlusCircle } from 'images/icons/plus-circle.svg';
import { ReactComponent as Remove } from 'images/icons/arrow-circle-broken-right.svg';
import { ReactComponent as Pencil } from 'images/icons/pencil-task.svg';
import { ReactComponent as Trash } from 'images/icons/trash-task.svg';
import * as SC from './ComponentChooseDay.styled';
import { Modal } from 'components/Modal/Modal';

export const ComponentChooseDay = () => {
  const { showModal, onToggleModal } = useModalToggle();
  // const tasks = useSelector(selectTasks);
  const tasks = [
    {
      _id: 1,
      title: 'Choose DayChoose DayChoose DayChoose Day',
      priority: 'High',
    },
    { _id: 2, title: 'Choose Day2', priority: 'Medium' },
    { _id: 3, title: 'Choose Day3', priority: 'Low' },
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

  const removeTask = () => {
    console.log('removeTask');
  };
  const editTask = () => {
    console.log('editTask');
  };
  const deleteTask = () => {
    console.log('deleteTask');
  };

  return (
    <SC.DaystasksWrapper>
      <SC.DaysTasksContainer>
        <SC.TasksHeader>
          <SC.TasksTitle>To do</SC.TasksTitle>
          <SC.IconBtn onClick={onToggleModal} aria-label="add task">
            <PlusCircle />
          </SC.IconBtn>
        </SC.TasksHeader>
        <SC.TasksBox>
          {tasks.map(task => (
            <SC.TaskItem key={task._id}>
              <SC.TaskDescr>{task.title}</SC.TaskDescr>
              <SC.TaskInfo>
                <SC.AvatarWrapper>
                  <SC.Avatar />
                  <SC.Priority
                    style={{
                      background:
                        task.priority === 'High'
                          ? '#EA3D65'
                          : task.priority === 'Medium'
                          ? '#F3B249'
                          : task.priority === 'Low'
                          ? '#72C2F8'
                          : null,
                    }}
                  >
                    {task.priority}
                  </SC.Priority>
                </SC.AvatarWrapper>
                <SC.ControlPanel>
                  <SC.IconBtn onClick={removeTask} aria-label="remove task">
                    <Remove />
                  </SC.IconBtn>
                  <SC.IconBtn onClick={editTask} aria-label="edit task">
                    <Pencil />
                  </SC.IconBtn>
                  <SC.IconBtn onClick={deleteTask} aria-label="delete task">
                    <Trash />
                  </SC.IconBtn>
                </SC.ControlPanel>
              </SC.TaskInfo>
            </SC.TaskItem>
          ))}
        </SC.TasksBox>
        <SC.CreateTasksBtn onClick={onToggleModal}>Add task</SC.CreateTasksBtn>
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

      {showModal && <Modal onToggleModal={onToggleModal}></Modal>}
    </SC.DaystasksWrapper>
  );
};
