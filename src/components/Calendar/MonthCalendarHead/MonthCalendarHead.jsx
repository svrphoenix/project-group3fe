import { format } from 'date-fns';
import * as SC from './MonthCalendarHead.styled';
import PropTypes from 'prop-types';

export const MonthCalendarHead = ({ width, day }) => {
  return (
    <SC.Day>{width > 768 ? format(day, 'EEE') : format(day, 'EEEEE')}</SC.Day>
  );
};

MonthCalendarHead.propTypes = {
  width: PropTypes.number.isRequired,
  day: PropTypes.instanceOf(Date).isRequired,
};
