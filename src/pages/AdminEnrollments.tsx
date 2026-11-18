import { useEffect, useState } from "react";
import { getEnrollments, updateEnrollmentStatus } from "../api/api";
import type { AdminEnrollment, EnrollmentStatus } from "../types";
import "./AdminEnrollments.css";

function AdminEnrollments() {
  const [enrollments, setEnrollments] = useState<AdminEnrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadEnrollments() {
    try {
      const data = await getEnrollments();
      setEnrollments(data);
    } catch {
      setError("Could not load enrollments");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEnrollments();
  }, []);

  async function handleStatusChange(id: number, status: EnrollmentStatus) {
    try {
      await updateEnrollmentStatus(id, status);
      await loadEnrollments();
    } catch {
      setError("Could not update enrollment");
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (enrollments.length === 0) {
    return <p>No enrollments</p>;
  }

  return (
    <main className="admin-enrollments">
      <h2>Enrollments</h2>
      {enrollments.map((item) => (
        <div className="admin-enrollments-card" key={item.enrollmentId}>
          <p>
            {item.studentName} - {item.courseTitle}
          </p>
          <p>
            Status:{" "}
            <span
              className={`admin-enrollments-status status-${item.status.toLowerCase()}`}
            >
              {item.status}
            </span>
          </p>
          {item.status === "Pending" && (
            <div className="admin-enrollments-actions">
              <button
                className="admin-enrollments-confirm"
                onClick={() =>
                  handleStatusChange(item.enrollmentId, "Confirmed")
                }
              >
                Confirm
              </button>
              <button
                className="admin-enrollments-reject"
                onClick={() =>
                  handleStatusChange(item.enrollmentId, "Rejected")
                }
              >
                Reject
              </button>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}

export default AdminEnrollments;
