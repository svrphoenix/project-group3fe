import { styled } from 'styled-components';

export const FeedbackButton = styled.button`
  padding: 8px 20px;
  border-radius: 10px;
  border: none;
  background: #3e85f3;
  color: #fff;
  text-align: center;
  font-family: 'Inter SemiBold';
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  transition: all 0.3s;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 12px 32px;
    border-radius: 14px;
    font-size: 14px;
    line-height: 18px;
  }
  &:hover {
    box-shadow: 2px 2px 2px 1px rgba(62, 133, 243, 0.4);
    transform: scale(1.05);
  }
`;
