import "./Dashboard.css";
import Card from "../components/Card";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Dashboard() {

  const { user } = useAuth();
  
  return (
    <main className="dashboard">
      <h2>Welcome, {user?.name}</h2>
      <div className="card-list">
        <Link to="/my-courses">
          <Card title="My Courses" text="See your enrolled courses" />
        </Link>
        <Link to="/student-info">
          <Card title="Profile" text="See your information" />
        </Link>
      </div>
    </main>
  );
}

export default Dashboard;
