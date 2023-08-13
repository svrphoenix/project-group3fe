import { IMG } from 'images';
import * as SC from './Review.styled';
import { StarRating } from 'components/StarRating/StarRating';
import PropTypes from 'prop-types';

export const Review = ({
  avatar = IMG.defaultAvatar,
  rating,
  name,
  review,
}) => {
  return (
    <>
      <SC.ReviewWrapper>
        <SC.ReviewWrapperUser>
          <SC.ReviewAvatar src={avatar} alt={name} width="50" />
          <SC.ReviewWrapperGrade>
            <SC.ReviewUsername>{name}</SC.ReviewUsername>
            <StarRating rating={rating} readOnly />
          </SC.ReviewWrapperGrade>
        </SC.ReviewWrapperUser>
        <SC.ReviewText>{review}</SC.ReviewText>
      </SC.ReviewWrapper>
    </>
  );
};

Review.propTypes = {
  avatar: PropTypes.string,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};
