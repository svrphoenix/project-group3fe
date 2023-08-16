import { useState } from 'react';

const useModalToggle = () => {
  const [showModal, setShowModal] = useState(false);

  const onToggleModal = () => {
    setShowModal(!showModal);
    document.querySelector('body').classList.toggle('hidden');
  };

  return { showModal, onToggleModal };
};

export default useModalToggle;
