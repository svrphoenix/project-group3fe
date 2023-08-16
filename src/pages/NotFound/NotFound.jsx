import React from 'react';
import { ReactComponent as Gus } from 'images/404NotFound/Gus_svg.svg';
import GusBig from '../../images/404NotFound/Group_1966.png';
import {
  Container,
  ErrorImagesContainer,
  Heading,
  Button,
  ErrortextLeft,
  ImgMob,
  Images,
  ErrortextRight,
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
      <ErrorImagesContainer
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '30px',
        }}
      >
        <ErrortextLeft> 4</ErrortextLeft>
        {isMobile ? (
          <ImgMob>
            <Gus
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </ImgMob>
        ) : (
          <Images>
            <img
              alt="NotFound"
              src={GusBig}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </Images>
        )}

        <ErrortextRight> 4</ErrortextRight>
      </ErrorImagesContainer>
      <Heading width={'281px'} height={'54px'}>
        We're sorry, the page you requested could not be found. Please go back
        to the homepage.
      </Heading>
      <Button onClick={handleBackToHome}>Back to Home</Button>
    </Container>
  );
};

// NotFound.propTypes = {};

export default NotFound;
