import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UserForm = (props) => {
  const [userValue, setUserValue] = useState({
    firstName: props.initialValues.first_name || '',
    lastName: props.initialValues.last_name || '',
    email: props.initialValues.email || ''
  });

  useEffect(() => {
    setUserValue({
      firstName: props.initialValues.first_name || '',
      lastName: props.initialValues.last_name || '',
      email: props.initialValues.email || ''
    });
  }, [props.initialValues]);

  const onSubmitForm = () => {
    props.onSubmit1(userValue);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        firstName: userValue.firstName,
        lastName: userValue.lastName,
        email: userValue.email
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required')
      })}
      onSubmit={onSubmitForm}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field
                  className={`form-control ${
                    errors.firstName && touched.firstName ? 'is-invalid' : ''
                  }`}
                  name="firstName"
                  type="text"
                  autoComplete="off"
                />
                <div className="d-block invalid-feedback">
                  <ErrorMessage name="firstName" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  className={`form-control ${
                    errors.lastName && touched.lastName ? 'is-invalid' : ''
                  }`}
                  name="lastName"
                  type="text"
                  autoComplete="off"
                />
                <div className="d-block invalid-feedback">
                  <ErrorMessage name="lastName" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
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
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
