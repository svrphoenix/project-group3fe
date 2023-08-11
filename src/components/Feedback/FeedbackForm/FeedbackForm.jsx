import { useState } from 'react';

export const FeedbackForm = props => {
  const [reviewText, setReviewText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <button className="closeBtn" type="button"></button>
      <div className="starRate"></div>
      <div className="">
        <button type="button"></button>
        <button type="submit"></button>
        <label htmlFor="reviewTextAreaId">
          Review
          <textarea
            id="reviewTextAreaId"
            name="reviewContent"
            rows={4}
            cols={40}
            readOnly={false}
            value={reviewText}
            onChange={e => setReviewText(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Save</button>
          <button type="button">Cancel</button>
        </div>
      </div>
    </form>
  );
};
