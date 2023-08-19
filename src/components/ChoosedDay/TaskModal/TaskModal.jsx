import React, { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { TaskForm } from '../TaskForm/TaskForm';
import { StyledAddIcon, TaskBtn } from './TaskModal.styled'; 

const TaskModal = ({ status, ...props }) => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const openModal = () => {
    setIsTaskModalOpen(true);
  };

  const closeModal = () => {
    setIsTaskModalOpen(false);
  };

  return (
    <>
      <TaskBtn onClick={openModal}>
        <StyledAddIcon color="#000" size={14} />
        Add task
      </TaskBtn>
      {isTaskModalOpen && (
        <Modal onToggleModal={closeModal}>
          <TaskForm onCloseModal={closeModal} {...props} />
        </Modal>
      )}
    </>
  );
};

export { TaskModal };
