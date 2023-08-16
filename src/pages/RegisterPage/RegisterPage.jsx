
import { AuthNavigate } from 'components/authNavigate/AuthNavigate';
import RegisterForm from 'components/registerLoginForm/RegisterForm';
import { StyledLayout, StyledSharedContainer } from './RegisterPage.styled';


const RegisterPage = () => {
  return (
    <StyledLayout>
      <StyledSharedContainer>
        <RegisterForm />
        <AuthNavigate path="/login" text="Log In"/>
      </StyledSharedContainer>
    </StyledLayout>
  );
};

export default RegisterPage;
