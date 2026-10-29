import { useState, useEffect } from "react";
import { getCourses } from "../api/api";
import type { Course } from "../types";
import CourseCard from "../components/CourseCard";
import "./Courses.css";

function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch {
        setError("Could not load courses");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <main className="courses">
      <h2>Courses</h2>
      {loading && <p> Loading...</p>}
      {error && <p className="courses-error">{error}</p>}
      {!loading &&
        !error && (
        <div className="courses-list">
          {courses.map(course =>
            <CourseCard key={course.id} course={course} />)}
          </div>
        )}
    </main>
  );
}
export default Courses;
