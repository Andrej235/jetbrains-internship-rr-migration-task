import { useState } from "react";
import { Navigation } from "./navigation/navigation";

import "./header.scss";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <a href="https://kotlinlang.org/">
          <img
            className="logo-image"
            src="/kotlin-logo.svg"
            alt="Kotlin logo in SVG"
          />
        </a>

        <a
          className="version-link"
          href="https://github.com/JetBrains/kotlin/releases/tag/v1.6.20"
        >
          v1.6.20
        </a>
      </div>

      <Navigation isOpen={menuOpen} />
      <button
        className="burger-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="burger-line" />
        <span className="burger-line" />
        <span className="burger-line" />
      </button>
    </div>
  );
}
