import styled from 'styled-components';

import GooseMob from '../../images/404NotFound/Goose-mob.png'
import GooseTab from '../../images/404NotFound/Group_1966.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: var(--first-Bckg-Color);
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Heading = styled.h1`
  width: 281px;
  color: var(--first-Text-Color);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    width: 387px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ErrorImage = styled.div`
  display: flex;
  align-items: center;
  font-size: 100px;
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-style: normal;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 200px;
  }
  @media screen and (max-height: 570px){
    padding-top: 200px;
  }
`;

export const ForthLeft = styled.span`
  position: relative;
  left: 25px;
  @media screen and (min-width: 768px) {
    left: 40px;
  }
`;
export const ForthRight = styled.span`
  position: relative;
  right: 25px;
  @media screen and (min-width: 768px) {
    right: 40px;
  }
`;

export const Button = styled.button`
  padding: 14px 32px;
  border-radius: 16px;
  background: #3e85f3;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.36px;
  border: none;
  margin-top: 32px;
  cursor: pointer;
  transition: box-shadow 0.25s, transform 0.25s;

  &:hover {
    box-shadow: 8px 4px 24px 0px rgba(136, 165, 191, 0.48);
  }
  @media screen and (min-width: 768px) {
    padding: 16px 48px;

    font-size: 14px;
    line-height: 18px;
  }
`;

export const Images = styled.div`
  width: 166px;
  height: 203px;
  background-image: url(${GooseMob});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (min-width: 768px) {
    width: 366px;
    height: 546px;
    background-image: url(${GooseTab});
  }
`;
