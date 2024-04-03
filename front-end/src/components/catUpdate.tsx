import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateExam() {
  const { userId } = useParams();
  const [examCourseId, setExamCourseId] = useState<string>();
  const [examScore, setExamScore] = useState<number>();
  const [students, setStudents] = useState<Student[]>([]);

  const navigate = useNavigate();
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

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getStudent/${userId}`)
      .then((result) => {
        const exams = result.data;
        // Assuming you want to set the courseId and score of the first exam
        if (exams.length > 0) {
          setExamCourseId(exams[0].courseId);
          setExamScore(exams[0].score);
        }
      })
      .catch((err) => console.log(err));
  }, [userId]);

  const updateExamScore = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/updateStudent/${examCourseId}/${userId}`, {
        exam: examScore,
      })
      .then((result) => {
        console.log(result);
        navigate("/courses");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={updateExamScore}>
          <h2>Update Exam Score</h2>
          <div className="mb-2">
            <label htmlFor="">Exam CourseId</label>
            <input
              type="text"
              placeholder="Enter Exam CourseId"
              className="form-control"
              value={examCourseId}
              onChange={(e) => setExamCourseId(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Exam Score</label>
            <input
              type="number"
              placeholder="Enter Exam Score"
              className="form-control"
              value={examScore}
              onChange={(e) => setExamScore(Number(e.target.value))}
            />
          </div>
          <button className="btn btn-success">Update Exam Score</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateExam;
