import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SITE, ROLES } from "../data/site.js";

function useTypedRole() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[wordIndex];

    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(hold);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % ROLES.length);
      return undefined;
    }

    const step = setTimeout(
      () => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(step);
  }, [text, deleting, wordIndex]);

  return text;
}

// Feeds the pointer position to the ripple in .primary::before.
function trackRipple(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

export default function Home() {
  const typed = useTypedRole();

  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-hello">👋 Hello, I&apos;m {SITE.name}</p>

        <h1>
          Building <span>Digital Experiences</span>
        </h1>

        <h2>
          <span aria-live="polite">{typed}</span>
          <span className="typing-caret" aria-hidden="true" />
        </h2>

        <p className="hero-description">
          I build modern websites, create immersive digital experiences, and train
          students in web development, artificial intelligence, robotics and Pictoblox.
        </p>

        <div className="btn-row">
          <Link to="/projects" className="primary" onMouseMove={trackRipple}>
            View Projects
          </Link>
          <Link to="/contact" className="secondary">
            Get In Touch
          </Link>
        </div>

        <div className="hero-social">
          <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github" aria-hidden="true" />
          </a>

          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp" aria-hidden="true" />
          </a>

          <a href={`mailto:${SITE.email}`} aria-label="Email">
            <i className="fas fa-envelope" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
