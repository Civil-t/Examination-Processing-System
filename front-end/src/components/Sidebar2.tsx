//import React from "react";
import "./sidestyle.css";

function Sidebar2() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="bi bi-bootstrap-fill me-2 fs-4"></i>
        <span className="brand-name fs-4">Admin</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2">
          <i className="bi bi-house fs- me-3"></i>
          <span>Home</span>
        </a>
        <a className="list-group-item py-2 ">
          <i className="bi bi-graph-up-arrow fs-5 me-3"></i>
          <span>Exams</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-5 me-3"></i>
          <span>Report</span>
        </a>

        <a className="list-group-item py-2">
          <i className="bi bi-power fs-5 me-3"></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar2;
