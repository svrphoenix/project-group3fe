import { Modal } from 'components/Modal/Modal';
import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { useTranslation } from 'react-i18next';
import useModalToggle from 'hooks/useModalToggle';
import * as SC from './FeedbackButton.styled';

export const FeedbackButton = () => {
  const { showModal, onToggleModal } = useModalToggle();
  const { t } = useTranslation();

  return (
    <>
      <SC.FeedbackButton type="button" onClick={onToggleModal}>
        {t('Feedback.Feedback')}
      </SC.FeedbackButton>
      {showModal && (
        <Modal onToggleModal={onToggleModal}>
          <FeedbackForm close={onToggleModal} />
        </Modal>
      )}
    </>
  );
};
