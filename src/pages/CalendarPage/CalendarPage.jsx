import { format } from 'date-fns';
import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

const navigateToChoosedMonth = navigate => {
  const formattedCurrentMonth = format(new Date(), 'MMMM').toLowerCase();
  navigate(`month/${formattedCurrentMonth}`);
};

const CalendarPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigateToChoosedMonth(navigate);
  }, []); // eslint-disable-line

  return (
    <>
      <Suspense fallback={<div>Loading ....</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CalendarPage;
