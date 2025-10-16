import react, { useState } from 'react';
import './styles.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterPage = () => {

    const initialValues = {
        firstName: '',
        email: '',
        mobile: '',
        password: ''
    };

    const onSubmit = (values) => {
        console.log('Form data', values);
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        mobile: Yup.string().required('Mobile Number is required')
            .length(10, 'Mobile Number must be 10 digits'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    return (
        <div class="container">
            <div class="row justify-content-center align-items-center min-vh-100">
                <div class="col-md-6">
                    <div class="wrapper">
                        <h2>Register</h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="text"
                                    class="form-control"
                                    name="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    placeholder="Enter first name" />
                            </div>
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email"
                                    class="form-control"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label>Mobile</label>
                                <input type="text"
                                    class="form-control"
                                    name="mobile"
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange}
                                    placeholder="Enter Mobile Number" />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password"
                                    class="form-control"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mb-3">
                                Register
                            </button>
                            <div className="text-center">
                                <a href="#" className="text-decoration-none">Already have an account? Login</a>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RegisterPage;