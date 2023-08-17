import { format } from 'date-fns';
import * as SC from './DayCalendarHead.styled';
import PropTypes from 'prop-types';

export const DayCalendarHead = ({ width, day, isActive, onClick }) => {
  return (
    <SC.Day onClick={onClick} key={day}>
      {width > 768 ? format(day, 'EEE') : format(day, 'EEEEE')}
      <SC.DayNumber className={isActive ? 'current-date' : null}>
        {format(day, 'd')}
      </SC.DayNumber>
    </SC.Day>
  );
};

DayCalendarHead.propTypes = {
  width: PropTypes.number.isRequired,
  day: PropTypes.instanceOf(Date).isRequired,
  isActive: PropTypes.bool.isRequired,
};
