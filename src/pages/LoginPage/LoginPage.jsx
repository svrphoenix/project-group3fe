import { IMG } from 'images';
import { AuthNavigate } from 'components/authNavigate/AuthNavigate';
import LoginForm from 'components/registerLoginForm/LoginForm';
import { StyledImg, StyledLayout, StyledPicture, StyledSharedContainer } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <StyledLayout>
      <StyledSharedContainer>
        <LoginForm />
        <AuthNavigate path="/register" text="Sign Up" />
      </StyledSharedContainer>
      <StyledPicture>
        <source
          srcSet={`${IMG.loginx1} 1x, ${IMG.loginx2} 2x`}
          type="image/jpg"
          media="(min-width: 1440px)"
        />
        <StyledImg
          srcSet={`${IMG.loginx1} 1x, ${IMG.loginx2} 2x`}
          alt="Quickly come in and write down your tasks for the day!"
        />
      </StyledPicture>
    </StyledLayout>
  );
};

export default LoginPage;
