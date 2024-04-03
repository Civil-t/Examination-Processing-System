import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Select() {
  const courses = [
    "APT",
    "IST",
    "IR",
    "BCOM",
    "LAW",
    "ENG",
    "SPN",
    "APP",
    "CMS",
    "FIN",
    "ENT",
    "BUS",
  ]; // Replace with your actual courses

  const [students, setStudents] = useState<any[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedStudent, setSelectedStudent] = useState<string>("");

  // Add a new state for the selected semester
  const [selectedSemester, setSelectedSemester] = useState<string>("");

  // Add a new handler for the semester change
  const handleSemesterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSemester(event.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:3001/getStudents")
      .then((response) => response.json())
      .then((data) => {
        const flattenedStudents = data.flatMap(
          (course: { [x: string]: any; students: any[] }) =>
            course.students.map((student) => ({
              userId: student.userId,
              courseId: course.courseId,
              academicYear: course.academicYear, // Change this line
              semester: course.semester, // And this line
            }))
        );
        setStudents(flattenedStudents);
      });
  }, []);

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(event.target.value);
  };
  const handleStudentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStudent(event.target.value);
  };

  const filterSemester1Students = () => {
    return students.filter((student) => {
      return student.courseId
        ? student.courseId.includes(selectedCourse) && student.semester === "1"
        : false;
    });
  };

  const filterSemester2Students = () => {
    return students.filter((student) => {
      return student.academicYear
        ? student.academicYear.includes(selectedCourse) &&
            student.semester === "2"
        : false;
    });
  };

  let filteredStudents: any[] = [];
  if (selectedSemester === "Sem 1") {
    filteredStudents = filterSemester1Students();
  } else if (selectedSemester === "Sem 2") {
    filteredStudents = filterSemester2Students();
  }

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const assignment1 = (
      document.getElementById("assignment1") as HTMLInputElement
    )?.value;
    const assignment2 = (
      document.getElementById("assignment2") as HTMLInputElement
    )?.value;
    const cat1 = (document.getElementById("cat1") as HTMLInputElement)?.value;
    const cat2 = (document.getElementById("cat2") as HTMLInputElement)?.value;
    const examScore = (document.getElementById("examScore") as HTMLInputElement)
      ?.value;
    const assignmentScore = (
      document.getElementById("assignmentScore") as HTMLInputElement
    )?.value;
    const catScore = (document.getElementById("catScore") as HTMLInputElement)
      ?.value;

    console.log(
      assignment1,
      assignment2,
      cat1,
      cat2,
      examScore,
      assignmentScore,
      catScore,
      selectedStudent
    );

    const newAssignments = [assignment1, assignment2];
    const newCats = [cat1, cat2];
    const newExam = {
      courseId: selectedCourse,
      score: Number(examScore),
    };
    const newAssignmentScore = {
      courseId: selectedCourse,
      score: Number(assignmentScore),
    };
    const newCatScore = {
      courseId: selectedCourse,
      score: Number(catScore),
    };

    const updatedStudents = filteredStudents.map((student) => {
      student.assignments = student.assignments || [];
      student.cats = student.cats || [];
      student.exam = student.exam || [];
      student.assignmentScore = student.assignmentScore || [];
      student.catScore = student.catScore || [];

      student.assignments.push(...newAssignments);
      student.cats.push(...newCats);

      if (student.userId === selectedStudent) {
        student.exam.push(newExam);
        student.assignmentScore.push(newAssignmentScore);
        student.catScore.push(newCatScore);
      }

      return student;
    });
    console.log(selectedStudent, newExam, newAssignmentScore, newCatScore);

    axios
      .post("http://localhost:3001/updateStudents", updatedStudents, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error:", error));
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "10px",
          position: "absolute", // Add this
          top: "", // Add this
        }}
      >
        <label>Select Course you are teaching</label>
        <select
          style={{
            padding: "10px",
            border: "1px solid #ced4da",
            borderRadius: "5px",
            backgroundColor: "#f8f9fa", // Add a background color
          }}
          onChange={handleCourseChange}
        >
          <option value="">Select a course you teach</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>
        <label>Select Student</label>
        <select
          style={{
            padding: "10px",
            border: "1px solid #ced4da",
            borderRadius: "5px",
            backgroundColor: "#f8f9fa", // Add a background color
          }}
          onChange={handleStudentChange}
        >
          <option value="">Select a student</option>
          {filteredStudents.map((student, index) => (
            <option key={index} value={student.userId}>
              {student.userId}
            </option>
          ))}
        </select>
        <label>Select Semester</label>
        <select
          style={{
            padding: "10px",
            border: "1px solid #ced4da",
            borderRadius: "5px",
            backgroundColor: "#f8f9fa",
          }}
          onChange={handleSemesterChange}
        >
          <option value="">Select a semester</option>
          <option value="Sem 1">Sem 1</option>
          <option value="Sem 2">Sem 2</option>
        </select>
      </div>

      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          margin: "0 auto",
          border: "1px solid #ced4da", // Add a border
          padding: "20px", // Add some padding
          borderRadius: "5px", // Round the corners
          backgroundColor: "#f8f9fa", // Add a background color
        }}
      >
        <label style={{ marginBottom: "10px" }}>
          Assignment 1:
          <input
            type="text"
            id="assignment1"
            style={{ width: "100%", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Assignment 2:
          <input
            type="text"
            id="assignment2"
            style={{ width: "100%", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          CAT 1:
          <input
            type="text"
            id="cat1"
            style={{ width: "100%", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          CAT 2:
          <input
            type="text"
            id="cat2"
            style={{ width: "100%", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Exam Score:
          <input
            type="number"
            id="examScore"
            style={{ width: "100%", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Assignment Score:
          <input
            type="number"
            id="assignmentScore"
            style={{ width: "100%", padding: "5px" }}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          Cat Score:
          <input
            type="number"
            id="catScore"
            style={{ width: "100%", padding: "5px" }}
          />
        </label>
        <button type="submit" className="btn btn-success w-100 rounded-0 mt-3">
          Submit
        </button>
      </form>
    </>
  );
}

export default Select;
