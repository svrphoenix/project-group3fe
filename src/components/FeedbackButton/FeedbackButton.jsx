import { Modal } from 'components/Modal/Modal';
import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import useModalToggle from 'hooks/useModalToggle';
import * as SC from './FeedbackButton.style';

export const FeedbackButton = () => {
  const { showModal, onToggleModal } = useModalToggle();

  return (
    <>
      <SC.FeedbackButton type="button" onClick={onToggleModal}>
        Feedback
      </SC.FeedbackButton>
      {showModal && (
        <Modal onToggleModal={onToggleModal}>
          <FeedbackForm close={onToggleModal} />
        </Modal>
      )}
    </>
  );
};
