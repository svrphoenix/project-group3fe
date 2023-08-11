
import { RegisterForm } from 'components/registerForm/RegisterForm';
import PropTypes from 'prop-types';
import { StyledLayout } from './RegisterPage.styled';


const RegisterPage = () => {
  return (
    <StyledLayout>
      <RegisterForm/>
    </StyledLayout>
  );
};

// RegisterPage.propTypes = {};

export default RegisterPage;
