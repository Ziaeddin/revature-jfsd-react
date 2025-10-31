import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const LoginPage = () => {
    const initialValues = {
        usernameOrEmail: '',
        password: ''
    };

    const navigate = useNavigate();

    const validationSchema = Yup.object({
        usernameOrEmail: Yup.string().required('Username or email is required!'),
        password: Yup.string().required('Password is required!').min(5, 'Password must be at least 5 characters')
    });

    const [requestResponse, setRequestResponse] = useState({
        message: '',
        alertClass: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (values) => {
        setIsLoading(true);
        setRequestResponse({ message: '', alertClass: '' });

        try {
            await authService.login(values.usernameOrEmail, values.password);
            
            setRequestResponse({
                message: 'Login successful! Redirecting...',
                alertClass: 'alert alert-success'
            });

            // Navigate to home 
            setTimeout(() => {
                navigate('/', { replace: true });
            }, 500);
        } catch (error) {
            console.error('Login error:', error);
            
            const errorMessage = error.response?.data?.message 
                || 'Login failed. Please check your credentials and try again.';
            
            setRequestResponse({
                message: errorMessage,
                alertClass: 'alert alert-danger'
            });
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            {requestResponse.message && (
                                <div className={requestResponse.alertClass} role="alert">
                                    {requestResponse.message}
                                </div>
                            )}
                            <h3 className="card-title text-center mb-4">Login</h3>
                            <hr />
                            <Formik initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                                validateOnMount={true}
                            >
                                {(formik) => {
                                    return (
                                        <Form>
                                            <div className="mb-3">
                                                <label htmlFor="usernameOrEmail" className="form-label">Username or Email</label>
                                                <Field
                                                    type="text"
                                                    className={`form-control ${formik.touched.usernameOrEmail && formik.errors.usernameOrEmail ? 'is-invalid' : ''}`}
                                                    name="usernameOrEmail"
                                                    placeholder="Enter username or email"
                                                />
                                                <ErrorMessage name="usernameOrEmail" component="div" className="text-danger" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <Field
                                                    type="password"
                                                    className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                                                    name="password"
                                                    placeholder="Enter password"
                                                />
                                                <ErrorMessage name="password" component="div" className="text-danger" />
                                            </div>
                                            <button 
                                                type="submit" 
                                                disabled={!formik.isValid || isLoading} 
                                                className="btn btn-primary w-100 mb-3"
                                            >
                                                {isLoading ? 'Logging in...' : 'Login'}
                                            </button>
                                            <div className="text-center">
                                                <Link to="/register" className="text-decoration-none">New User? Sign Up</Link>
                                            </div>
                                        </Form>
                                    )
                                }
                                }
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;