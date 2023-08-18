import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import {
//     StyledButton,
//     StyledButtonVisibility,
//     StyledContainer,
//     StyledCorrect,
//     StyledError,
//     StyledField,
//     StyledFieldContainer,
//     StyledForm,
//     StyledFormDiv,
//     StyledHeader,
//     StyledIcon,
//     Styledlabel,
//     StyledRequired,
// } from './RegisterLoginForm.styled';
import * as SC from './RegisterLoginForm.styled';
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

    return (<SC.StyledContainer>
        <SC.StyledHeader>Sign Up</SC.StyledHeader>
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
                        <SC.StyledForm>
                            <SC.StyledFormDiv>
                                <SC.Styledlabel
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
                                </SC.Styledlabel>
                                <SC.StyledFieldContainer $validate={
                                        (errors.name === 'Please enter your name' &&
                                            touched.name &&
                                            'empty') ||
                                        (errors.name && touched.name && 'error') ||
                                        (touched.name && 'okay')
                                    }>
                                    <SC.StyledField
                                    name="name"
                                    placeholder="Enter your name"
                                    />
                                    {(errors.name && errors.name!=='Please enter your name' && touched.name) &&
                                        (<SC.StyledIcon>
                                            <SVG.ErrorAuth />
                                        </SC.StyledIcon>
                                        )}
                                    {(touched.name && !errors.name) &&
                                        (<SC.StyledIcon>
                                            <SVG.GoodAuth />
                                        </SC.StyledIcon>
                                        )}
                                </SC.StyledFieldContainer>
                                
                                {(errors.name === 'Please enter your name' && touched.name && (
                                    <SC.StyledRequired>{errors.name}</SC.StyledRequired>
                                )) ||
                                    (errors.name && touched.name && (
                                        <SC.StyledError>{errors.name}</SC.StyledError>
                                    )) || (touched.name &&
                                        <SC.StyledCorrect>This is an CORRECT name</SC.StyledCorrect>)}
                            </SC.StyledFormDiv>
                            <SC.StyledFormDiv>
                                <SC.Styledlabel
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
                                </SC.Styledlabel>
                                <SC.StyledFieldContainer $validate={
                                        (errors.email === 'Please enter your email' &&
                                            touched.email &&
                                            'empty') ||
                                        (((errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match"))) || usedEmail) && 'error') ||
                                        (touched.email && 'okay')
                                    }>
                                    <SC.StyledField
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    />
                                    {((errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match"))) || usedEmail) &&
                                        (<SC.StyledIcon>
                                            <SVG.ErrorAuth />
                                        </SC.StyledIcon>
                                        )}
                                    {(touched.email && !errors.email && !usedEmail) &&
                                        (<SC.StyledIcon>
                                            <SVG.GoodAuth />
                                        </SC.StyledIcon>
                                        )}
                                </SC.StyledFieldContainer>
                                {(errors.email === 'Please enter your email' && touched.email && (
                                    <SC.StyledRequired>{errors.email}</SC.StyledRequired>
                                )) ||
                                    (errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match")) && (
                                        <SC.StyledError>This is an ERROR email</SC.StyledError>
                                    )) ||
                                    (usedEmail && (
                                        <SC.StyledError>This user is already exist</SC.StyledError>
                                    )) || (touched.email &&
                                        <SC.StyledCorrect>This is an CORRECT email</SC.StyledCorrect>)}
                            </SC.StyledFormDiv>
                            <SC.StyledFormDiv >
                                <SC.Styledlabel
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
                                </SC.Styledlabel>
                                <SC.StyledFieldContainer $validate={
                                    (errors.password === 'Please enter your password' &&
                                        touched.password &&
                                        'empty') ||
                                    (errors.password && touched.password && 'error') ||
                                    (touched.password && 'okay')
                                }>
                                    <SC.StyledField
                                        name="password"
                                        type={!visibility ? "password" : "text"}
                                        placeholder="Enter password"
                                    />
                                    <SC.StyledButtonVisibility type="button" onClick={() => { setVisibility(!visibility) }}>
                                        <ThemeProvider theme={theme}>
                                            {!visibility ? <Visibility color="primary" /> : <VisibilityOff color="primary" />}
                                        </ThemeProvider>
                                    </SC.StyledButtonVisibility>
                                </SC.StyledFieldContainer>
                                {(errors.password === 'Please enter your password' &&
                                    touched.password && (
                                        <SC.StyledRequired>{errors.password}</SC.StyledRequired>
                                    )) ||
                                    (errors.password && errors.password.includes('password must match the following') && touched.password && (
                                        <SC.StyledError>This password should contain  at least eight characters and at least one number and one letter</SC.StyledError>
                                    )) ||
                                    (errors.password && touched.password && (
                                        <SC.StyledError>{errors.password}</SC.StyledError>
                                    )) || (touched.password &&
                                        <SC.StyledCorrect>This is an CORRECT password</SC.StyledCorrect>)
                                }
                            </SC.StyledFormDiv>
                            <SC.StyledButton type="submit">Sign Up
                                <SVG.LoginWhiteIcon />
                            </SC.StyledButton>
                        </SC.StyledForm>
                        </>
                    );
                }
            }
            </Formik>
    </SC.StyledContainer>)
}


export default RegisterForm;