import useModalToggle from 'hooks/useModalToggle';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import * as SC from './TasksColumn.styled';
import TaskModal from '../TaskModal/TaskModal';

export const TasksColumn = ({ columnTasks, category }) => {
  const { showModal, onToggleModal } = useModalToggle();

  return (
    <>
      <SC.DaysTasksContainer>
        <ColumnHeadBar onToggleModal={onToggleModal} category={category} />
        <ColumnTasksList columnTasks={columnTasks} />
        <AddTaskBtn onToggleModal={onToggleModal} />
      </SC.DaysTasksContainer>
      <TaskModal
        showModal={showModal}
        onToggleModal={onToggleModal}
        category={category}
      />
    </>
  );
};
