import { Link } from "react-router";

import "./navigation.scss";

const solutionsLinks = [
  { label: "Multiplatform Mobile", link: "#" },
  { label: "Multiplatform for other platforms", link: "#" },
  { label: "Server-side", link: "#" },
  { label: "Web frontend", link: "#" },
  { label: "Data science", link: "#" },
  { label: "Android", link: "#" },
];

const navLinks = [
  { label: "Solutions", link: "#", dropdown: solutionsLinks },
  { label: "Docs", link: "docs/home.html" },
  { label: "Community", link: "community/" },
  { label: "Teach", link: "education/" },
  { label: "Play", link: "#" },
];

type NavigationProps = {
  isOpen: boolean;
};

export function Navigation({ isOpen }: NavigationProps) {
  return (
    <nav className={`navigation-container ${isOpen ? "open" : ""}`}>
      {navLinks.map((l) => (
        <NavLink key={l.label} link={l.link} dropdown={l.dropdown}>
          {l.label}
        </NavLink>
      ))}
    </nav>
  );
}

type NavLinkProps = {
  link: string;
  dropdown?: { label: string; link: string }[];
  children: React.ReactNode;
};

function NavLink({ children, link, dropdown }: NavLinkProps) {
  return (
    <div className="link-container">
      <Link to={link}>{children}</Link>

      {dropdown && (
        <div className="dropdown">
          {dropdown.map((item) => (
            <Link key={item.label} to={item.link}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
