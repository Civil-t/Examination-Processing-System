import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Employee {
  _id: string;
  name: string;
  email: string;
  password: string;
}

function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((result) => setEmployees(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id: string) => {
    axios
      .delete(`http://localhost:3001/deleteEmployee/${id}`)
      .then((res) => {
        console.log(res);
        // Remove the deleted employee from the state
        setEmployees(employees.filter((employee) => employee._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-100 bg-white rounded p-3" style={{ marginTop: "10px" }}>
      <Link to="/signup" className="btn btn-success">
        Add +
      </Link>
      <table className="table w-100">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.password}</td>
                <td>
                  <div className="d-flex">
                    <Link
                      to={`/update/${employee._id}`}
                      className="btn btn-success mr-2"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(employee._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
