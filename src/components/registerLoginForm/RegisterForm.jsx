import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    StyledButton,
    StyledButtonVisibility,
    StyledContainer,
    StyledCorrect,
    StyledError,
    StyledField,
    StyledFieldContainer,
    StyledForm,
    StyledFormDiv,
    StyledHeader,
    StyledIcon,
    Styledlabel,
    StyledRequired,
} from './RegisterLoginForm.styled';
import { register } from 'redux/auth/operations';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SVG } from 'images';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-hot-toast';
import useAuth from 'hooks/useAuth';

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
    const { isLoading, isLoggedIn, error } = useAuth();


    const handleSubmit = (values, { resetForm }) => {
        dispatch(register({ name: values.name, email: values.email, password: values.password }));
        if (isLoggedIn) {
            resetForm();
            navigate('/calendar/month/:currentDate');
        }
    }

    useEffect(() => {
    if (error.status) {
      if (error.status === 409) {
        setUsedEmail(true);
      } else {
        toast.error(error.message);
      }
    }
  }, [error.message, error.status]);

    return (<StyledContainer>
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
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => {
                return (
                    <>
                        {isLoading&&<Loader/>}
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
                                <StyledFieldContainer $validate={
                                        (errors.name === 'Please enter your name' &&
                                            touched.name &&
                                            'empty') ||
                                        (errors.name && touched.name && 'error') ||
                                        (touched.name && 'okay')
                                    }>
                                    <StyledField
                                    name="name"
                                    placeholder="Enter your name"
                                    />
                                    {(errors.name && errors.name!=='Please enter your name' && touched.name) &&
                                        (<StyledIcon>
                                            <SVG.ErrorAuth />
                                        </StyledIcon>
                                        )}
                                    {(touched.name && !errors.name) &&
                                        (<StyledIcon>
                                            <SVG.GoodAuth />
                                        </StyledIcon>
                                        )}
                                </StyledFieldContainer>
                                
                                {(errors.name === 'Please enter your name' && touched.name && (
                                    <StyledRequired>{errors.name}</StyledRequired>
                                )) ||
                                    (errors.name && touched.name && (
                                        <StyledError>{errors.name}</StyledError>
                                    )) || (touched.name &&
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
                                <StyledFieldContainer $validate={
                                        (errors.email === 'Please enter your email' &&
                                            touched.email &&
                                            'empty') ||
                                        (((errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match"))) || usedEmail) && 'error') ||
                                        (touched.email && 'okay')
                                    }>
                                    <StyledField
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    />
                                    {((errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match"))) || usedEmail) &&
                                        (<StyledIcon>
                                            <SVG.ErrorAuth />
                                        </StyledIcon>
                                        )}
                                    {(touched.email && !errors.email && !usedEmail) &&
                                        (<StyledIcon>
                                            <SVG.GoodAuth />
                                        </StyledIcon>
                                        )}
                                </StyledFieldContainer>
                                {(errors.email === 'Please enter your email' && touched.email && (
                                    <StyledRequired>{errors.email}</StyledRequired>
                                )) ||
                                    (errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match")) && (
                                        <StyledError>This is an ERROR email</StyledError>
                                    )) ||
                                    (usedEmail && (
                                        <StyledError>This user is already exist</StyledError>
                                    )) || (touched.email &&
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
                                <StyledFieldContainer $validate={
                                    (errors.password === 'Please enter your password' &&
                                        touched.password &&
                                        'empty') ||
                                    (errors.password && touched.password && 'error') ||
                                    (touched.password && 'okay')
                                }>
                                    <StyledField
                                        name="password"
                                        type={!visibility ? "password" : "text"}
                                        placeholder="Enter password"
                                    />
                                    <StyledButtonVisibility type="button" onClick={() => { setVisibility(!visibility) }}>
                                        <ThemeProvider theme={theme}>
                                            {!visibility ? <Visibility color="primary" /> : <VisibilityOff color="primary" />}
                                        </ThemeProvider>
                                    </StyledButtonVisibility>
                                </StyledFieldContainer>
                                {(errors.password === 'Please enter your password' &&
                                    touched.password && (
                                        <StyledRequired>{errors.password}</StyledRequired>
                                    )) ||
                                    (errors.password && errors.password.includes('password must match the following') && touched.password && (
                                        <StyledError>This password should contain  at least eight characters and at least one number and one letter</StyledError>
                                    )) ||
                                    (errors.password && touched.password && (
                                        <StyledError>{errors.password}</StyledError>
                                    )) || (touched.password &&
                                        <StyledCorrect>This is an CORRECT password</StyledCorrect>)
                                }
                            </StyledFormDiv>
                            <StyledButton type="submit">Sign Up
                                <SVG.LoginWhiteIcon />
                            </StyledButton>
                        </StyledForm>
                        </>
                    );
                }
            }
            </Formik>
    </StyledContainer>)
}


export default RegisterForm;