const { styled } = require('styled-components');

export const CircleBadgeContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const CircleBadgeText = styled.span`
  color: #fff;
  font-size: 8px;
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`;
