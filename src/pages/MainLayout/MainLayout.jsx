import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { logout } from 'redux/auth/operations';

const MainLayout = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        MainLayout
        <div style={{ paddingTop: 20, display: 'flex', gap: 10 }}>
          <button type="button" onClick={() => dispatch(logout())}>
            Logout
          </button>
        </div>
        <Suspense fallback={<div>LOADING....</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
