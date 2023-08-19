import PropTypes from 'prop-types';
import { CircleBadgeContainer, CircleBadgeText } from './CircleBadge.styled';

const CircleBadge = ({ text, color = 'blue' }) => {
  return (
    <CircleBadgeContainer color={color}>
      <CircleBadgeText>{text}</CircleBadgeText>
    </CircleBadgeContainer>
  );
};

CircleBadge.propTypes = {
  text: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default CircleBadge;
