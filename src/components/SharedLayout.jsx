import useAuth from 'hooks/useAuth';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

export const SharedLayout = () => {
  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <div>Loading</div>
  ) : (
    <Suspense fallback={<div>LOADING....</div>}>
      <Outlet />
    </Suspense>
  );
};
