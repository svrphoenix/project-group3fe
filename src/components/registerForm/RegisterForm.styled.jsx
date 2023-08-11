import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';

export const StyledContainer = styled.div`
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  width: (100%-40px);
  padding: 40px 15px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  border-radius: 8px;
  background: #fff;
  @media (min-width: 375px) {
    width: 335px;
    padding: 40px 24px;
  }
  @media (min-width: 768px) {
    width: 480px;
    padding: 40px;
    gap: 40px;
  }
`;

export const StyledHeader = styled.h1`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter SemiBold;
  font-size: 18px;
  line-height: 1.3;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 8px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  @media (min-width: 768px) {
    gap: 18px;
  }
`;

export const Styledlabel = styled.label`
  ${props => {
    switch (props.$validate) {
      case 'error':
        return css`
          color: rgba(231, 74, 59, 1);
        `;
      case 'empty':
        return css`
          color: #3e85f3;
        `;
      case 'okay':
        return css`
          color: rgba(60, 188, 129, 1);
        `;
      default:
        return css`
          color: #111;
        `;
    }
  }}
  font-family: Inter SemiBold;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledField = styled(Field)`
  ${props => {
    switch (props.$validate) {
      case 'error':
        return css`
          border: 1px solid rgba(231, 74, 59, 1);
        `;
      case 'okay':
        return css`
          border: 1px solid rgba(60, 188, 129, 1);
        `;
      case 'empty':
        return css`
          border: 1px solid #3e85f3;
        `;
      default:
        return css`
          border: 1px solid rgba(220, 227, 229, 0.6);
        `;
    }
  }}
  width: 100%;
  height: 46px;
  border-radius: 8px;
  box-sizing: border-box;
  background: #fff;
  padding: 14px;
  color: #111;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 1.3;
  &:hover,
  &:focus {
    border-radius: 8px;
    border: 1px solid #111;
  }
  &::placeholder {
    color: #dce3e5;
    font-family: Inter Regular;
    font-size: 14px;
    line-height: 1.28;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
    height: 54px;
  }
`;

export const StyledRequired = styled.div`
  color: #3e85f3;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const StyledError = styled(StyledRequired)`
  color: rgba(231, 74, 59, 1);
`;

export const StyledButton = styled.button`
  display: flex;
  width: 100%;
  padding: 14px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  background: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  color: #fff;
  font-family: Inter SemiBold;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.28px;
  margin-top: 12px;
  &:hover,
  &:focus {
    background: #2b78ef;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
  @media (min-width: 375px) {
    padding: 14px 103px;
  }
  @media (min-width: 768px) {
    margin-top: 30px;
    font-size: 18px;
  line-height: 1.33;
  }
`;

export const StyledIconLogin = styled.svg`
  fill: #FFF;
  width: 20px;
  height:20px;
`