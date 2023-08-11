import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ErrorImagesContainer,
  Heading,
  Button,
  StyledErrorImage,
} from './NotFound.styled';

const NotFound = ({ history }) => {
  const handleBackToHome = () => {
    history.push('/');
  };

  const isMobile = window.innerWidth <= 375;

  return (
    <Container>
      <ErrorImagesContainer>
        <div>4 4</div>
        {isMobile ? (
          <StyledErrorImage
            src="/images/mobile-svg-image.svg"
            alt="404 Error"
          />
        ) : (
          <StyledErrorImage src="/images/Gus" alt="404 Error" />
        )}
      </ErrorImagesContainer>
      <Heading>
        We're sorry, the page you requested could not be found. Please go back
        to the homepage.
      </Heading>
      <Button onClick={handleBackToHome}>Back to Home</Button>
    </Container>
  );
};

NotFound.propTypes = {
  history: PropTypes.object.isRequired,
};

export default NotFound;
