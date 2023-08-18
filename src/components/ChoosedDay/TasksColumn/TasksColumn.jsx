import useModalToggle from 'hooks/useModalToggle';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { Modal } from 'components/Modal/Modal';
import * as SC from './TasksColumn.styled';
import { TaskModal } from '../TaskModal/TaskModal';

export const TasksColumn = ({ columnTitle, columnTasks }) => {
  const { showModal, onToggleModal } = useModalToggle();

  return (
    <>
      <SC.DaysTasksContainer>
        <ColumnHeadBar
          onToggleModal={onToggleModal}
          columnTitle={columnTitle}
        />
        <ColumnTasksList columnTasks={columnTasks} />
        <AddTaskBtn onToggleModal={onToggleModal} />
      </SC.DaysTasksContainer>

      {showModal && <Modal onToggleModal={onToggleModal}></Modal>}
    </>
  );
};
