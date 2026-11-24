import { useParams, Link } from "react-router-dom";
import { getCourse } from "../api/api";
import "./CourseDetails.css";
import { useFetch } from "../hooks/useFetch";

function CourseDetails() {
  const { id } = useParams();
  const {
    data: course,
    loading,
    error,
  } = useFetch(() => getCourse(Number(id)), [id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p className="course-error">{error}</p>;
  }
  if (!course) {
    return (
      <main className="course-details-notfound">
        <h3>Course not found</h3>
        <Link to="/courses">Back to courses</Link>
      </main>
    );
  }
  return (
    <main className="course-details">
      <Link to="/courses">← Back to courses</Link>
      {course.imageUrl && (
        <img
          className="course-details-image"
          src={course.imageUrl}
          alt={course.title}
        />
      )}
      <h2>{course.title}</h2>
      <p>Course code: {course.code}</p>
      <p>{course.description}</p>
      <p>
        Duration: {course.duration} {course.durationUnit}
      </p>
      <p>Price: {course.price} Euro</p>
    </main>
  );
}

export default CourseDetails;
