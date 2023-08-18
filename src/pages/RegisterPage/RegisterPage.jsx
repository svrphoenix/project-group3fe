import { IMG } from 'images';
import { AuthNavigate } from 'components/authNavigate/AuthNavigate';
import RegisterForm from 'components/registerLoginForm/RegisterForm';
import { StyledImg, StyledLayout, StyledPicture, StyledSharedContainer } from './RegisterPage.styled';


const RegisterPage = () => {
  return (
    <StyledLayout>
      <StyledSharedContainer>
        <RegisterForm />
        <AuthNavigate path="/login" text="Log In"/>
      </StyledSharedContainer>
      <StyledPicture>
        <source
          srcSet={`${IMG.registerx1} 1x, ${IMG.registerx2} 2x`}
          type="image/jpg"
          media="(min-width: 1440px)"
        />
        <StyledImg
          srcSet={`${IMG.registerx1} 1x, ${IMG.registerx2} 2x`}
          alt="Quickly register and familiarize yourseld with the application!"
        />
      </StyledPicture>
      
    </StyledLayout>
  );
};

export default RegisterPage;
