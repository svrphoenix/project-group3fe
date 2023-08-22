import { useNavigate, useLocation } from 'react-router';
import { Button, ButtonGroup } from './PeriodTypeSelect.styled';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

const PeriodTypeSelect = () => {
  const location = useLocation();

  useEffect(() => {
    setSwitcher(location.pathname.split('/')[2]);
  }, [location.pathname]);

  const [switcher, setSwitcher] = useState('month');
  const navigate = useNavigate();

  const btnMonthHandler = () => {
    navigate(`/calendar/month/${format(new Date(), 'yyyy-MM')}`);
  };
  const btnDayHandler = () => {
    navigate(`/calendar/day/${format(new Date(), 'yyyy-MM-dd')}`);
  };

  return (
    <ButtonGroup>
      <Button
        className={switcher === 'month' ? 'active' : null}
        type="button"
        onClick={btnMonthHandler}
        disabled={switcher === 'month'}
      >
        Month
      </Button>
      <Button
        className={switcher === 'day' ? 'active' : null}
        type="button"
        onClick={btnDayHandler}
      >
        Day
      </Button>
    </ButtonGroup>
  );
};

export default PeriodTypeSelect;
