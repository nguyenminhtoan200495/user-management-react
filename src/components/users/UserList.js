import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers, deleteUser } from '../../actions';
import ConfirmModal from '../ConfirmModal';

const UserList = ({ users, fetchUsers }) => {
  const [currentId, setCurrentId] = useState(undefined);
  const [show, setShow] = useState(false);
  const modalTitle = 'Delete modal';
  const modalBody = 'Do you want to delete this user?';
  useEffect(() => {
    fetchUsers();
  }, []);

  const onDelete = (id) => {
    setShow(true);
    setCurrentId(id);
  };

  const doDelete = async (currentId) => {
    console.log('currentId: ', currentId);
    await deleteUser(currentId);
  };

  return (
    <div>
      <div className="row">
        <div className="col-12 py-2">
          <Link to="users/create" className="btn btn-primary float-right">
            Create
          </Link>
        </div>
      </div>
      <ConfirmModal
        show={show}
        doShow={setShow}
        doDelete={doDelete}
        id={currentId}
        modalTitle={modalTitle}
        modalBody={modalBody}
      />
      <ul className="list-group">
        {users.userList.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            <span>
              {user.first_name} {user.last_name}
            </span>
            <span>
              <Link to={`users/edit/${user.id}`} className="btn btn-primary">
                Edit
              </Link>
              <button
                onClick={() => onDelete(user.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.userList };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
