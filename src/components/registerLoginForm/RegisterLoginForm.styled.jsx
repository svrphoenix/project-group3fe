import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';

export const StyledContainer = styled.div`
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
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
  position: relative;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  width: 100%;
  @media (min-width: 768px) {
    gap: 40px;
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
  font-family: Inter Regular;
  font-size: 14px;
  border: none;
  outline:none;
  width: 86%;
  &::placeholder {
    color: #DCE3E5;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  &:-webkit-autofill {
  transition: all 5000s ease-in-out 0s;
}
`

export const StyledFieldContainer = styled.div`
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
  align-items: center;
  position: relative;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 1.3;
  display: flex;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
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
`

export const StyledButtonVisibility = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  position: absolute;
  padding: 0px;
  padding-top: 3.3px;
  right: 14px;
`

export const StyledIcon = styled.div`
  position: absolute;
  padding-top: 3.3px;
  right: 14px;
`

export const StyledRequired = styled.div`
  color: #3e85f3;
  font-family: Inter Regular;
  font-size: 12px;
  line-height: 1.16;
  margin-left: 14px;
  position: absolute;
  bottom: -23px;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const StyledCorrect = styled.div`
  color: #3CBC81;
font-family: Inter Regular;
font-size: 12px;
line-height: 1.17; 
margin-left: 14px;
  position: absolute;
  bottom: -23px;
@media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }
`

export const StyledError = styled(StyledRequired)`
  color: rgba(231, 74, 59, 1);
  margin-left: 14px;
`;

export const StyledButton = styled.button`
  display: flex;
  width: 100%;
  padding: 14px;
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
  justify-content: center;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1),
  box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: #2b78ef;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
  @media (min-width: 768px) {
    margin-top: 30px;
    font-size: 18px;
    letter-spacing: -0.36px;
    line-height: 1.33;
  }
`;