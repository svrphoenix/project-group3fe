
import { AuthNavigate } from 'components/authNavigate/AuthNavigate';
import { RegisterForm } from 'components/registerForm/RegisterForm';
import PropTypes from 'prop-types';
import { StyledLayout } from './RegisterPage.styled';


const RegisterPage = () => {
  return (
    <StyledLayout>
      <RegisterForm />
      <AuthNavigate path="/login" text="Log In"/>
    </StyledLayout>
  );
};

// RegisterPage.propTypes = {};

export default RegisterPage;
