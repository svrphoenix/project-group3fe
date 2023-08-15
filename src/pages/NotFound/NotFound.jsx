import React from 'react';
import { ReactComponent as Gus } from 'images/404NotFound/Gus_svg.svg';
import Gusbig from 'images/404NotFound/Gus.jpg';
import {
  Container,
  ErrorImagesContainer,
  Heading,
  Button,
  // StyledErrorImage,
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
        <Errortext> 4</Errortext>
        {isMobile ? (
          <div styled={{ width: '24px', height: '24px' }}>
            <Gus />
          </div>
        ) : (
          <div styled={{ width: '24px', height: '24px' }}>
            <Gus />
          </div>
        )}

        <Errortext> 4</Errortext>
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
