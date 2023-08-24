import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Loader } from './Loader/Loader';

export const SharedLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};
