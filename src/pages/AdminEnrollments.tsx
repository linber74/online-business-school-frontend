import { useState } from "react";
import { getEnrollments, updateEnrollmentStatus } from "../api/api";
import type { EnrollmentStatus } from "../types";
import "./AdminEnrollments.css";
import { useFetch } from "../hooks/useFetch";

function AdminEnrollments() {
  const [updateError, setUpdateError] = useState("");
  const {
    data: enrollments,
    loading,
    error,
    reload,
  } = useFetch(getEnrollments, []);

  async function handleStatusChange(
    enrollmentId: number,
    status: EnrollmentStatus,
  ) {
    try {
      await updateEnrollmentStatus(enrollmentId, status);
      reload();
    } catch {
      setUpdateError("Could not update enrollment");
    }
  }

  if (loading && !enrollments) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!enrollments || enrollments.length === 0) {
    return <p>No enrollments</p>;
  }

  return (
    <main className="admin-enrollments">
      <h2>Enrollments</h2>
      {updateError && <p className="admin-enrollments-error">{updateError}</p>}
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
