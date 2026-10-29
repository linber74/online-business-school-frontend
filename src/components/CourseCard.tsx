import type { Course } from "../types";
import { Link } from "react-router-dom";
import "./CourseCard.css";

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="course-card">
      {course.imageUrl && (
        <img
          className="course-card-image"
          src={course.imageUrl}
          alt={course.title}
        />
      )}
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p>Duration: {course.duration}</p>
      <p>Price: {course.price} Euro</p>
      <Link to={`/courses/${course.id}`}>View Course</Link>
    </div>
  );
}

export default CourseCard;
