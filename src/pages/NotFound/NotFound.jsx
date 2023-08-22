import {
  Container,
  Heading,
  Button,
  ErrorImage,
  Images,
  ForthLeft,
  ForthRight,
} from './NotFound.styled';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <ErrorImage>
        <ForthLeft>4</ForthLeft>
        <Images />
        <ForthRight>4</ForthRight>
      </ErrorImage>
      <Heading>
        We're sorry, the page you requested could not be found. Please go back
        to the homepage.
      </Heading>
      <Button onClick={handleBackToHome}>Back to Home</Button>
    </Container>
  );
};

export default NotFound;
