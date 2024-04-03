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
  attempts: string[];
}

function StudentInfo() {
  const [students, setStudents] = useState<Student[]>([]);
  const [updatingStudent, setUpdatingStudent] = useState<Student | null>(null);
  const [selectedSemester, setSelectedSemester] = useState("1");

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
    students.map((student) => (
      <div key={student.userId}>
        <div className="card mt-3">...</div>

        <div className="card mt-3">...</div>
      </div>
    ));
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
    <>
      <div className="w-100 bg-white rounded p-3" style={{ marginTop: "10px" }}>
        {updatingStudent && (
          <div className="modal">
            <div className="modal-content"></div>
          </div>
        )}
        <Link to="" className="btn btn-success">
          Student Scores
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
                        Upd
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => handleDelete(student.userId)}
                      >
                        Del
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h4 style={{ marginTop: "10px", color: "white" }}>Reports</h4>
      <div className="card mt-3">
        <div className="card-header">
          <h6>Students who passed all courses in a Semester</h6>
        </div>
        <ul className="list-group list-group-flush">
          {students
            .filter(
              (student) =>
                student.exam.reduce((total, exam) => total + exam.score, 0) >
                250
            )
            .map((student) => (
              <li className="list-group-item" key={student.userId}>
                {student.userId}
              </li>
            ))}
        </ul>
      </div>
      <div className="card mt-3">
        <div className="card-header">
          <h6>List Of Fails</h6>
        </div>
        <ul className="list-group list-group-flush">
          {students
            .map((student) => ({
              userId: student.userId,
              courseIds: student.exam
                .filter((exam) => exam.score < 50)
                .map((exam) => exam.courseId),
            }))
            .filter((student) => student.courseIds.length > 0)
            .map((student) => (
              <li className="list-group-item" key={student.userId}>
                {student.userId} - {student.courseIds.join(", ")}
              </li>
            ))}
        </ul>
      </div>
      <div className="card mt-3">
        <div className="card-header">
          <h6>List Of Supplementary Exams</h6>
        </div>
        <ul className="list-group list-group-flush">
          {students
            .map((student) => ({
              userId: student.userId,
              courseIds: student.exam
                .filter((exam) => exam.score < 50)
                .map((exam) => exam.courseId),
            }))
            .filter((student) => student.courseIds.length > 0)
            .map((student) => (
              <li className="list-group-item" key={student.userId}>
                {student.userId} - {student.courseIds.join(", ")}
              </li>
            ))}
        </ul>
      </div>
      <div className="card mt-3">
        <div className="card-header">
          <h6>List of Specials</h6>
        </div>
        <ul className="list-group list-group-flush">
          {students
            .filter((student) => student.exam.length < 5)
            .map((student) => (
              <li className="list-group-item" key={student.userId}>
                {student.userId}
              </li>
            ))}
        </ul>
      </div>
      <div className="card mt-3">
        <div className="card-header">
          <h6>Missing both Cat and Exam Marks</h6>
        </div>
        <ul className="list-group list-group-flush">
          {students
            .filter(
              (student) =>
                student.exam.length < 5 && student.catScore.length < 5
            )
            .map((student) => (
              <li className="list-group-item" key={student.userId}>
                {student.userId}
              </li>
            ))}
        </ul>
      </div>
      <div className="card mt-3">
        <div className="card-header">
          <h6>Students with Second Attempts</h6>
        </div>
        <ul className="list-group list-group-flush">
          {students
            .filter((student) => student.attempts)
            .map((student) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={student.userId}
              >
                <span>{student.userId}</span>
                <span>{student.attempts}</span>
              </li>
            ))}
        </ul>
      </div>
      {students.map((student) => (
        <>
          <div className="card mt-3">
            <div className="card-header">
              <h6>Semester 1 Executive Summary</h6>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Exam Score</th>
                  <th>Assignment Score</th>
                  <th>Cat Score</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {student.exam.map((exam, index) => {
                  const assignmentScore =
                    student.assignmentScore.find(
                      (as) => as.courseId === exam.courseId
                    )?.score || 0;
                  const catScore =
                    student.catScore.find((cs) => cs.courseId === exam.courseId)
                      ?.score || 0;
                  return (
                    <tr key={student.userId + index}>
                      <td>{student.userId}</td>
                      <td>{exam.courseId}</td>
                      <td>{exam.score}</td>
                      <td>{assignmentScore}</td>
                      <td>{catScore}</td>
                      <td>
                        <strong>
                          {exam.score + assignmentScore + catScore}
                        </strong>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td></td>
                  <td>
                    <strong>
                      {student.exam.reduce(
                        (total, exam) => total + exam.score,
                        0
                      )}
                    </strong>
                  </td>
                  <td>
                    <strong>
                      {student.assignmentScore.reduce(
                        (total, as) => total + (as?.score || 0),
                        0
                      )}
                    </strong>
                  </td>
                  <td>
                    <strong>
                      {student.catScore.reduce(
                        (total, cs) => total + (cs?.score || 0),
                        0
                      )}
                    </strong>
                  </td>
                  <td>
                    <strong>
                      {student.exam.reduce((total, exam) => {
                        const assignmentScore =
                          student.assignmentScore.find(
                            (as) => as.courseId === exam.courseId
                          )?.score || 0;
                        const catScore =
                          student.catScore.find(
                            (cs) => cs.courseId === exam.courseId
                          )?.score || 0;
                        return total + exam.score + assignmentScore + catScore;
                      }, 0)}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Mean</strong>
                  </td>
                  <td></td>
                  <td>
                    <strong>
                      {student.exam.reduce(
                        (total, exam) => total + exam.score,
                        0
                      ) / student.exam.length}
                    </strong>
                  </td>
                  <td>
                    <strong>
                      {student.assignmentScore.reduce(
                        (total, as) => total + (as?.score || 0),
                        0
                      ) / student.assignmentScore.length}
                    </strong>
                  </td>
                  <td>
                    <strong>
                      {student.catScore.reduce(
                        (total, cs) => total + (cs?.score || 0),
                        0
                      ) / student.catScore.length}
                    </strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card mt-3">
            <div className="card-header">
              <h6>Recommendations for {student.userId}</h6>
            </div>
            <ul className="list-group list-group-flush">
              {student.exam.map((exam, index) => {
                const assignmentScore =
                  student.assignmentScore.find(
                    (as) => as.courseId === exam.courseId
                  )?.score || 0;
                const catScore =
                  student.catScore.find((cs) => cs.courseId === exam.courseId)
                    ?.score || 0;
                const total = exam.score + assignmentScore + catScore;
                return (
                  <li
                    className="list-group-item d-flex justify-content-between"
                    key={student.userId + index}
                  >
                    <span>{exam.courseId}</span>
                    <span>{total > 150 ? "Pass" : "Fail"}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ))}
    </>
  );
}

export default StudentInfo;
