import axios from 'axios';
import { useState } from 'react';
import { FeedbackForm } from 'components/Modal/FeedbackForm/FeedbackForm';
import { Modal } from 'components/Modal/Modal';

export const FeedbackButton = () => {
  const [showModal, setShowModal] = useState(false);
  let review = '';

  const onFeedbackModal = async () => {
    setShowModal(!showModal);
    try {
      const { user } = await axios.get('/user');
      review = user.review;
    } catch (error) {}
  };

  return (
    <>
      <button type="submit" onClick={onFeedbackModal}>
        Feedback
      </button>
      {showModal && (
        <Modal>
          <FeedbackForm review={review} />
        </Modal>
      )}
    </>
  );
};
