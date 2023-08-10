import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <div>
        MainPage
        <div style={{ paddingTop: 20, display: 'flex', gap: 10 }}>
          <NavLink to="/login">toLogin</NavLink>
          <NavLink to="/register">toRegister</NavLink>
        </div>
      </div>
    </>
  );
};

MainPage.propTypes = {};

export default MainPage;
