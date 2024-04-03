import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Admin2 from "./components/Admin2";
import Lecturer from "./components/Lecturer";
import Student from "./components/Student";
import { Login } from "./components/Login";
import SignUp from "./components/SignUp";
import Select from "./components/Select";
import Users from "./components/AdminFunctionality/Users";
import UpdateUser from "./components/AdminFunctionality/UpdateUser";
import StudentInfo from "./components/AdminFunctionality/studentinfo";
//import UpdateCat from "./components/catUpdate";
import StudentInfo2 from "./components/AdminFunctionality/studentinfo2";
import UpdateExam from "./components/catUpdate";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="admin" element={<Admin2 />} />
      <Route path="lecturer" element={<Lecturer />} />
      <Route path="student" element={<Student />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="select" element={<Select />} />
      <Route path="user" element={<Users />} />
      <Route path="/update/:id" element={<UpdateUser />} />
      <Route path="studentinfo" element={<StudentInfo />} />
      <Route path="studentinfo2" element={<StudentInfo2 />} />

      <Route path="/updateCat/:courseId/:userId" element={<UpdateExam />} />
      <Route path="" element={<StudentInfo />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

