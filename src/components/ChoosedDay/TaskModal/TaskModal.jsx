import { Modal } from 'components/Modal/Modal';
import { TaskForm } from '../TaskForm/TaskForm';

const TaskModal = ({ showModal, onToggleModal, ...props }) => {
  return (
    <>
      {showModal && (
        <Modal onToggleModal={onToggleModal}>
          <TaskForm onCloseModal={onToggleModal} {...props} />
        </Modal>
      )}
    </>
  );
};

export { TaskModal };
