import { useNavigate, useLocation } from 'react-router';
import { Button, ButtonGroup } from './PeriodTypeSelect.styled';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const PeriodTypeSelect = () => {
  const location = useLocation();

  useEffect(() => {
    setSwitcher(location.pathname.split('/')[2]);
  }, [location.pathname]);

  const [switcher, setSwitcher] = useState('month');
  const navigate = useNavigate();

  const { t } = useTranslation();

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
        {t('CalendarToolbar.Month')}
      </Button>
      <Button
        className={switcher === 'day' ? 'active' : null}
        type="button"
        onClick={btnDayHandler}
      >
        {t('CalendarToolbar.Day')}
      </Button>
    </ButtonGroup>
  );
};

export default PeriodTypeSelect;
