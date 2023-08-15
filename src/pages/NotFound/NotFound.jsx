import React from 'react';
import {
  Container,
  ErrorImagesContainer,
  Heading,
  Button,
  StyledErrorImage,
  Errortext,
} from './NotFound.styled';

const NotFound = () => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const isMobile = window.innerWidth <= 375;

  return (
    <Container>
      <ErrorImagesContainer>
        <textImgError>
          <Errortext> 4</Errortext>
          {isMobile ? (
            <StyledErrorImage
              src="../../../images/404NotFound/Gus-svg.svg"
              alt="404 Error"
            />
          ) : (
            <StyledErrorImage
              src="../../../images/404NotFound/Gus.jpg"
              alt="404 Error"
            />
          )}
          <Errortext> 4</Errortext>
        </textImgError>
      </ErrorImagesContainer>
      <Heading>
        We're sorry, the page you requested could not be found. Please go back
        to the homepage.
      </Heading>
      <Button onClick={handleBackToHome}>Back to Home</Button>
    </Container>
  );
};

export default NotFound;
