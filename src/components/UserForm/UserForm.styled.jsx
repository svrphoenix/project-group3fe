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
  background-color: var(--second-Bckg-Color);
  border-radius: 16px;
  transition: background-color var(--theme-cubic);
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
    padding: 60px 165px 60px 165px;
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

export const StyledUserName = styled.p`
  text-align: center;
  font-family: 'Inter Bold';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
  color: var(--second-Text-Color);
  margin-bottom: 4px;
  transition: color var(--theme-cubic);
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
  color: var(--sixth-Text-Color);
  transition: color var(--theme-cubic);
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
  color: var(--fiveth-Text-Color);
  margin: 0 auto;
  width: fit-content;
  position: relative;
  transition: color var(--theme-cubic);
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
  color: var(--fiveth-Text-Color);
  width: fit-content;
  position: relative;
  transition: color var(--theme-cubic);
  svg {
    position: absolute;
    top: 38px;
    right: 14px;
  }
`;
export const FileInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Inter';
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--fiveth-Text-Color);
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 0px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 26px;
  }

  &:nth-child(1) {
    margin-bottom: 24px;
    @media screen and (min-width: 768px) {
      margin-bottom: 26px;
    }
  }
  &:nth-child(2) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    &:nth-child(1) {
      flex: 2;
      margin-bottom: 26px;
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
  border: 1px solid var(--first-Input-Border-Color);
  border-radius: 8px;
  width: 100%;
  height: 42px;
  color: var(--first-Text-Color);
  background-color: var(--second-Bckg-Color);
  transition: color var(--theme-cubic), background-color var(--theme-cubic);
  &::placeholder {
    color: var(--placeholder-Color);
    transition: color var(--theme-cubic);
    font-size: 12px;
  }
  &:hover,
  &:focus {
    border: 1px solid var(--second-Input-Border-Color);
    outline: none;
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
  border: 1px solid var(--first-Input-Border-Color);
  border-radius: 8px;
  width: 100%;
  height: 42px;
  color: var(--first-Text-Color);
  background-color: var(--second-Bckg-Color);
  transition: color var(--theme-cubic), background-color var(--theme-cubic);
  &::placeholder {
    color: var(--placeholder-Color);
    transition: color var(--theme-cubic);
    font-size: 12px;
  }
  &:hover,
  &:focus {
    border: 1px solid var(--second-Input-Border-Color);
    outline: none;
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
  color: var(--first-Icon-Color);
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
  background-color: var(--first-Bckg-Btn-Color);
  border-radius: 50%;
  z-index: 1;
  &:hover,
  &:focus {
    background-color: var(--hover-Bckg-Btn-Color);
    box-shadow: 4px 2px 16px 0px var(--hover-Btn-Shadow);
  }
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
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
  background-color: ${props =>
    props.disabled ? '#ccc' : 'var(--first-Bckg-Btn-Color)'};
  color: var(--first-Btn-Text-Color);
  border-width: 0;
  margin: 0 auto;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  &:hover,
  &:focus {
    background-color: ${props =>
      props.disabled ? '#ccc' : 'var(--hover-Bckg-Btn-Color)'};
    box-shadow: ${props =>
      props.disabled ? 'none' : '4px 2px 16px 0px var(--hover-Btn-Shadow)'};
  }
  @media screen and (min-width: 768px) {
    width: 262px;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: var(--error-Text-Color);
  font-family: 'Inter Regular';
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
  position: absolute;
  bottom: -22px;
`;

export const StyledErrorText = styled.div`
  color: var(--error-Text-Color);
  font-family: 'Inter Regular';
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
  margin-top: 8px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledAddIcon = styled.svg`
  width: 8px;
  height: 8px;
  stroke: var(--first-Btn-Text-Color);

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
