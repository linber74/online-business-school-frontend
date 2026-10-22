import "./Home.css";
import Card from "../components/Card";

// TODO: Lectures requires login later (see sitemap v2)
const CARDS = [
  { title: "Courses", text: "Browse our courses and programs." },
  {
    title: "Lectures",
    text:
      "Join live lectures or watch recordings. " +
      "Public for now. Will require login later.",
  },
  { title: "Student info", text: "Find information for students." },
];

function Home() {
  return (
    <main className="home">
      <h2>Welcome to the Online Business School</h2>
      <p>
        This is a placeholder text for the Online Business School homepage. The
        final text will be provided by Via Mare Consulting.
      </p>
      <div className="card-list">
        {CARDS.map((card) => (
          <Card key={card.title} title={card.title} text={card.text} />
        ))}
      </div>
    </main>
  );
}

export default Home;
