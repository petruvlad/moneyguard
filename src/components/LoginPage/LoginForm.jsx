// LoginForm.js
// LoginForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './LoginForm.scss';  // Importă fișierul de stilizare SASS

const LoginForm = ({ onSubmit }) => {
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
    });

    const handleSubmit = (values, { setSubmitting }) => {
        // Trimite datele la backend sau procesează în alt mod
        onSubmit(values);
        setSubmitting(false);
    };

    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className="login-form">
                    <div className="form-group">
                        <label>Email:</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" className="error-message" />
                    </div>

                    <div className="form-group">
                        <button type="submit">Log in</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;

