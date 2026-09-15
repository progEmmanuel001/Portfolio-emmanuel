import { useMemo, useState } from "react";
import { PROJECTS, FILTERS } from "../data/projects.js";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <>
      <section className="projects-hero">
        <div className="projects-heading">
          <h5>My work</h5>

          <h1>
            Featured <span>Projects</span>
          </h1>

          <p>
            From websites and web apps to AI, robotics and educational technology,
            here are some of the projects I&apos;ve designed and built.
          </p>
        </div>

        <div className="project-filter" role="group" aria-label="Filter projects">
          {FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={filter === item.id ? "active" : undefined}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <section className="projects-grid">
        {visible.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} loading="lazy" />
              <span className="project-tag">{project.tag}</span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.stack.map((tech) => (
                  <span key={tech.label}>
                    {tech.icon && <i className={tech.icon} aria-hidden="true" />}{" "}
                    {tech.label}
                  </span>
                ))}
              </div>

              {project.live && (
                <div className="project-buttons">
                  <a
                    href={project.live}
                    className="live"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo
                    <span className="sr-only"> of {project.title}</span>
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}

        {visible.length === 0 && (
          <p className="projects-empty">No projects in this category yet.</p>
        )}
      </section>
    </>
  );
}
