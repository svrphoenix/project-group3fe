import React, { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';

export const TaskModal = ({ status, ...props }) => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const openModal = () => {
    setIsTaskModalOpen(true);
  };

  const closeModal = () => {
    setIsTaskModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>+ Add task</button>
      {isTaskModalOpen && (
        <Modal onToggleModal={closeModal}>
          <TaskForm closeModal={closeModal} {...props} />
        </Modal>
      )}
    </>
  );
};
