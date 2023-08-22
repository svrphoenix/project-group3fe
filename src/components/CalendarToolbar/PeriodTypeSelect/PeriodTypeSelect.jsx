import { useNavigate } from 'react-router';
import { Button, ButtonGroup } from './PeriodTypeSelect.styled';
import { format } from 'date-fns';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PeriodTypeSelect = () => {
  const [switcher, setSwitcher] = useState('month');
  const navigate = useNavigate();

  const { t } = useTranslation();

  const btnHandler = e => {
    const newSwitcher = e.target.getAttribute('data-type');
    setSwitcher(newSwitcher);
    const formattedCurrentDay =
      newSwitcher === 'day'
        ? format(new Date(), 'yyyy-MM-dd')
        : format(new Date(), 'yyyy-MM').toLowerCase();

    navigate(`/calendar/${newSwitcher}/${formattedCurrentDay}`);
  };

  return (
    <ButtonGroup>
      <Button
        className={switcher === 'month' ? 'active' : null}
        type="button"
        onClick={btnHandler}
        data-type="month"
      >
        {t('CalendarToolbar.Month')}
      </Button>
      <Button
        className={switcher === 'day' ? 'active' : null}
        type="button"
        onClick={btnHandler}
        data-type="day"
      >
        {t('CalendarToolbar.Day')}
      </Button>
    </ButtonGroup>
  );
};

export default PeriodTypeSelect;
