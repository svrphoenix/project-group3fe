import { styled } from 'styled-components';

import variables from '../../utils/variables';

const { firstBtnTextColor, firstBtnMainColor, hoverBtnMAinColor,cubic } = variables;

export const FeedbackButton = styled.button`
 cursor: pointer;
  padding: 8px 20px;
  border: none;
  border-radius: 10px;
  color: ${firstBtnTextColor};
  background-color: ${firstBtnMainColor};
  text-align: center;
  font-family: 'Inter SemiBold';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  transition: background-color ${cubic};
  @media screen and (min-width: 768px) {
    padding: 12px 32px;
    border-radius: 14px;
    font-size: 14px;
    line-height: 18px;
  }
  &:hover,
  &:focus {
    background-color: ${hoverBtnMAinColor};
  }
`;
