import { useState } from "react";
import { SITE } from "../data/site.js";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: SITE.formAccessKey,
          ...values,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setValues(EMPTY);
        setStatus({
          state: "success",
          message: "Message sent. I'll get back to you soon.",
        });
      } else {
        setStatus({
          state: "error",
          message: "That didn't send. Try again, or email me directly.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: "No connection to the form service. Check your network and retry.",
      });
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-left">
        <span className="contact-tag">Get in touch</span>

        <h1>
          Let&apos;s build <span>the future.</span>
        </h1>

        <p>
          Whether you need a website, an AI solution, robotics training or a
          technology instructor, I&apos;d like to hear from you.
        </p>

        <div className="contact-info">
          <div className="info-card">
            <i className="fas fa-envelope" aria-hidden="true" />
            <div>
              <h3>Email</h3>
              <p>{SITE.email}</p>
            </div>
          </div>

          <div className="info-card">
            <i className="fas fa-phone" aria-hidden="true" />
            <div>
              <h3>Phone</h3>
              <p>{SITE.phoneDisplay}</p>
            </div>
          </div>

          <div className="info-card">
            <i className="fas fa-location-dot" aria-hidden="true" />
            <div>
              <h3>Location</h3>
              <p>{SITE.location}</p>
            </div>
          </div>
        </div>

        <div className="social-links">
          <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github" aria-hidden="true" />
          </a>

          <a href={`mailto:${SITE.email}`} aria-label="Email">
            <i className="fas fa-envelope" aria-hidden="true" />
          </a>

          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={submit}>
          <label className="sr-only" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Full name"
            value={values.name}
            onChange={update}
            required
          />

          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            value={values.email}
            onChange={update}
            required
          />

          <label className="sr-only" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            value={values.subject}
            onChange={update}
            required
          />

          <label className="sr-only" htmlFor="message">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows="7"
            placeholder="Your message"
            value={values.message}
            onChange={update}
            required
          />

          <button type="submit" disabled={status.state === "sending"}>
            {status.state === "sending" ? "Sending…" : "Send message"}
          </button>

          {status.message && (
            <p
              className={`form-status ${status.state}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          )}
        </form>

        <div className="available">
          <span className="dot" aria-hidden="true" />
          <span>Available for freelance work</span>
        </div>
      </div>
    </section>
  );
}
