import CalendarToolbar from 'components/CalendarToolbar/CalendarToolbar';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

const CalendarPage = () => {
  return (
    <>
      <CalendarToolbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CalendarPage;
