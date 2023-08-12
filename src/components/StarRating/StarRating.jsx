import { SVG } from 'images';
import * as SC from './StarRating.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const StarRating = ({
  rating = 1,
  starLimit = 5,
  readOnly = false,
  size = 14,
}) => {
  const [ratingState, setRatingState] = useState(0);
  const [hover, setHover] = useState(0);

  const value = readOnly ? rating : ratingState;
  const widthStyle = (value / starLimit) * 100;

  const setRatingFn = inx => {
    if (readOnly) return;
    setRatingState(inx);
  };

  const setHoverFn = inx => {
    if (readOnly) return;
    setHover(inx);
  };

  return (
    <SC.StarRatingWrapper>
      {Array.from({ length: starLimit }).map((__, inx) => {
        inx += 1;
        return (
          <SC.Star
            key={inx + '-st'}
            className={inx <= ((rating && hover) || hover) ? 'on' : 'off'}
            onClick={() => setRatingFn(inx)}
            onMouseEnter={() => setHoverFn(inx)}
            onMouseLeave={() => setHoverFn(ratingState)}
            readOnly={readOnly}
          >
            <SVG.StarIcon width={size} height={size} />
          </SC.Star>
        );
      })}
      {readOnly ? (
        <SC.StarRatingColoredWrapper style={{ width: `${widthStyle}%` }}>
          {Array.from({ length: starLimit }).map((__, inx) => (
            <SC.ColoredStar key={inx + 'cst'}>
              <SVG.StarIcon width={size} height={size} />
            </SC.ColoredStar>
          ))}
        </SC.StarRatingColoredWrapper>
      ) : null}
    </SC.StarRatingWrapper>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number,
  starLimit: PropTypes.number,
  readOnly: PropTypes.bool,
  size: PropTypes.number,
};
