import "./Dashboard.css";
import Card from "../components/Card";

function Dashboard() {
  return (
    <main className="dashboard">
      <h2>Welcome, Student name</h2> {/* platshållare tills login finns*/}
      <div className="card-list">
        <Card title="My Courses" text="See your enrolled courses" />
        <Card title="Profile" text="Your profile (coming later)"/>
      </div>
    </main>
  );
}

export default Dashboard;
