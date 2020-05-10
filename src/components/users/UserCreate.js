import React from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { createUser } from '../../actions';
import history from '../../history';

const UserCreate = (props) => {
  const onSubmitCreate = async (user) => {
    await props.createUser(user);
    history.push('/');
  };

  return (
    <div>
      <h3 className="pb-2">Create a User</h3>
      <UserForm onSubmit1={onSubmitCreate} initialValues={{}} />
    </div>
  );
};

export default connect(null, { createUser })(UserCreate);
