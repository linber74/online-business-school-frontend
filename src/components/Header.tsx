import "./Header.css";

const LINKS = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#" },
  { label: "Lectures", href: "#" },
  { label: "Student info", href: "#" },
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
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
