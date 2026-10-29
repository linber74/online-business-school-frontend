import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import type { Course } from "../types";
import { getCourse } from "../api/api";
import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getCourse(Number(id));
        setCourse(data ?? null);
      } catch {
        setError("Could not load course");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p className="course-error">{error}</p>;
  }
  if (!course) {
    return <p>Course not found</p>;
  }
  return (
    <main className="course-details">
      <Link to="/courses">← Back to courses</Link>
      {course.imageUrl && (
        <img
          className="course-card-image"
          src={course.imageUrl}
          alt={course.title}
        />
      )}
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p>Duration: {course.duration}</p>
      <p>Price: {course.price} Euro</p>
    </main>
  );
}

export default CourseDetails;
