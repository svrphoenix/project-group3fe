import { SVG } from 'images';
import * as SC from './StarRating.styled';
import PropTypes from 'prop-types';

export const StarRating = ({ rating = 0, starLimit = 5 }) => {
  const widthStyle = (rating / starLimit) * 100;

  return (
    <SC.StarRatingWrapper>
      {Array.from({ length: starLimit }).map((__, inx) => (
        <SC.Star key={inx + '-st'}>
          <SVG.StarIcon />
        </SC.Star>
      ))}
      <SC.StarRatingColoredWrapper style={{ width: `${widthStyle}%` }}>
        {Array.from({ length: starLimit }).map((__, inx) => (
          <SC.ColoredStar key={inx + 'cst'}>
            <SVG.StarIcon />
          </SC.ColoredStar>
        ))}
      </SC.StarRatingColoredWrapper>
    </SC.StarRatingWrapper>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number,
  starLimit: PropTypes.number,
};
