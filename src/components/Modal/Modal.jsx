import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as SC from './Modal.styled';

export const Modal = ({ children, onToggleModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onToggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onToggleModal]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onToggleModal();
    }
  };

  return createPortal(
    <SC.ModalBackdrop onClick={onBackdropClick}>
      <SC.ModalContent>
        <SC.StyledCloseIcon
          color="var(--first-Text-Color)"
          hoverColor="var(--fourth-Bckg-Color)"
          size={24}
          onClick={onToggleModal}
        />
        {children}
      </SC.ModalContent>
    </SC.ModalBackdrop>,
    document.querySelector('#modal-root')
  );
};
