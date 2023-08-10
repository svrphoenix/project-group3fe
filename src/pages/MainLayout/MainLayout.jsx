import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
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
      </div>
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
