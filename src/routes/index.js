import React, { Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';
import Header from '../components/Header';
import PrivateRoute from '../components/PrivateRoute';
const Users = lazy(() => import('./Home'));
const UserCreate = lazy(() => import('./UserCreate'));
const UserEdit = lazy(() => import('./UserEdit'));
const SignupForm = lazy(() => import('./Signup'));
const Login = lazy(() => import('./Login'));
const Admin = lazy(() => import('./Admin'));

const AppRouter = () => {
  return (
    <Router history={history}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/users/sign-up" exact component={SignupForm}></Route>
          <PrivateRoute path="/admin" exact component={Admin} />
          <PrivateRoute path="/" exact component={Users} />
          <PrivateRoute path="/users/create" exact component={UserCreate} />
          <PrivateRoute path="/users/edit/:id" exact component={UserEdit} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
