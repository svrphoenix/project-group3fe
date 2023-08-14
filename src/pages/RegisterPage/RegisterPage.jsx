
import { AuthNavigate } from 'components/authNavigate/AuthNavigate';
import RegisterForm from 'components/registerLoginForm/RegisterForm';
import { StyledLayout } from './RegisterPage.styled';


const RegisterPage = () => {
  return (
    <StyledLayout>
      <RegisterForm />
      <AuthNavigate path="/login" text="Log In"/>
    </StyledLayout>
  );
};

export default RegisterPage;