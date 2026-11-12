import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  //{ label: "Lectures", href: "#" },
  { label: "Student info", href: "/student-info" },
];

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }
  return (
    <header className="header">
      <div className="header-content">
        <h1>Online Business School</h1>
        <nav>
          <ul className="nav-list">
            {LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
            {user ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                {user.roles.includes("admin") && (
                  <li>
                    <Link to="/admin">Admin</Link>
                  </li>
                )}
                <li>
                  <button onClick={handleLogout}>Log out</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
