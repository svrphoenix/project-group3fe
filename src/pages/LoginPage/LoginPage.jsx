import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        Login
        <button type="button" onClick={() => dispatch(login())}>
          Login user
        </button>
      </div>
    </>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
