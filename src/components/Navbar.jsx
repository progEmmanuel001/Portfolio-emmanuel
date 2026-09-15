import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  // Close whenever the route changes, so tapping a link never leaves the
  // drawer hanging open over the new page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock the page behind the drawer and wire up Escape.
  useEffect(() => {
    if (!open) return undefined;

    document.body.classList.add("no-scroll");

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);

    // Send focus into the panel so keyboard and screen-reader users
    // land where the drawer actually is.
    const firstLink = panelRef.current?.querySelector("a");
    firstLink?.focus();

    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Any resize up to desktop width should discard the mobile state.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="logo">
          <span>EM</span>MANUEL
        </Link>

        <ul
          id="nav-links"
          ref={panelRef}
          className={`nav-links${open ? " is-open" : ""}`}
        >
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          <li>
            <Link to="/contact" className="nav-cta">
              Hire Me
            </Link>
          </li>
        </ul>

        <Link to="/contact" className="nav-cta">
          Hire Me
        </Link>

        <button
          ref={buttonRef}
          type="button"
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <button
        type="button"
        tabIndex={open ? 0 : -1}
        aria-hidden={!open}
        aria-label="Close menu"
        className={`nav-overlay${open ? " is-open" : ""}`}
        onClick={close}
      />
    </>
  );
}
