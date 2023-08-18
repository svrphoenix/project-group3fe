import { useNavigate } from 'react-router';
import { Button, ButtonGroup } from './PeriodTypeSelect.styled';
import { format } from 'date-fns';
import { useState } from 'react';

export const PeriodTypeSelect = () => {
  const [switcher, setSwitcher] = useState('month');
  const navigate = useNavigate();

  const btnHandler = e => {
    const newSwitcher = e.target.getAttribute('data-type');
    setSwitcher(newSwitcher);
    const formattedCurrentDay =
      newSwitcher === 'day'
        ? format(new Date(), 'yyyy-MM-dd')
        : format(new Date(), 'MMMM').toLowerCase();

    navigate(`/calendar/${newSwitcher}/${formattedCurrentDay}`);
  };

  return (
    <ButtonGroup>
      <Button
        className={switcher === 'month' ? 'active' : null}
        type="button"
        onClick={btnHandler}
        // disabled={switcher === 'month' ? 'disabled' : null}
        data-type="month"
      >
        Month
      </Button>
      <Button
        className={switcher === 'day' ? 'active' : null}
        type="button"
        onClick={btnHandler}
        // disabled={switcher === 'day' ? 'disabled' : null}
        data-type="day"
      >
        Day
      </Button>
    </ButtonGroup>
  );
};
