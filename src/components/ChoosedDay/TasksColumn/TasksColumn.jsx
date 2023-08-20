import useModalToggle from 'hooks/useModalToggle';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import * as SC from './TasksColumn.styled';

export const TasksColumn = ({ columnTitle, columnTasks }) => {
  const { showModal, onToggleModal } = useModalToggle();

  return (
    <>
      <SC.DaysTasksContainer>
        <ColumnHeadBar
          onToggleModal={onToggleModal}
          columnTitle={columnTitle}
        />
        <ColumnTasksList
          showModal={showModal}
          onToggleModal={onToggleModal}
          columnTasks={columnTasks}
          columnTitle={columnTitle.toLowerCase()}
        />
        <AddTaskBtn onToggleModal={onToggleModal} />
      </SC.DaysTasksContainer>
    </>
  );
};
