import { useEffect, useState } from "react";

function Display() {
  const [data, setData] = useState<any[]>([]);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const userName = prompt("Please enter your name");
    setName(userName);

    fetch("http://localhost:3001/getCourses")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        padding: "50px",
        alignContent: "center",
        border: "1px solid #ccc", // Add a border
        borderRadius: "10px", // Round the corners
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", // Add a shadow
        backgroundColor: "#fff", // Set a background color
      }}
    >
      <table>
        <thead>
          <tr>
            <th style={{ padding: "0 1px" }}></th>
            <th colSpan={2}>Academic Year</th> {/* Added Academic Year label */}
          </tr>
          <tr>
            <th style={{ padding: "-20px 20px" }}>Student Name </th>
            <th>Sem 1</th>
            <th>Sem 2</th> {/* Added Sem 2 column */}
          </tr>
        </thead>
        <tbody>
          {data
            .flatMap((course) =>
              course.students
                .filter(
                  (student: { userId: string | null }) =>
                    student.userId === name
                )
                .map((student: { userId: any }) => ({
                  userId: student.userId,
                  sem1: course.courseId, // Sem 1 courses
                  sem2: course.academicYear, // Sem 2 courses
                }))
            )
            .map((item, i) => (
              <tr key={i}>
                <td>{item.userId}</td>
                <td>{item.sem1}</td> {/* Display Sem 1 courses */}
                <td>{item.sem2}</td> {/* Display Sem 2 courses */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Display;
