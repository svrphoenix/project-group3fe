import axios from 'axios';
import { useState } from 'react';
import { ReactComponent as CloseIcon } from 'images/icons/x-close.svg';
import { ReactComponent as Pencil } from 'images/icons/pencil-01.svg';
import { ReactComponent as Trash } from 'images/icons/trash-2.svg';
import { StarRate } from './StarRate';
import * as SC from './FeedbackForm.style';

export const FeedbackForm = ({ review, close }) => {
  const [reviewText, setReviewText] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.patch('/user', { review });
    } catch (error) {}
    close();
  };

  return (
    <SC.Form onSubmit={onSubmit}>
      <SC.CloseBtn type="button" onClick={close} aria-label="Close modal">
        <CloseIcon />
      </SC.CloseBtn>
      <SC.Label>
        Raiting
        <StarRate />
      </SC.Label>
      <SC.Label htmlFor="reviewTextAreaId">
        {review && (
          <SC.EditBtnWrapper>
            <SC.EditBtn type="button" aria-label="Edit review">
              <Pencil />
            </SC.EditBtn>
            <SC.EditBtn type="submit" aria-label="Delete review">
              <Trash />
            </SC.EditBtn>
          </SC.EditBtnWrapper>
        )}
        Review
        <SC.Textarea
          id="reviewTextAreaId"
          rows={6}
          cols={40}
          placeholder="Enter text"
          readOnly={false}
          value={review || reviewText}
          onChange={e => setReviewText(e.target.value)}
        />
      </SC.Label>
      {!review && (
        <SC.ReviewBtnWrapper>
          <SC.ReviewBtn type="submit" onSubmit={onSubmit}>
            Save
          </SC.ReviewBtn>
          <SC.ReviewBtn type="button" onClick={close}>
            Cancel
          </SC.ReviewBtn>
        </SC.ReviewBtnWrapper>
      )}
    </SC.Form>
  );
};
