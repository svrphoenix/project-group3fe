import useAuth from 'hooks/useAuth';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

export const SharedLayout = () => {
  const { isLoading } = useAuth();

  return isLoading ? (
    <div>Loading shared</div>
  ) : (
    <Suspense fallback={<div>LOADING....</div>}>
      <Outlet />
    </Suspense>
  );
};
