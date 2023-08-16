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
  width: 387px;
  margin-top: 80px;

  @media (max-width: 768px) {
    color: rgba(17, 17, 17, 0.7);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }

  @media (max-width: 375px) {
    color: rgba(17, 17, 17, 0.7);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    width: 281px;
  }
`;

export const ErrortextLeft = styled.div`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 200px;
  font-style: normal;
  font-weight: 700;
  height: 250px;
  margin-right: 220px;

  @media (max-width: 768px) {
    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
    font-size: 200px;
    font-style: normal;
    font-weight: 700;
    height: 250px;
  }

  @media (max-width: 375px) {
    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: 150px;
    height: 150px;
    margin-right: 100px;
  }
`;

export const ErrortextRight = styled.div`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 200px;
  font-style: normal;
  font-weight: 700;
  height: 250px;

  @media (max-width: 768px) {
    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
    font-size: 200px;
    font-style: normal;
    font-weight: 700;
    height: 250px;
  }

  @media (max-width: 375px) {
    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: 150px;
    height: 150px;
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
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.36px;
  border: none;
  margin-top: 32px;
  cursor: pointer;
transition: box-shadow 0.25s, transform 0.25s;

  &:hover {
    box-shadow: 8px 4px 24px 0px rgba(136, 165, 191, 0.48);


  @media (max-width: 768px) {
    display: inline-flex;
    padding: 16px 48px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 16px;
    background: #3e85f3;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.36px;
    cursor: pointer;
transition: box-shadow 0.25s, transform 0.25s;

  &:hover {
    box-shadow: 8px 4px 24px 0px rgba(136, 165, 191, 0.48);

  }

  @media (max-width: 375px) {
    display: inline-flex;
    // padding: 14px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 16px;
    background: #3e85f3;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.36px;
    // margin-top: 24px;
    cursor: pointer;
transition: box-shadow 0.25s, transform 0.25s;

  &:hover {
    box-shadow: 8px 4px 24px 0px rgba(136, 165, 191, 0.48);

  }
`;

export const ErrorImagesContainer = styled.div`
  display: inline-flex;
  text-align: center;
  width: 503px;
  height: 250px;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  media (max-width: 768px) {
    width: 503px;
    height: 250px;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    width: 252px;
    height: 150px;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ImgMob = styled.div`
  @media (max-width: 375px) {
    width: 81px;
    height: 188px;
  }
`;

export const Images = styled.div`
  // width: 420px;
  // height: 365px;
`;
export const img = styled.div`
  width: 420px;
  height: 365px;
`;
