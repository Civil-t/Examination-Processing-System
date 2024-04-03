//import React from 'react'
import { Link } from "react-router-dom";
import Student from "./Student";

import LecNav from "./LecNav";
import Footer from "./Footer";

function Lecturer() {
  return (
    <>
      <LecNav />
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
          <h5
            className="card-title"
            style={{ padding: "2%", textAlign: "center" }}
          >
            React University welcomes you!
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              to="/select"
              className="btn btn-primary"
              style={{
                padding: "2%",
                margin: "2%",
                borderRadius: "40%",
              }}
            >
              Create CAT
            </Link>

            <Link
              to="/select"
              className="btn btn-primary"
              style={{
                padding: "2%",
                margin: "2%",
                borderRadius: "40%",
              }}
            >
              Create Assignment
            </Link>
            <Link
              to="/select"
              className="btn btn-primary"
              style={{
                padding: "2%",
                margin: "2%",
                borderRadius: "40%",
              }}
            >
              Enter Exam Score
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Lecturer;
