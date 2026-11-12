import { useAuth } from "../context/AuthContext";
import "./StudentInfo.css";

function StudentInfo() {
  const { user } = useAuth();

  return (
    <main className="student-info">
      <h2>My information</h2>
      <div className="student-info-card">
        <p>
          <strong>Name:</strong> {user?.name}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Role:</strong> {user?.roles.join(", ")}
        </p>
      </div>
    </main>
  );
}

export default StudentInfo;
