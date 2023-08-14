import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectUser } from 'redux/review/selectors';
import * as reviewOperations from 'redux/review/operations';
import { useState } from 'react';
import { ReactComponent as CloseIcon } from 'images/icons/x-close.svg';
import { ReactComponent as Pencil } from 'images/icons/pencil-01.svg';
import { ReactComponent as Trash } from 'images/icons/trash-2.svg';
import { StarRating } from './StarRating';
import * as SC from './FeedbackForm.style';

export const FeedbackForm = ({ close }) => {
  const currentUser = useSelector(selectUser);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const [reviewText, setReviewText] = useState(currentUser.comment);
  const [readOnly, setReadOnly] = useState(!!currentUser.comment);
  const [rating, setRating] = useState(currentUser.rating);

  const postFeedback = e => {
    e.preventDefault();

    dispatch(
      reviewOperations.postReview({
        comment: reviewText,
        rating,
      })
    );
    close();
  };

  const updateFeedback = e => {
    e.preventDefault();

    dispatch(
      reviewOperations.updateReview({
        id: currentUser.id,
        comment: reviewText,
        rating,
      })
    );
    close();
  };

  const onDeleteReview = e => {
    e.preventDefault();
    dispatch(reviewOperations.deleteReview(currentUser.id));
    close();
  };

  return (
    <>
      {!error ? (
        <SC.Form>
          <SC.CloseBtn type="button" onClick={close} aria-label="Close modal">
            <CloseIcon />
          </SC.CloseBtn>
          <SC.Label>
            Raiting
            <StarRating
              isSelectable={!readOnly}
              rating={rating}
              setRating={setRating}
            />
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
              {!currentUser.comment ? (
                <SC.MainReviewBtn type="submit" onClick={postFeedback}>
                  Save
                </SC.MainReviewBtn>
              ) : (
                <SC.MainReviewBtn type="submit" onClick={updateFeedback}>
                  Edit
                </SC.MainReviewBtn>
              )}
              <SC.CancelReviewBtn type="button" onClick={close}>
                Cancel
              </SC.CancelReviewBtn>
            </SC.ReviewBtnWrapper>
          )}
        </SC.Form>
      ) : (
        <h1>{error}</h1>
      )}
    </>
  );
};
