//import React from 'react'
import { NavLink } from "react-router-dom";
//import Student from "./Student";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div
        className="card mb-3"
        style={{
          width: "97.5vw",
          height: "76vh",
          margin: "-2%",
          padding: "0",
        }}
      >
        <div className="card-body">
          <h5 className="card-title" style={{ padding: "2%" }}>
            Examination Processing System
          </h5>
          <p
            className="card-text"
            style={{ textAlign: "center", minHeight: "40vh" }}
          >
            n publishing and graphic design, Lorem ipsum is a placeholder text
            <br />
            commonly used to demonstrate the visual form of a document or a
            <br />
            typeface without relying on meaningful content. Lorem ipsum may be
            <br />
            used as a placeholder before final copy is available n publishing
            <br />
            and graphic design, Lorem ipsum is a placeholder text
            <br />
            commonly used to demonstrate the visual form of a document or a
            <br />
            typeface without relying on meaningful content. Lorem ipsum may be
            <br />
            used as a placeholder before final copy is available
          </p>

          <NavLink to="/student">
            <a
              className="btn btn-primary"
              style={{
                padding: "2%",
                margin: "2%",
                borderRadius: "40%",
              }}
            >
              Student
            </a>
          </NavLink>
          <NavLink to="/login">
            <a
              className="btn btn-primary"
              style={{
                padding: "2%",
                margin: "2%",
                borderRadius: "40%",
              }}
            >
              Admin
            </a>
          </NavLink>
          <NavLink to="/login">
            <a
              className="btn btn-primary"
              style={{
                padding: "2%",
                margin: "2%",
                borderRadius: "40%",
              }}
            >
              Lecturer
            </a>
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
