import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Score {
  courseId: string;
  score: number;
}

interface Student {
  userId: string;
  exam: Score[];
  assignmentScore: Score[];
  catScore: Score[];
  semester: string;
}

function StudentInfo2() {
  const [students, setStudents] = useState<Student[]>([]);
  const [updatingStudent, setUpdatingStudent] = useState<Student | null>(null);
  const [selectedSemester, setSelectedSemester] = useState("2");

  useEffect(() => {
    axios
      .get("http://localhost:3001/courses")
      .then((result) => {
        const students = result.data
          .filter(
            (course: { semester: string }) =>
              course.semester === selectedSemester
          ) // Add this line
          .flatMap((course: { students: any }) => course.students);
        setStudents(students);
      })
      .catch((err) => console.log(err));
  }, [selectedSemester]); // Add this line

  // ...

  {
    students.map((student) => {
      // ...
    });
  }

  const handleDelete = (id: string) => {
    axios
      .delete(`http://localhost:3001/deleteStudent/${id}`)
      .then((res) => {
        console.log(res);
        setStudents(students.filter((student) => student.userId !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (updatingStudent) {
      updatingStudent.exam.forEach((examScore, index) => {
        axios
          .put(
            `http://localhost:3001/updateStudent/${examScore.courseId}/${updatingStudent.userId}`,
            { exam: examScore.score }
          )
          .catch((err) => console.log(err));
      });

      updatingStudent.assignmentScore.forEach((assignmentScore, index) => {
        axios
          .put(
            `http://localhost:3001/updateStudent/${assignmentScore.courseId}/${updatingStudent.userId}`,
            { assignmentScore: assignmentScore.score }
          )
          .catch((err) => console.log(err));
      });

      updatingStudent.catScore.forEach((catScore, index) => {
        axios
          .put(
            `http://localhost:3001/updateStudent/${catScore.courseId}/${updatingStudent.userId}`,
            { catScore: catScore.score }
          )
          .catch((err) => console.log(err));
      });

      // Update the students state here
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.userId === updatingStudent.userId ? updatingStudent : student
        )
      );
      // Clear the updatingStudent state
      setUpdatingStudent(null);
    }
  };

  return (
    <div className="w-100 bg-white rounded p-3" style={{ marginTop: "10px" }}>
      {updatingStudent && (
        <div className="modal">
          <div className="modal-content"></div>
        </div>
      )}
      <Link to="" className="btn btn-success">
        Semester 2
      </Link>

      <table className="table w-100">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Exam</th>
            <th>Assignment Score</th>
            <th>CAT Score</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.userId}>
                <td>{student.userId}</td>
                <td>
                  {student.exam
                    .map((e) => `${e.courseId}: ${e.score}`)
                    .join(", ")}
                </td>
                <td>
                  {student.assignmentScore
                    .map((a) => `${a.courseId}: ${a.score}`)
                    .join(", ")}
                </td>
                <td>
                  {student.catScore
                    .map((c) => `${c.courseId}: ${c.score}`)
                    .join(", ")}
                </td>
                <td>
                  <div className="d-flex">
                    <Link
                      to="/updateCat/:courseId/:userId"
                      className="btn btn-success mr-2"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(student.userId)}
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

export default StudentInfo2;
