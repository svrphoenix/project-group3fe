import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ErrorImagesContainer = styled.div`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 200px;
  font-style: normal;
  font-weight: 700;
  line-height: 250px; /* 125% */
`;

export const ErrorImage = styled.img`
  width: 300px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
  }

  @media (max-width: 375px) {
  }
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 16px 48px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  background: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
`;
