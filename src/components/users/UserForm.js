import React, { useState, useEffect } from 'react';

const UserForm = (props) => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [userValidate, setUserValidate] = useState({
    firstName: { isInvalid: false },
    lastName: { isInvalid: false },
    email: { isInvalid: false }
  });
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
  const onSubmitForm = (event) => {
    event.preventDefault();
    checkValidate();
    if (
      userValue.firstName === '' ||
      userValue.lastName === '' ||
      userValue.email === '' ||
      !validateEmail(userValue.email)
    ) {
      return;
    }
    props.onSubmit1(userValue);
  };

  const validateEmail = (email) => {
    const expression = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    return expression.test(String(email).toLowerCase());
  };

  const checkValidate = () => {
    const newUserValidate = { ...userValidate };
    if (userValue.firstName === '') {
      newUserValidate.firstName.isInvalid = true;
    }
    if (userValue.lastName === '') {
      newUserValidate.lastName.isInvalid = true;
    }
    if (userValue.email === '') {
      newUserValidate.email.isInvalid = true;
    } else {
      setIsValidEmail(!validateEmail(userValue.email));
    }
    setUserValidate(newUserValidate);
  };

  const onValueChange = (event) => {
    const newUserValue = { ...userValue };
    newUserValue[event.target.name] = event.target.value;
    setUserValue(newUserValue);
    const newUserValidate = { ...userValidate };
    newUserValidate[event.target.name].isInvalid = event.target.value === '';
    setUserValidate(newUserValidate);
  };

  const handleBlur = (event) => {
    const newUserValidate = { ...userValidate };
    if (event.target.value === '') {
      newUserValidate[event.target.name].isInvalid = true;
      setUserValidate(newUserValidate);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="row">
        <div className="col-12 col-sm-6">
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className={`form-control ${
                userValidate.firstName.isInvalid ? 'is-invalid' : ''
              }`}
              id="firstName"
              name="firstName"
              value={userValue.firstName}
              onChange={(event) => onValueChange(event)}
              autoComplete="off"
              placeholder="First name"
              onBlur={handleBlur}
            />
            {userValidate.firstName.isInvalid && (
              <div className="d-block invalid-feedback">
                First name is required
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className={`form-control ${
                userValidate.lastName.isInvalid ? 'is-invalid' : ''
              }`}
              id="lastName"
              name="lastName"
              value={userValue.lastName}
              onChange={(event) => onValueChange(event)}
              autoComplete="off"
              placeholder="Last name"
              onBlur={handleBlur}
            />
            {userValidate.lastName.isInvalid && (
              <div className="d-block invalid-feedback">
                Last name is required
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className={`form-control ${
            userValidate.email.isInvalid ? 'is-invalid' : ''
          }`}
          id="email"
          name="email"
          value={userValue.email}
          onChange={(event) => onValueChange(event)}
          autoComplete="off"
          placeholder="Email"
          onBlur={handleBlur}
        />
        {userValidate.email.isInvalid && (
          <div className="d-block invalid-feedback">Email is required</div>
        )}
        {isValidEmail && (
          <div className="d-block invalid-feedback">Email is invalid</div>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
