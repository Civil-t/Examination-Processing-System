import React from "react";
import { NavLink } from "react-router-dom";

function LecNav() {
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
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="\components\Student.tsx"
                  >
                    <i
                      className="fa-solid fa-house"
                      style={{ marginRight: "4px" }}
                    ></i>
                    Home
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.google.com/">
                  <i
                    className="bi bi-box-arrow-in-right"
                    style={{ marginRight: "4px" }}
                  ></i>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default LecNav;
