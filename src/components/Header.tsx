import './Header.css';
import { Link } from 'react-router-dom'

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Login", href: "/login"},
  //{ label: "Lectures", href: "#" },
  { label: "Student info", href: "/student-info" },
];

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Online Business School</h1>
        <nav>
          <ul className="nav-list">
            {LINKS.map(link => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
