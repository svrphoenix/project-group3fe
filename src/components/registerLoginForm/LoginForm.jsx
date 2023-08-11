import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    StyledButton,
    StyledContainer,
    StyledError,
    StyledField,
    StyledFieldPasswordLogin,
    StyledForm,
    StyledFormDiv,
    StyledHeader,
    Styledlabel,
    StyledRequired,
} from './RegisterLoginForm.styled';
import { login } from 'redux/auth/operations';
import { SVG } from 'images';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('This is an ERROR email')
    .required('Please enter your email')
    .matches(/^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$/),
  password: Yup.string()
    .min(8, 'Need to be more than 8 symbols!')
    .required('Please enter your password')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/),
});

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [noUser, setNoUser] = useState(false);

    return  (<StyledContainer>
        <StyledHeader>Log In</StyledHeader>
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validateOnChange={false}
            validateOnBlur={true}
            validationSchema={LoginSchema}
            onSubmit={async (values, { resetForm }) => {
                try {
                    const response = await dispatch(
                        login({
                            email: values.email,
                            password: values.password,
                        }));
                    if (response.meta.requestStatus !== "rejected") {
                        resetForm();
                        navigate("/calendar");
                    } else {
                        if (response.payload.includes("401")) {
                            setNoUser(true);
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
                                htmlFor="email"
                                $validate={
                                    (errors.email === 'Please enter your email' &&
                                        touched.email &&
                                        'empty') ||
                                    (((errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match")))||noUser) && 'error') ||
                                    (touched.email && 'okay')
                                }
                            >
                                Email
                            </Styledlabel>
                            <StyledField
                                name="email"
                                type="email"
                                placeholder="nadiia@gmail.com"
                                $validate={
                                    (errors.email === 'Please enter your email' &&
                                        touched.email &&
                                        'empty') ||
                                    (((errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match")))||noUser) && 'error') ||
                                    (touched.email && 'okay')
                                }
                            />
                            {(errors.email === 'Please enter your email' && touched.email && (
                                <StyledRequired>{errors.email}</StyledRequired>
                            )) ||
                                (errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match")) && (
                                    <StyledError>This is an ERROR email</StyledError>
                            )) ||
                            (noUser && (
                                 <StyledError>Email or password is uncorrect</StyledError>
                            ))}
                        </StyledFormDiv>
                        <StyledFormDiv>
                            <Styledlabel
                                htmlFor="password"
                                $validate={
                                    (errors.password === 'Please enter your password' &&
                                        touched.password &&
                                        'empty') ||
                                    (((errors.password && touched.password)||noUser) && 'error') ||
                                    (touched.password && 'okay')
                                }
                            >
                                Password
                            </Styledlabel>
                            <StyledFieldPasswordLogin
                                name="password"
                                type="password"
                                placeholder="•••••••"
                                $validate={
                                    (errors.password === 'Please enter your password' &&
                                        touched.password &&
                                        'empty') ||
                                    (((errors.password && touched.password)||noUser) && 'error') ||
                                    (touched.password && 'okay')
                                }
                            />
                            {(errors.password === 'Please enter your password' &&
                                touched.password && (
                                    <StyledRequired>{errors.password}</StyledRequired>
                                )) ||
                                (errors.password && errors.password.includes('password must match the following') && touched.password && (
                                    <StyledError>This password should contain  at least eight characters and at least one number and one letter</StyledError>
                                )) ||
                                (errors.password && touched.password && (
                                    <StyledError>{errors.password}</StyledError>
                                )) || (noUser && (
                                <StyledError>Email or password is uncorrect</StyledError>
                                ))
                            }
                        </StyledFormDiv>
                        <StyledButton type="submit">Log In
                            <SVG.LoginWhiteIcon />
                        </StyledButton>
                    </StyledForm>
                );
            }}
        </Formik>
    </StyledContainer>)
};

export default LoginForm;