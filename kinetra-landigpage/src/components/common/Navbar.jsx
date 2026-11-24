import { NAV_LINKS } from "../../data/content";

export default function Navbar() {
  return (
    <>
      <header className="navbar">NavBar</header>
      <a href="#inicio" className="logo">
        Mimarca
      </a>
      <nav>
        <ul className="nav-list">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
