import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserForm from '../../components/UserForm';
import { fetchUser, editUser } from './actions';
import history from '../../utils/history';
import Spinner from 'react-bootstrap/Spinner';
import spinnerCss from './userEdit.module.scss';
import { showSuccess, showError } from '../../utils/showToast';

const UserEdit = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser(props.match.params.id));
  }, [props.match.params.id, dispatch]);

  const onSubmitEdit = async (user) => {
    try {
      await editUser(props.match.params.id, user);
      showSuccess();
      history.push('/');
    } catch (error) {
      showError(error.response.data.error);
    }
  };

  return (
    <div>
      <h3>Edit a User</h3>
      <div
        className={`d-flex justify-content-center ${spinnerCss.spinnerCenter}`}
      >
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
      <UserForm onSubmit1={onSubmitEdit} initialValues={user} />
    </div>
  );
};

export default UserEdit;
