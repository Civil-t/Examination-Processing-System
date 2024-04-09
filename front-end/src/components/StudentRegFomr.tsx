import axios from "axios";
import { useState } from "react";
import Display from "./Display";

function Front() {
  const [showDisplay, setShowDisplay] = useState(false);
  const [values, setValues] = useState({
    userId: "",
    AcademicYear: "",
    Semester: "",
    Attempt: "",
    CoursesDone: [],
  });
  const handleChange = (event: {
    target: { name: any; value: any; checked: boolean };
  }) => {
    if (event.target.name === "CoursesDone") {
      if (event.target.checked) {
        setValues({
          ...values,
          [event.target.name]: [...values.CoursesDone, event.target.value],
        });
      } else {
        setValues({
          ...values,
          [event.target.name]: values.CoursesDone.filter(
            (course) => course !== event.target.value
          ),
        });
      }
    } else {
      setValues({ ...values, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (values.CoursesDone.length != 5) {
      alert("Register for 5 courses");
      return;
    }

    let finalValues = {
      ...values,
      userId: values.userId,
      courseId: values.Semester === "1" ? values.CoursesDone.join(",") : "",
      academicYear:
        values.Semester === "2"
          ? values.CoursesDone.join(",")
          : values.AcademicYear,
      semester: values.Semester,
      attempts: values.Attempt,
      students: [
        {
          userId: values.userId,
          assignments: [],
          cats: [],
          exam: [
            {
              courseId: String,
              score: Number,
            },
          ],
        },
      ],
    };

    // Check if user exists

    // User does not exist, create a new user
    axios
      .post("http://localhost:3001/registerCourse", finalValues)
      .then(() => console.log("Registered Successfully"))
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    setShowDisplay(true);
  };

  return (
    <div
      className="d-flex w-100 justify-content-center align-items-center"
      style={{ backgroundColor: "#fff", marginTop: "40px" }}
    >
      <div
        className="card p-3 rounded w-100"
        style={{ maxWidth: "1000px", backgroundColor: "#f8f9fa" }}
      >
        <div className="card-body">
          <h2 className="card-title">Student Course Registration</h2>
          <div style={{ display: "flex" }}>
            <form onSubmit={handleSubmit} className="w-100">
              <div className="mb-3">
                <label className="form-label">Student Name:</label>
                <input
                  type="text"
                  name="userId"
                  className="form-control rounded-0"
                  onChange={handleChange}
                />
                <div className="mb-3">
                  <label className="form-label">Attempt:</label>
                  <input
                    type="text"
                    name="Attempt"
                    placeholder="Enter Course name you are attempting for the second time"
                    className="form-control rounded-0"
                    onChange={handleChange}
                  />
                </div>

                <label className="form-label">Semester:</label>
                <div
                  className="form-check"
                  style={{
                    display: "inline-block",
                    marginRight: "10px",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Semester"
                    id="semester1"
                    value="1"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="semester1">
                    1
                  </label>
                </div>
                <div className="form-check" style={{ display: "inline-block" }}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Semester"
                    id="semester2"
                    value="2"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="semester2">
                    2
                  </label>
                  <br />
                </div>
              </div>
              <br />

              <h6 className="mt-3">Register Courses:</h6>
              <br />

              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="CoursesDone"
                  id="inlineCheckbox1"
                  value="APT"
                  onChange={handleChange}
                />
                <label className="form-check-label">APT </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="CoursesDone"
                  id="inlineCheckbox2"
                  value="IST"
                  onChange={handleChange}
                  style={{ marginLeft: "10px" }}
                />
                <label className="form-check-label">IST </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="CoursesDone"
                  id="inlineCheckbox3"
                  value="IR"
                  onChange={handleChange}
                  style={{ marginLeft: "10px" }}
                />
                <label className="form-check-label">IR </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="CoursesDone"
                  id="inlineCheckbox4"
                  value="BCOM"
                  onChange={handleChange}
                  style={{ marginLeft: "10px" }}
                />
                <label className="form-check-label">BCOM</label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="CoursesDone"
                  id="inlineCheckbox4"
                  value="LAW"
                  onChange={handleChange}
                  style={{ marginLeft: "10px" }}
                />
                <label className="form-check-label">LAW</label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="CoursesDone"
                  id="inlineCheckbox4"
                  value="ENG"
                  onChange={handleChange}
                  style={{ marginLeft: "10px" }}
                />
                <label className="form-check-label">ENG</label>
                <br />
                <br />
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="CoursesDone"
                  id="inlineCheckbox4"
                  value="SPN"
                  onChange={handleChange}
                />
                <label className="form-check-label">SPN</label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="CoursesDone"
                  id="inlineCheckbox4"
                  value="APP"
                  onChange={handleChange}
                  style={{ marginLeft: "10px" }}
                />
                <label className="form-check-label">APP</label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="CoursesDone"
                  id="inlineCheckbox4"
                  value="CMS"
                  onChange={handleChange}
                  style={{ marginLeft: "10px" }}
                />
                <label className="form-check-label">CMS</label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="CoursesDone"
                  id="inlineCheckbox4"
                  value="FIN"
                  onChange={handleChange}
                  style={{ marginLeft: "10px" }}
                />
                <label className="form-check-label">FIN</label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="CoursesDone"
                  id="inlineCheckbox4"
                  value="ENT"
                  onChange={handleChange}
                  style={{ marginLeft: "10px" }}
                />
                <label className="form-check-label">ENT</label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="CoursesDone"
                  id="inlineCheckbox4"
                  value="BUS"
                  onChange={handleChange}
                  style={{ marginLeft: "10px" }}
                />
                <label className="form-check-label">BUS</label>
              </div>
              <br />

              <button
                type="submit"
                className="btn btn-success w-100 rounded-0 mt-3"
              >
                Register
              </button>
            </form>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "center",
                marginLeft: "300px",
              }}
            >
              <button
                onClick={handleClick}
                style={{
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                View Courses
              </button>
              {showDisplay && <Display />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Front;
