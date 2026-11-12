import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getMyCourses } from "../api/api";
import type { MyCourse } from "../types";
import "./MyCourses.css";

function MyCourses() {
  const { user } = useAuth();
  const [myCourses, setMyCourses] = useState<MyCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user === null) {
      return;
    }
    const userId = user.id;

    async function load() {
      try {
        const data = await getMyCourses(userId);
        setMyCourses(data);
      } catch {
        setError("Could not load your courses");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (myCourses.length === 0) {
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
            <p>Status: {item.status}</p>
            <p>Duration: {item.course.duration}</p>
            <Link to={`/courses/${item.course.id}`}>View course</Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MyCourses;
