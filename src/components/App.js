import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import UserList from './users/UserList';
import UserCreate from './users/UserCreate';
import UserEdit from './users/UserEdit';
import SignupForm from './users/SignupForm';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={UserList}></Route>
          <Route path="/users/create" exact component={UserCreate}></Route>
          <Route path="/users/edit/:id" exact component={UserEdit}></Route>
          <Route path="/users/sign-up" exact component={SignupForm}></Route>
        </div>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
