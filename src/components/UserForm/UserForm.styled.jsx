import styled from 'styled-components';
import {
  Field as FieldFormik,
  Form as FormFormik,
  ErrorMessage as FormikErrorMessage,
} from 'formik';
import DatePicker from 'react-datepicker';

export const StyledFormWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  @media screen and (min-width: 1440px) {
    height: calc(100vh - 148px);
  }
`;

export const Form = styled(FormFormik)`
  padding: 59px 18px 54px 18px;
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 40px 175px 40px 175px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 165px 20px 165px;
    height: calc(100vh - 148px);
  }
`;

export const StyledAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (min-width: 768px) {
    position: relative;
    transform: none;
    top: 0;
    left: 0;
  }
`;

export const StyledAvatarContainer = styled.div`
  width: 72px;
  height: 76px;
  border: 2px solid #3e85f3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e3f3ff;
  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
  img {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }
`;

export const StyledUserName = styled.p`
  text-align: center;
  font-family: 'Inter Bold';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
  color: #343434;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    margin-top: 20px;
  }
`;
export const StyledUserDiscription = styled.p`
  text-align: center;
  font-family: 'Inter SemiBold';
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Inter';
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #111111;
  margin: 0 auto;
  width: fit-content;
`;

export const StyledCalendar = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Inter';
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #111111;
  width: fit-content;
  position: relative;
  svg {
    position: absolute;
    top: 38px;
    right: 14px;
  }
`;
export const FileInputLabel = styled(FormField)`
  margin-bottom: 0px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 18px;

  &:nth-child(1) {
    margin-bottom: 18px;
    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }
  &:nth-child(2) {
    margin-bottom: 40px;
    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:nth-child(1) {
      flex: 2;
      margin-bottom: 18px;
    }

    &:nth-child(2) {
      flex: 1;
    }
  }
`;

export const StyledLabelWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    column-gap: 50px;
    margin-bottom: 48px;
  }
`;

export const StyledLabelText = styled.span`
  margin-bottom: 8px;
  font-family: 'Inter Regular';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Field = styled(FieldFormik)`
  font-family: 'Inter SemiBold';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0px 14px;
  border: 1px solid #1111111a;
  border-radius: 8px;
  width: 100%;
  height: 42px;
  &::placeholder {
    color: #11111126;
    font-size: 12px;
  }
  &:hover,
  &:focus {
    border: 1px solid #111;
    outline: none;
    background-color: #fff;
  }

  @media screen and (min-width: 375px) {
    width: 299px;
  }
  @media screen and (min-width: 768px) {
    width: 354px;
    font-size: 16px;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  font-family: 'Inter SemiBold';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0px 14px;
  border: 1px solid #1111111a;
  border-radius: 8px;
  width: 100%;
  height: 42px;

  &::placeholder {
    color: #11111126;
    font-size: 12px;
  }
  &:hover,
  &:focus {
    border: 1px solid #111;
    outline: none;
    background-color: #fff;
  }

  @media screen and (min-width: 375px) {
    width: 299px;
  }
  @media screen and (min-width: 768px) {
    width: 354px;
    font-size: 16px;
  }
`;

export const StyledAvatarText = styled.p`
  font-family: 'Inter Bold';
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0em;
  color: #3e85f3;
`;

export const StyledBtnLink = styled.a`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -2px;
  left: 60%;
  width: 14px;
  height: 14px;
  background-color: #3e85f3;
  border-radius: 50%;
  &:hover,
  &:focus {
    background-color: #2b78ef;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
export const IconWrapper = styled.svg`
  fill: ${props => props.color};
  stroke: ${props => props.color};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

export const StyledBtn = styled.button`
  width: 195px;
  height: 46px;
  border-radius: 16px;
  padding: 0 50px;
  font-family: 'Inter SemiBold';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  background-color: ${props => (props.disabled ? '#ccc' : '#3e85f3')};
  color: #fff;
  border-width: 0;
  margin: 0 auto;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${props => (props.disabled ? '#ccc' : '#2b78ef')};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
  @media screen and (min-width: 768px) {
    width: 262px;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: #e74a3b;
  font-family: 'Inter Regular';
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
  margin-top: 8px;
`;

export const StyledErrorText = styled.div`
  color: #e74a3b;
  font-family: 'Inter Regular';
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
  margin-top: 8px;
`;
