//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar2 from "./Sidebar2";
import AdmHome from "./AdmHome";

function Admin2() {
  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
          <Sidebar2 />
        </div>
        <div className="col-4 col-md-2"></div>
        <div className="col">
          <AdmHome />
        </div>
      </div>
    </div>
  );
}

export default Admin2;
