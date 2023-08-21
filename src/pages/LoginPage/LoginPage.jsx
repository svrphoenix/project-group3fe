import { IMG } from 'images';
import { AuthNavigate } from 'components/temp/AuthNavigate';
import LoginForm from 'components/temp1/LoginForm';
import * as SC from './LoginPage.styled';

const LoginPage = () => {
  return (
    <SC.StyledLayout>
      <SC.StyledSharedContainer>
        <LoginForm />
        <AuthNavigate path="/register" text="Sign Up" />
      </SC.StyledSharedContainer>
      <SC.StyledPicture>
        <source
          srcSet={`${IMG.loginx1} 1x, ${IMG.loginx2} 2x`}
          type="image/jpg"
          media="(min-width: 1440px)"
        />
        <SC.StyledImg
          srcSet={`${IMG.loginx1} 1x, ${IMG.loginx2} 2x`}
          alt="Quickly come in and write down your tasks for the day!"
        />
      </SC.StyledPicture>
    </SC.StyledLayout>
  );
};

export default LoginPage;
