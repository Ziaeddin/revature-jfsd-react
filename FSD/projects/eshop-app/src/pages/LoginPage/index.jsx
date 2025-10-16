import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik, Form, Field, ErrorMessage, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

const initialValues = {
    email: '',
    password: ''
};

const onSubmit = (values) => {
    console.log('Form data', values);
};

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string().required('Required!').min(6, 'Password must be at least 6 characters')
});

const LoginPage = () => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-body p-4">
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
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <Field
                                                    type="email"
                                                    className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                                    name="email"
                                                    placeholder="Enter email"
                                                />
                                                <ErrorMessage name="email" component="div" className="text-danger" />
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
                                            <button type="submit" value="Login" disabled={!formik.isValid} className="btn btn-primary w-100 mb-3">
                                                Login
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