import axios from 'axios';
import { useState } from 'react';
import { ReactComponent as CloseIcon } from 'images/icons/x-close.svg';
import { ReactComponent as Pencil } from 'images/icons/pencil-01.svg';
import { ReactComponent as Trash } from 'images/icons/trash-2.svg';
import { StarRate } from './StarRate';
import * as SC from './FeedbackForm.style';

export const FeedbackForm = ({ review, close }) => {
  const [reviewText, setReviewText] = useState(review);
  const [readOnly, setReadOnly] = useState(!!reviewText);
  const [rate, setRate] = useState(0);

  const onSubmit = async e => {
    e.preventDefault();

    try {
      await axios.patch('/user', { review: reviewText, rate });
    } catch (error) {}
    close();
  };

  const onEditReview = () => {
    setReadOnly(false);
  };

  const deleteReview = async e => {
    setReviewText('');
    setRate(0);
    try {
      await onSubmit(e);
      close();
    } catch (error) {
      console.error('An error occurred while submitting the review:', error);
    }
  };

  return (
    <SC.Form onSubmit={onSubmit}>
      <SC.CloseBtn type="button" onClick={close} aria-label="Close modal">
        <CloseIcon />
      </SC.CloseBtn>
      <SC.Label>
        Raiting
        <StarRate isSelectable={!readOnly} rate={rate} setRate={setRate} />
      </SC.Label>
      <SC.Label htmlFor="reviewTextAreaId">
        {review && (
          <SC.EditBtnWrapper>
            <SC.EditBtn
              type="button"
              onClick={onEditReview}
              aria-label="Edit review"
            >
              <Pencil />
            </SC.EditBtn>
            <SC.DeleteBtn
              type="button"
              onClick={deleteReview}
              aria-label="Delete review"
            >
              <Trash />
            </SC.DeleteBtn>
          </SC.EditBtnWrapper>
        )}
        Review
        <SC.Textarea
          id="reviewTextAreaId"
          rows={6}
          cols={40}
          placeholder="Enter text"
          maxLength={300}
          readOnly={readOnly}
          value={reviewText}
          onChange={e => setReviewText(e.target.value)}
        />
      </SC.Label>
      {!readOnly && (
        <SC.ReviewBtnWrapper>
          <SC.MainReviewBtn type="submit" onSubmit={onSubmit}>
            {!review ? 'Save' : 'Edit'}
          </SC.MainReviewBtn>
          <SC.CancelReviewBtn type="button" onClick={close}>
            Cancel
          </SC.CancelReviewBtn>
        </SC.ReviewBtnWrapper>
      )}
    </SC.Form>
  );
};
