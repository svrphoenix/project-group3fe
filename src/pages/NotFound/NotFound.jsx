import React from 'react';
import { ReactComponent as Gus } from 'images/404NotFound/Gus_svg.svg';
import {
  Container,
  ErrorImagesContainer,
  Heading,
  Button,
  Errortext,
  ImgMob,
  Images,
} from './NotFound.styled';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  const isMobile = window.innerWidth <= 375;

  return (
    <Container>
      <ErrorImagesContainer>
        <Errortext> 4</Errortext>
        {isMobile ? (
          <ImgMob>
            <Gus
              style={{ width: '81px', height: '188px' }}
              viewBox="0 0 81 188"
            />
          </ImgMob>
        ) : (
          <Images>
            <Gus
              style={{ width: '178px', height: '414px' }}
              viewBox="0 0 178 414"
            />
          </Images>
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
