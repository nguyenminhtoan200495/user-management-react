import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { fetchUser, editUser } from '../../actions';
import history from '../../history';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import './user.scss';

const UserEdit = (props) => {
  useEffect(() => {
    props.fetchUser(props.match.params.id);
  }, []);

  const onSubmitEdit = async (user) => {
    await props.editUser(props.match.params.id, user);
    showSuccess();
    history.push('/');
  };

  const showSuccess = () => {
    toast.success('Success!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  return (
    <div>
      <h3>Edit a User</h3>
      <div className="d-flex justify-content-center spinner-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
      <UserForm onSubmit1={onSubmitEdit} initialValues={props.user} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user.user };
};

export default connect(mapStateToProps, { fetchUser, editUser })(UserEdit);
