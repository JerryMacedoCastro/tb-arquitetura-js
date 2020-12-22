import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link active">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link active">
            List Users
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link active">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/books" className="nav-link active">
            Books
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
