//import React from "react";
import AdmNav from "./AdmNav";
import Users from "./AdminFunctionality/Users";
import StudentInfo from "./AdminFunctionality/studentinfo";
import StudentInfo2 from "./AdminFunctionality/studentinfo2";

function AdmHome() {
  return (
    <div className="px-3" style={{ marginTop: "40px" }}>
      <AdmNav />

      <Users />
      <StudentInfo />
    </div>
  );
}

export default AdmHome;
