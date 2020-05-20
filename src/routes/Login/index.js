import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from './api';
import { showSuccess, showError } from '../../utils/showToast';
import { useAuth } from '../../context/auth';

const LogIn = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setAuthTokens } = useAuth();

  const onSubmitForm = async (values) => {
    try {
      const response = await logIn(values);
      setAuthTokens(response.data.token);
      setLoggedIn(true);
      showSuccess();
    } catch (error) {
      setIsError(true);
      showError(error.response.data.error);
    }
  };

  if (isLoggedIn) {
    const referer = props.location.state.referer || '/';
    return <Redirect to={referer} />;
  }

  return (
    <Formik
      enableReinitialize
      initialValues={{
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required')
      })}
      onSubmit={onSubmitForm}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              className={`form-control ${
                errors.email && touched.email ? 'is-invalid' : ''
              }`}
              name="email"
              type="email"
              autoComplete="off"
            />
            <div className="d-block invalid-feedback">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              className={`form-control ${
                errors.password && touched.password ? 'is-invalid' : ''
              }`}
              name="password"
              type="password"
              autoComplete="off"
            />
            <div className="d-block invalid-feedback">
              <ErrorMessage name="password" />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            LogIn
          </button>
          {isError && (
            <div>The username or password provided were incorrect!</div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default LogIn;
