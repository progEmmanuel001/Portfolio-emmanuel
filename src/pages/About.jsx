import { Link } from "react-router-dom";
import useReveal from "../components/useReveal.js";

const SKILLS = ["Web", "AI", "Robotics", "Pictoblox"];

const JOURNEY = [
  {
    title: "Started Learning",
    body: "Built a strong foundation in programming and technology.",
  },
  {
    title: "Web Development",
    body: "Designed and developed responsive websites.",
  },
  {
    title: "Teaching",
    body: "Began training students in programming, AI and digital skills.",
  },
  {
    title: "Robotics & AI",
    body: "Expanded into robotics education, AI, Micro:bit, Arduino and Pictoblox.",
  },
];

export default function About() {
  const storyRef = useReveal();
  const timelineRef = useReveal();

  return (
    <>
      <section className="about-hero">
        <div className="about-left">
          <p className="about-eyebrow">About me</p>

          <h1>
            Who is <span>Emmanuel?</span>
          </h1>

          <p>
            I&apos;m a front-end web developer, robotics educator and AI instructor.
            I build digital products that solve real problems, and I teach the next
            group of people who will build them too.
          </p>

          <div className="btn-row">
            <a href="/cv.pdf" className="primary" download>
              Download CV
            </a>
            <Link to="/contact" className="secondary">
              Let&apos;s Talk
            </Link>
          </div>
        </div>

        <div className="about-right">
          <div className="profile-card">
            <div className="circle">
              <img src="/images/profile.jpg" alt="Emmanuel" />
            </div>

            <h2>Emmanuel</h2>
            <h4>Creative Technologist</h4>

            <div className="profile-skills">
              {SKILLS.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="story-section reveal" ref={storyRef}>
        <article className="story-card">
          <span className="story-label">My story</span>
          <h2>Creating technology that inspires.</h2>
          <p>
            My journey into technology began with curiosity and grew into a habit of
            building. From modern websites to robotics projects and AI-powered
            applications, I enjoy solving real problems with what I make.
          </p>
        </article>

        <article className="story-card">
          <span className="story-label">My mission</span>
          <h2>Building skills that change lives.</h2>
          <p>
            Beyond development, I teach young learners and professionals. Through
            robotics, artificial intelligence, Pictoblox, web development and
            programming, I help other people turn their ideas into working things.
          </p>
        </article>
      </section>

      <section className="timeline-section reveal" ref={timelineRef}>
        <div className="section-heading">
          <span>My journey</span>
          <h2>Every step built the next.</h2>
        </div>

        <ol className="timeline">
          {JOURNEY.map((item) => (
            <li className="timeline-item" key={item.title}>
              <div className="timeline-dot" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
