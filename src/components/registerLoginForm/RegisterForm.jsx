import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    StyledButton,
    StyledButtonVisibility,
    StyledContainer,
    StyledContainerPassword,
    StyledCorrect,
    StyledError,
    StyledField,
    StyledFieldPassword,
    StyledForm,
    StyledFormDiv,
    StyledHeader,
    Styledlabel,
    StyledRequired,
} from './RegisterLoginForm.styled';
import { register } from 'redux/auth/operations';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SVG } from 'images';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8D9698'
    }
  },
});

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Please enter your name'),
  email: Yup.string()
    .email('This is an ERROR email')
    .required('Please enter your email')
    .matches(/^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$/),
  password: Yup.string()
    .min(8, 'Need to be more than 8 symbols!')
    .required('Please enter your password')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/),
});

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [usedEmail, setUsedEmail] = useState(false);
    const [visibility, setVisibility] = useState(false);

    

    return  (<StyledContainer>
        <StyledHeader>Sign Up</StyledHeader>
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
            }}
            validateOnChange={false}
            validateOnBlur={true}
            validationSchema={SignupSchema}
            onSubmit={async(values, { resetForm }) => {
                try {
                    const response = await dispatch(
                        register({
                            name: values.name,
                            email: values.email,
                            password: values.password,
                        }));
                    if (response.meta.requestStatus !== "rejected") {
                        resetForm();
                        navigate("/calendar");
                    } else {
                        if (response.payload.includes("409")) {
                            setUsedEmail(true);
                        }
                    }
                } catch (error) {
                    alert("Sorry, problem at server")
                }
        
            }}
        >
            {({ errors, touched }) => {
                return (
                    <StyledForm>
                        <StyledFormDiv>
                            <Styledlabel
                                htmlFor="name"
                                $validate={
                                    (errors.name === 'Please enter your name' &&
                                        touched.name &&
                                        'empty') ||
                                    (errors.name && touched.name && 'error') ||
                                    (touched.name && 'okay')
                                }
                            >
                                Name
                            </Styledlabel>
                            <StyledField
                                name="name"
                                placeholder="Enter your name"
                                $validate={
                                    (errors.name === 'Please enter your name' &&
                                        touched.name &&
                                        'empty') ||
                                    (errors.name && touched.name && 'error') ||
                                    (touched.name && 'okay')
                                }
                            />
                            {(errors.name === 'Please enter your name' && touched.name && (
                                <StyledRequired>{errors.name}</StyledRequired>
                            )) ||
                                (errors.name && touched.name && (
                                    <StyledError>{errors.name}</StyledError>
                                ))||(touched.name&&
                            <StyledCorrect>This is an CORRECT name</StyledCorrect>)}
                        </StyledFormDiv>
                        <StyledFormDiv>
                            <Styledlabel
                                htmlFor="email"
                                $validate={
                                    (errors.email === 'Please enter your email' &&
                                        touched.email &&
                                        'empty') ||
                                    (((errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match"))) || usedEmail) && 'error') ||
                                    (touched.email && 'okay')
                                }
                            >
                                Email
                            </Styledlabel>
                            <StyledField
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                $validate={
                                    (errors.email === 'Please enter your email' &&
                                        touched.email &&
                                        'empty') ||
                                    (((errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match"))) || usedEmail) && 'error') ||
                                    (touched.email && 'okay')
                                }
                            />
                            {(errors.email === 'Please enter your email' && touched.email && (
                                <StyledRequired>{errors.email}</StyledRequired>
                            )) ||
                            (errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match"))&& (
                                <StyledError>This is an ERROR email</StyledError>
                            )) ||
                            (usedEmail && (
                                <StyledError>This user is already exist</StyledError>
                                )) ||( touched.email&&
                            <StyledCorrect>This is an CORRECT email</StyledCorrect>)}
                        </StyledFormDiv>
                        <StyledFormDiv >
                            <Styledlabel
                                htmlFor="password"
                                $validate={
                                    (errors.password === 'Please enter your password' &&
                                        touched.password &&
                                        'empty') ||
                                    (errors.password && touched.password && 'error') ||
                                    (touched.password && 'okay')
                                }
                            >
                                Password
                            </Styledlabel>
                            <StyledContainerPassword $validate={
                                    (errors.password === 'Please enter your password' &&
                                        touched.password &&
                                        'empty') ||
                                    (errors.password && touched.password && 'error') ||
                                    (touched.password && 'okay')
                                }>
                                <StyledFieldPassword
                                    name="password"
                                    type={!visibility?"password":"text" }
                                placeholder="Enter password"
                                />
                                <StyledButtonVisibility type="button" onClick={() => { setVisibility(!visibility) }}>
                                    <ThemeProvider theme={theme}>
                                        {!visibility ? <Visibility color="primary"/>: <VisibilityOff color="primary"/>}
                                    </ThemeProvider>
                                </StyledButtonVisibility>
                            </StyledContainerPassword>
                            {(errors.password === 'Please enter your password' &&
                                touched.password && (
                                    <StyledRequired>{errors.password}</StyledRequired>
                                )) ||
                                (errors.password && errors.password.includes('password must match the following') && touched.password && (
                                    <StyledError>This password should contain  at least eight characters and at least one number and one letter</StyledError>
                                )) ||
                                (errors.password && touched.password && (
                                    <StyledError>{errors.password}</StyledError>
                                )) || (  touched.password &&
                            <StyledCorrect>This is an CORRECT password</StyledCorrect>)
                            }
                        </StyledFormDiv>
                        <StyledButton type="submit">Sign Up
                            <SVG.LoginWhiteIcon />
                        </StyledButton>
                    </StyledForm>
                );
            }}
        </Formik>
    </StyledContainer>)
};

export default RegisterForm;