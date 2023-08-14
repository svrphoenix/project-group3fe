import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useEffect, useState } from 'react';
import { ReactComponent as CloseIcon } from 'images/icons/x-close.svg';
import { ReactComponent as Pencil } from 'images/icons/pencil-01.svg';
import { ReactComponent as Trash } from 'images/icons/trash-2.svg';
import { StarRate } from './StarRate';
import * as SC from './FeedbackForm.style';

export const FeedbackForm = ({ close }) => {
  const currentUser = useSelector(selectUser);
  const [reviewText, setReviewText] = useState('');
  const [readOnly, setReadOnly] = useState(!!currentUser.review);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    if (currentUser.review) {
      setReviewText(currentUser.review);
    }
  }, [currentUser.review]);

  const postFeedback = async e => {
    e.preventDefault();
  };

  const onDeleteReview = async e => {
    setReviewText('');
    setRate(0);
    try {
      await postFeedback(e);
      close();
    } catch (error) {
      console.error('An error occurred while submitting the review:', error);
    }
  };

  return (
    <SC.Form onSubmit={postFeedback}>
      <SC.CloseBtn type="button" onClick={close} aria-label="Close modal">
        <CloseIcon />
      </SC.CloseBtn>
      <SC.Label>
        Raiting
        <StarRate isSelectable={!readOnly} rate={rate} setRate={setRate} />
      </SC.Label>
      <SC.Label htmlFor="reviewTextAreaId">
        {readOnly && (
          <SC.EditBtnWrapper>
            <SC.EditBtn
              type="button"
              onClick={() => setReadOnly(false)}
              aria-label="Edit review"
            >
              <Pencil />
            </SC.EditBtn>
            <SC.DeleteBtn
              type="button"
              onClick={onDeleteReview}
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
          <SC.MainReviewBtn type="submit" onSubmit={postFeedback}>
            {!currentUser.review ? 'Save' : 'Edit'}
          </SC.MainReviewBtn>
          <SC.CancelReviewBtn type="button" onClick={close}>
            Cancel
          </SC.CancelReviewBtn>
        </SC.ReviewBtnWrapper>
      )}
    </SC.Form>
  );
};
