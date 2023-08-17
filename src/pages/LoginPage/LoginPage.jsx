import { AuthNavigate } from 'components/authNavigate/AuthNavigate';
import LoginForm from 'components/registerLoginForm/LoginForm';
import { StyledLayout, StyledSharedContainer } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <StyledLayout>
      <StyledSharedContainer>
        <LoginForm />
        <AuthNavigate path="/register" text="Sign Up" />
      </StyledSharedContainer>
    </StyledLayout>
  );
};

export default LoginPage;
