import React from 'react';
import { useDispatch } from 'react-redux';
import UserForm from '../../components/UserForm';
import { createUser } from './actions';
import history from '../../utils/history';
import { showSuccess, showError } from '../../utils/showToast';

const UserCreate = () => {
  const dispatch = useDispatch();
  const onSubmitCreate = async (user) => {
    try {
      await dispatch(createUser(user));
      showSuccess();
      history.push('/');
    } catch (error) {
      showError(error.response.data.error);
    }
  };

  return (
    <div>
      <h3 className="pb-2">Create a User</h3>
      <UserForm
        onSubmit1={onSubmitCreate}
        initialValues={{ firstName: 'ab' }}
      />
    </div>
  );
};

export default UserCreate;
