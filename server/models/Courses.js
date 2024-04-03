const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  attempts: String,
  courseId: String,
  academicYear: String,
  semester: String,
  students: [
    {
      userId: String,
      assignments: [String],
      cats: [String],
      exam: [
        {
          courseId: String,
          score: Number,
        },
      ],
      assignmentScore: [
        {
          courseId: String,
          score: Number,
        },
      ],
      catScore: [
        {
          courseId: String,
          score: Number,
        },
      ],
      attempts: String,
    },
  ],
});

const CourseModel = mongoose.model("courses", CourseSchema);
module.exports = CourseModel;
