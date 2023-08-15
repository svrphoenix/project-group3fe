import { Button, ButtonGroup } from './PeriodTypeSelect.styled';
import PropTypes from 'prop-types';

export const PeriodTypeSelect = ({ type }) => {
  const BtnDayHandler = () => {
    console.log('Click day button');
  };
  const BtnMonthHandler = () => {
    console.log('Click month button');
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
