import { useState } from 'react';

export const FeedbackForm = ({ review }) => {
  const [reviewText, setReviewText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <button className="closeBtn" type="button"></button>
      <div className="starRate"></div>
      <div className="">
        {review && (
          <>
            <button type="button"></button>
            <button type="submit"></button>
          </>
        )}
        <label htmlFor="reviewTextAreaId">
          Review
          <textarea
            id="reviewTextAreaId"
            rows={4}
            cols={40}
            readOnly={false}
            value={review || reviewText}
            onChange={e => setReviewText(e.target.value)}
          />
        </label>
        {!review && (
          <>
            <button type="submit" onSubmit={reviewText}>
              Save
            </button>
            <button type="button">Cancel</button>
          </>
        )}
      </div>
    </form>
  );
};
