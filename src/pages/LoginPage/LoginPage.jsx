// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from 'redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>Login</div>
      <NavLink
        to="/calendar"
        onClick={() =>
          dispatch(
            login({
              email: 'test2@i.ua',
              password: '123456Qw',
            })
          )
        }
      >
        Login user
      </NavLink>
    </>
  );
};

// LoginPage.propTypes = {};

export default LoginPage;
