//import React from "react";
//import { Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Logo"
              width="80"
              height="27"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon ms-auto"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav  mb-2 mb-lg-0 ms-auto"
              style={{ marginRight: "20px" }}
            >
              <li className="nav-item">
                <NavLink to="/">
                  <a className="nav-link active" aria-current="page">
                    <i
                      className="fa-solid fa-house"
                      style={{ marginRight: "4px" }}
                    ></i>
                    Home
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/student">
                  <a className="nav-link active" aria-current="page">
                    <i
                      className="fa-solid fa-graduation-cap"
                      style={{ marginRight: "4px" }}
                    ></i>
                    Student
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/admin">
                  <a className="nav-link active" aria-current="page">
                    <i
                      className="fa-solid fa-gears"
                      style={{ marginRight: "4px" }}
                    ></i>
                    Admin
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/lecturer">
                  <a className="nav-link active" aria-current="page">
                    <i
                      className="fa-solid fa-user-tie"
                      style={{ marginRight: "4px" }}
                    ></i>
                    Lecturer
                  </a>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
