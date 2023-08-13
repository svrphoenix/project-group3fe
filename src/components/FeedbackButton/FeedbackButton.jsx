import axios from 'axios';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import * as SC from './FeedbackButton.style';

export const FeedbackButton = () => {
  const [showModal, setShowModal] = useState(false);
  let review = 'review';

  const onToggleModal = () => {
    setShowModal(!showModal);
    document.querySelector('body').classList.toggle('hidden');
  };

  const onFeedbackModal = async e => {
    e.preventDefault();

    onToggleModal();

    try {
      const { user } = await axios.get('/user');
      review = user.review;
    } catch (error) {}
  };

  return (
    <>
      <SC.FeedbackButton type="submit" onClick={onFeedbackModal}>
        Feedback
      </SC.FeedbackButton>
      {showModal && (
        <Modal onToggleModal={onToggleModal}>
          <FeedbackForm review={review} close={onToggleModal} />
        </Modal>
      )}
    </>
  );
};
