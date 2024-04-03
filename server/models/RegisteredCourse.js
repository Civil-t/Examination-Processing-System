const UserSchema = new mongoose.Schema({
  // ... existing fields ...
  registeredCourses: [
    {
      courseId: String,
      academicYear: String,
      semester: String,
      attempts: Number,
    },
  ],
});
