import styled from 'styled-components';
import { Field as FieldFormik, Form as FormFormik } from 'formik';
import DatePicker from 'react-datepicker';

//  @media screen and (min-width: 768px) and (max-width: 1439px)

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
  margin-bottom: 18px;
  width: fit-content;
`;

export const StyledLabelWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
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
`;

export const StyledFormWrapper = styled.div`
  margin: 64px 20px 40px 20px;
  /* background-color: grey; */
`;

export const Form = styled(FormFormik)`
  padding: 0px 18px 40px 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  img {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }
`;

export const StyledAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
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
`;

export const StyledUserName = styled.p`
  padding-top: 59px;
  text-align: center;
  font-family: 'Inter Bold';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
  color: 343434;
  margin-bottom: 4px;
`;
export const StyledUserDiscription = styled.p`
  text-align: center;
  font-family: 'Inter SemiBold';
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 40px;
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
  background-color: #3e85f3;
  color: #fff;
  border-width: 0;
  margin: 0 auto;
  margin-top: 18px;
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
`;
