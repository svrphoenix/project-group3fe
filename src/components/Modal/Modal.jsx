import { createPortal } from 'react-dom';

export const Modal = ({ Children }) => {
  return createPortal(
    <div className="modalBackdrop">
      <div className="modalContent">{Children}</div>
    </div>,
    document.querySelector('#popup-root')
  );
};
