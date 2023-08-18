import useModalToggle from 'hooks/useModalToggle';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { Modal } from 'components/Modal/Modal';
import { ReactComponent as PlusCircle } from 'images/icons/plus-circle.svg';
import { ReactComponent as Remove } from 'images/icons/arrow-circle-broken-right.svg';
import { ReactComponent as Pencil } from 'images/icons/pencil-task.svg';
import { ReactComponent as Trash } from 'images/icons/trash-task.svg';
import * as SC from './TasksColumn.styled';

export const TasksColumn = ({ currentDay }) => {
  const { showModal, onToggleModal } = useModalToggle();
  const [category, setCategory] = useState(null);
  const tasks = useSelector(selectTasks);

  const onSetCategory = e => {
    setCategory(e.currentTarget.getAttribute('data-custom'));
  };

  const removeTask = () => {
    console.log('editTask');
  };

  const editTask = () => {
    console.log('editTask');
  };
  const deleteTask = () => {
    console.log('deleteTask');
  };

  return (
    <>
      <SC.DaysTasksContainer onClick={onSetCategory} data-custom="to-do">
        <SC.TasksHeader>
          <SC.TasksTitle>To do</SC.TasksTitle>
          <SC.IconBtn onClick={onToggleModal} aria-label="add task">
            <PlusCircle />
          </SC.IconBtn>
        </SC.TasksHeader>
        <SC.TasksBox>
          {tasks
            .filter(task => task.category === 'to-do')
            .map(task => (
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
      <SC.DaysTasksContainer onClick={onSetCategory} data-custom="in-progress">
        <SC.TasksHeader>
          <SC.TasksTitle>In progress</SC.TasksTitle>
          <SC.IconBtn onClick={onToggleModal} aria-label="add task">
            <PlusCircle />
          </SC.IconBtn>
        </SC.TasksHeader>
        <SC.TasksBox>
          {tasks
            .filter(task => task.category === 'in-progress')
            .map(task => (
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
      <SC.DaysTasksContainer onClick={onSetCategory} data-custom="done">
        <SC.TasksHeader>
          <SC.TasksTitle>Done</SC.TasksTitle>
          <SC.IconBtn onClick={onToggleModal} aria-label="add task">
            <PlusCircle />
          </SC.IconBtn>
        </SC.TasksHeader>
        <SC.TasksBox>
          {tasks
            .filter(task => task.category === 'done')
            .map(task => (
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
      {showModal && (
        <Modal
          category={category}
          date={currentDay}
          onToggleModal={onToggleModal}
        ></Modal>
      )}
    </>
  );
};
