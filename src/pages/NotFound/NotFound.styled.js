import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 900px;
  background: #f7f6f9;

  @media (max-width: 768px) {
    width: 768px;
    height: 1024px;
  }

  @media (max-width: 375px) {
    width: 375px;
    height: 812px;
  }
`;

export const Heading = styled.h1`
  color: rgba(17, 17, 17, 0.7);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const Errortext = styled.div`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 200px;
  font-style: normal;
  font-weight: 700;
  line-height: 250px;

  @media (max-width: 768px) {
    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 200px;
    font-style: normal;
    font-weight: 700;
    line-height: 250px;
  }

  @media (max-width: 375px) {
    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: 150px;
  }
`;

export const StyledErrorImage = styled.img`
  width: 178px;
  height: 414px;
  transform: rotate(-31deg);
  flex-shrink: 0;

  @media (max-width: 768px);
   {
    width: 178px;
    height: 414px;
    transform: rotate(-31.558deg);
    flex-shrink: 0;
  }

  @media (max-width: 375px);
   {
    width: 81px;
    height: 188px;
    transform: rotate(-31deg);
    flex-shrink: 0;
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
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.36px;

  @media (max-width: 768px);
   {
    display: inline-flex;
    padding: 16px 48px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 16px;
    background: #3e85f3;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.36px;
  }

  @media (max-width: 375px);
   {
    display: inline-flex;
    padding: 14px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 16px;
    background: #3e85f3;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;

export const ErrorImagesContainer = styled.div``;

export const textimg = styled.div``;
