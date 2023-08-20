import { Modal } from 'components/Modal/Modal';
import { TaskForm } from '../TaskForm/TaskForm';

const TaskModal = ({ showModal, onToggleModal, columnTitle, ...props }) => {
  return (
    <>
      {showModal && (
        <Modal onToggleModal={onToggleModal}>
          <TaskForm
            onCloseModal={onToggleModal}
            columnTitle={columnTitle}
            {...props}
          />
        </Modal>
      )}
    </>
  );
};

export { TaskModal };
