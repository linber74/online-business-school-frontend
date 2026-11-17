import { Link } from "react-router-dom";
import "./ErrorPage.css";

function NotFound() {
  return (
    <main className="error-page">
      <h2>404 - Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go to home page</Link>
    </main>
  );
}

export default NotFound;
