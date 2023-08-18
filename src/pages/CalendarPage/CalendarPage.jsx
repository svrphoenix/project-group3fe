import { Loader } from 'components/Loader/Loader';
import { format } from 'date-fns';
import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

const CalendarPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/calendar/month/${format(new Date(), 'MM-yyyy').toLowerCase()}`);
  }, [navigate]);

  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

export default CalendarPage;
