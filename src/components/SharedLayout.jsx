import { Suspense } from 'react';
import { Outlet } from 'react-router';
// import { Toaster } from 'react-hot-toast';
import { Loader } from './Loader/Loader';

export const SharedLayout = () => {
  console.log('sharedlayout');
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </Suspense>
  );
};
