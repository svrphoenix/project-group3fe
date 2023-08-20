import { IMG } from 'images';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import RegisterForm from 'components/RegisterLoginForm/RegisterForm';
import * as SC from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <SC.StyledLayout>
      <SC.StyledSharedContainer>
        <RegisterForm />
        <AuthNavigate path="/login" text="Log In" />
      </SC.StyledSharedContainer>
      <SC.StyledPicture>
        <source
          srcSet={`${IMG.registerx1} 1x, ${IMG.registerx2} 2x`}
          type="image/jpg"
          media="(min-width: 1440px)"
        />
        <SC.StyledImg
          srcSet={`${IMG.registerx1} 1x, ${IMG.registerx2} 2x`}
          alt="Quickly register and familiarize yourseld with the application!"
        />
      </SC.StyledPicture>
    </SC.StyledLayout>
  );
};

export default RegisterPage;
