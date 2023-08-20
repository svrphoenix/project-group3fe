import { styled } from 'styled-components';

export const ChartDiv = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  width: 307px;
  padding: 40px 14px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 135px;

  @media screen and (min-width: 768px) {
    width: 640px;
    margin-bottom: 224px;
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 860px;
    margin-bottom: 104px;
    padding: 40px;
  }
`;
