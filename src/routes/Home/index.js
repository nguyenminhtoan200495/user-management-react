import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from './actions';
import ConfirmModal from '../../components/ConfirmModal';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userList);
  const [currentId, setCurrentId] = useState(undefined);
  const [show, setShow] = useState(false);
  const modalTitle = 'Delete modal';
  const modalBody = 'Do you want to delete this user?';

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onDelete = (id) => {
    setShow(true);
    setCurrentId(id);
  };

  const doDelete = async () => {
    await deleteUser(currentId);
    setShow(false);
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
        doAction={doDelete}
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

export default Users;
