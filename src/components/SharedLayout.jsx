import useAuth from 'hooks/useAuth';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Loader } from './Loader/Loader';

export const SharedLayout = () => {
  const { isLoading } = useAuth();

  return isLoading ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};
