"use client";

import { useEffect, useRef } from "react";
import { skills } from "../data";

const categories = [
  { label: "Backend", key: "backend" as const, color: "#00D4AA" },
  { label: "Frontend", key: "frontend" as const, color: "#6366F1" },
  { label: "Database", key: "database" as const, color: "#F59E0B" },
  { label: "Tools", key: "tools" as const, color: "#EC4899" },
];

const icons: Record<string, string> = {
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Django:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  Flask:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "Django REST Framework": "https://cdn.simpleicons.org/django",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  NestJS: "https://cdn.simpleicons.org/nestjs",
  "REST API Development": "https://cdn.simpleicons.org/openapiinitiative",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  SQLite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  "Prisma ORM": "https://cdn.simpleicons.org/prisma",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Linux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "REST API Design": "https://cdn.simpleicons.org/openapiinitiative",
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target
              .querySelectorAll(".animate-on-scroll")
              .forEach((el) => el.classList.add("visible"));
        }),
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 relative">
      <div className="section-container relative z-10">
        <div className="animate-on-scroll flex items-center gap-3 mb-4">
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            02. SKILLS
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "var(--border)" }}
          />
        </div>

        <h2
          className="section-title animate-on-scroll mb-4"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Tech <span style={{ color: "var(--accent)" }}>Stack</span>
        </h2>
        <p
          className="animate-on-scroll stagger-1 mb-12 max-w-lg"
          style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
        >
          Technologies I use to design, build, and deploy modern web
          applications.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map(({ label, key, color }, i) => (
            <div
              key={key}
              className={`animate-on-scroll stagger-${i + 1} card rounded-xl p-6`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ background: color }}
                />
                <h3
                  className="font-bold text-sm tracking-wide uppercase"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    color: "var(--text-primary)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all hover:scale-105 cursor-default"
                    style={{
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = color;
                      el.style.color = color;
                      el.style.background = `${color}15`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--border)";
                      el.style.color = "var(--text-secondary)";
                      el.style.background = "var(--bg-secondary)";
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <img src={icons[skill]} alt={skill} className="w-5 h-5" />
                      <span className="font-medium text-xs">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
