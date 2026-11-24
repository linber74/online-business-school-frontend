import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getMyCourses } from "../api/api";
import "./MyCourses.css";
import { useFetch } from "../hooks/useFetch";

function MyCourses() {
  const { user } = useAuth();
  const {
    data: myCourses,
    loading,
    error,
  } = useFetch(async () => {
    if (!user) {
      return [];
    } else {
      return getMyCourses(user.id);
    }
  }, [user?.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!myCourses || myCourses.length === 0) {
    return (
      <main className="my-courses">
        <h2>My Courses</h2>
        <p>You are not enrolled in any courses yet.</p>
        <Link to="/courses">Browse courses</Link>
      </main>
    );
  }

  return (
    <main className="my-courses">
      <h2>My Courses</h2>
      <div className="my-courses-list">
        {myCourses.map((item) => (
          <div className="my-courses-card" key={item.enrollmentId}>
            <h3>{item.course.title}</h3>
            <p>Course code: {item.course.code}</p>
            <p>Status: {item.status}</p>
            <p>
              Duration: {item.course.duration} {item.course.durationUnit}
            </p>
            <Link to={`/courses/${item.course.id}`}>View course</Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MyCourses;
