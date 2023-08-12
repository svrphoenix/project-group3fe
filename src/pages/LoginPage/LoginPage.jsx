import { AuthNavigate } from 'components/authNavigate/AuthNavigate';
import LoginForm from 'components/registerLoginForm/LoginForm';
import { StyledLayout } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <StyledLayout>
      <LoginForm />
      <AuthNavigate path="/register" text="Sign Up"/>
    </StyledLayout>
      
  );
};

export default LoginPage;