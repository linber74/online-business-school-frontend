import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseForm from "../components/CourseForm";
import { createCourse } from "../api/api";
import type { NewCourseData } from "../types";
import "./AdminNewCourse.css"

function AdminNewCourse() {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleCreate(data: NewCourseData) {
    setError("");

    try {
      await createCourse(data);
      navigate("/courses");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <main className="admin-new-course">
      <h2>Create course</h2>
      {error && <p className="admin-new-course-error">{error}</p>}
      <CourseForm onSubmit={handleCreate} />
    </main>
  );
}

export default AdminNewCourse;
