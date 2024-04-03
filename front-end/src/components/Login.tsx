import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Login() {
  //variables to store user input from input fields
  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const navigate = useNavigate();

  //function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          if (email === "admin@ad.com") {
            navigate("/admin");
          } else if (
            email === "student1@stu.com" ||
            email === "student2@stu.com"
          ) {
            navigate("/student");
          } else if (
            email === "lecturer1@lec.com" ||
            email === "lecturer2@lec.com"
          ) {
            navigate("/lecturer");
          } else {
            navigate("/");
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              name="email"
              placeholder="Enter email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                className="form-control rounded-0"
                name="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
