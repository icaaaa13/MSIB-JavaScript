import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom py-3 sticky-top">
      <div className="container">
        
        <NavLink className="navbar-brand fw-bold text-dark fs-4 d-flex align-items-center gap-2" to="/">
          <div 
            className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center p-2"
            style={{ width: '38px', height: '38px' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-book-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.334-.896 3.739-1.038 1.405-.14 2.842.006 3.554.608.712-.602 2.149-.748 3.554-.608 1.405.142 2.857.638 3.74 1.038A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
            </svg>
          </div>
          <span className="ms-1" style={{ letterSpacing: '-0.5px' }}>
            bookstore
          </span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'fw-bold text-primary' : 'text-secondary'}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'fw-bold text-primary' : 'text-secondary'}`
                }
              >
                Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'fw-bold text-primary' : 'text-secondary'}`
                }
              >
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'fw-bold text-primary' : 'text-secondary'}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <Link to="/login" className="btn btn-outline-primary px-3">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary px-3">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;