import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import './Header.css';

const Header = () => {
  const { authTokens } = useAuth();
  return authTokens ? (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="is-active"
            >
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/users/create"
              className="nav-link"
              activeClassName="is-active"
            >
              Create
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  ) : (
    <></>
  );
};

export default Header;
