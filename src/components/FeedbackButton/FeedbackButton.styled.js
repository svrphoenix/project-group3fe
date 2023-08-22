import { styled } from 'styled-components';

export const FeedbackButton = styled.button`
  width: 80px;
  padding: 8px 20px;
  border-radius: 10px;
  border: none;
  background-color: #3e85f3;
  color: #fff;
  text-align: center;
  font-family: 'Inter SemiBold';
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  transition: background-color var(--cubic);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 130px;
    padding: 12px 32px;
    border-radius: 14px;
    font-size: 14px;
    line-height: 18px;
  }
  &:hover,
  &:focus {
    background-color: #2b78ef;
  }
`;
