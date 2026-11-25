import "./Home.css";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user } = useAuth();

  const cards = [
    {
      title: "Courses",
      text: "Browse our courses and programs.",
      to: "/courses",
    },

    {
      title: "Lectures",
      text: user
        ? "Your lectures are in your courses."
        : "Log in to see your lectures.",
      to: user ? "/my-courses" : "/login",
    },

    ...(user
      ? [
          {
            title: "Student info",
            text: "Find information for students.",
            to: "/student-info",
          },
        ]
      : []),
  ];

  return (
    <main className="home">
      <h2>Welcome to the Online Business School</h2>
      <p>
        This is a placeholder text for the Online Business School homepage. The
        final text will be provided by Via Mare Consulting.
      </p>
      <div className="card-list">
        {cards.map((card) => (
          <Link to={card.to} key={card.title} className="home-card-link">
            <Card title={card.title} text={card.text} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
