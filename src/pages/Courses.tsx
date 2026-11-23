import { getCourses } from "../api/api";
import CourseCard from "../components/CourseCard";
import "./Courses.css";
import { useFetch } from "../hooks/useFetch";

function Courses() {
  const { data: courses, loading, error } = useFetch(getCourses, []);

  return (
    <main className="courses">
      <h2>Courses</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="courses-error">{error}</p>}
      {!loading && !error && courses && (
        <div className="courses-list">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </main>
  );
}
export default Courses;
