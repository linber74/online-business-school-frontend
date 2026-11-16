import { Link } from "react-router-dom";
import "./ErrorPage.css";

function Forbidden() {
    return (
      <main className="error-page">
        <h2>403 - Access denied</h2>
        <p>You don't have permission to view this page.</p>
        <Link to="/">Go to home page</Link>
      </main>
    );
}

export default Forbidden;