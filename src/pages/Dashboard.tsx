import "./Dashboard.css";
import Card from "../components/Card";
import { useAuth } from "../context/AuthContext";

function Dashboard() {

  const { user } = useAuth();
  
  return (
    <main className="dashboard">
      <h2>Welcome, {user?.name}</h2> 
      <div className="card-list">
        <Card title="My Courses" text="See your enrolled courses" />
        <Card title="Profile" text="Your profile (coming later)"/>
      </div>
    </main>
  );
}

export default Dashboard;
