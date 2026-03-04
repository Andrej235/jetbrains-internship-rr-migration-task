import {
  FaGithub,
  FaTwitter,
  FaSlack,
  FaRedditAlien,
  FaStackOverflow,
  FaYoutube,
} from "react-icons/fa";

import "./footer.scss";

const socialLinks = [
  {
    label: "Github",
    icon: <FaGithub size={19} />,
    href: "https://github.com/jetbrains/kotlin",
  },
  {
    label: "Twitter",
    icon: <FaTwitter size={19} />,
    href: "https://twitter.com/kotlin",
  },
  {
    label: "Slack",
    icon: <FaSlack size={19} />,
    href: "https://slack.kotlinlang.org",
  },
  {
    label: "Reddit",
    icon: <FaRedditAlien size={19} />,
    href: "https://www.reddit.com/r/Kotlin",
  },
  {
    label: "StackOverflow",
    icon: <FaStackOverflow size={19} />,
    href: "https://stackoverflow.com/questions/tagged/kotlin",
  },
  {
    label: "YouTube",
    icon: <FaYoutube size={19} />,
    href: "https://www.youtube.com/channel/UCP7uiEZIqci43m22KDl0sNw",
  },
];

const navLinks = [
  { label: "Contributing to Kotlin", href: "/contribute.html" },
  { label: "Releases", href: "/releases.html" },
  { label: "Press Kit", href: "/foundation/media-guide.html" },
  { label: "Security", href: "/docs/security.html" },
  { label: "Blog", href: "https://blog.jetbrains.com/kotlin/" },
  {
    label: "Issue Tracker",
    href: "https://youtrack.jetbrains.com/issues/KT",
  },
  { label: "Brand assets", href: "/foundation/kotlin-foundation.html" },
  { label: "Careers", href: "https://www.jetbrains.com/careers/" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social-module">
        <p className="footer-social-title">Stay in touch:</p>
        <div className="footer-social-list">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="footer-social-icon"
              target="_blank"
              rel="noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <a
        href="https://www.jetbrains.com/"
        className="footer-logo"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src="/jetbrains-logo.svg" alt="JetBrains Logo" />
      </a>

      <nav className="footer-nav-row">
        {navLinks.map((link, i) => (
          <a
            href={link.href}
            key={link.label}
            className="footer-nav-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="footer-bottom-row">
        <p className="footer-copyright">
          Kotlin™ is protected under the{" "}
          <a
            href="https://kotlinfoundation.org/"
            className="footer-copyright-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            Kotlin Foundation
          </a>{" "}
          and licensed under the{" "}
          <a
            href="https://github.com/JetBrains/kotlin-web-site/blob/master/LICENSE"
            className="footer-copyright-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            Apache 2 license
          </a>
          .
        </p>
        <p className="footer-supported-by">
          Supported and developed by{" "}
          <a
            href="https://www.jetbrains.com/"
            className="footer-copyright-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            JetBrains
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
