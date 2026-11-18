import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <main className="admin-dashboard">
      <h2>Admin area</h2>
      <div className="admin-dashboard-links">
        <Link className="admin-dashboard-link" to="/admin/enrollments">
          Manage enrollments
        </Link>
      </div>
    </main>
  );
}

export default AdminDashboard;
