import { useNavigate } from 'react-router';
import { Button, ButtonGroup } from './PeriodTypeSelect.styled';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

export const PeriodTypeSelect = ({ type }) => {
  const navigate = useNavigate();
  const formattedCurrentDay =
    type === 'month'
      ? format(new Date(), 'yyyy-MM-dd')
      : format(new Date(), 'MMMM').toLowerCase();

  const BtnDayHandler = () => {
    navigate(`/calendar/day/${formattedCurrentDay}`);
  };

  const BtnMonthHandler = () => {
    navigate(`/calendar/month/${formattedCurrentDay}`);
  };

  return (
    <ButtonGroup>
      <Button
        className={type === 'month' ? 'active' : null}
        type="button"
        onClick={BtnMonthHandler}
        disabled={type === 'month' ? 'disabled' : null}
      >
        Month
      </Button>
      <Button
        className={type === 'day' ? 'active' : null}
        type="button"
        onClick={BtnDayHandler}
        disabled={type === 'day' ? 'disabled' : null}
      >
        Day
      </Button>
    </ButtonGroup>
  );
};

PeriodTypeSelect.propTypes = {
  type: PropTypes.string.isRequired,
};
