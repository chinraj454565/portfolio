"use client";

import { useEffect, useRef } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
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

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-24 relative">
      <div className="section-container relative z-10">
        <div className="animate-on-scroll flex items-center gap-3 mb-4">
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            03. PROJECTS
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
          What I&apos;ve <span style={{ color: "var(--accent)" }}>Built</span>
        </h2>
        <p
          className="animate-on-scroll stagger-1 mb-12 max-w-lg"
          style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
        >
          A selection of real-world projects spanning full-stack development,
          REST APIs, and interactive web applications.
        </p>

        {/* Featured */}
        {featured && (
          <div className="animate-on-scroll stagger-1 rounded-2xl overflow-hidden mb-8 relative card">
            <div
              className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono"
              style={{
                background: "rgba(0,212,170,0.15)",
                border: "1px solid rgba(0,212,170,0.3)",
                color: "var(--accent)",
              }}
            >
              <Star size={10} fill="currentColor" /> Featured Project
            </div>

            <div className="grid lg:grid-cols-5 min-h-[320px]">
              <div
                className="lg:col-span-3 relative overflow-hidden flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #0A0E1A 0%, #111827 50%, rgba(0,212,170,0.08) 100%)",
                  minHeight: "240px",
                }}
              >
                <div className="text-center p-8 space-y-4">
                  <div
                    className="text-7xl font-black opacity-5"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      color: "var(--accent)",
                    }}
                  >
                    E-COM
                  </div>
                  <div
                    className="grid grid-cols-3 gap-3 opacity-30"
                    style={{ maxWidth: "320px" }}
                  >
                    {[
                      "Products",
                      "Cart",
                      "Orders",
                      "Auth",
                      "Admin",
                      "Returns",
                    ].map((item) => (
                      <div
                        key={item}
                        className="px-2 py-1.5 rounded text-xs text-center"
                        style={{
                          background: "rgba(0,212,170,0.1)",
                          border: "1px solid rgba(0,212,170,0.2)",
                          color: "var(--accent)",
                          fontFamily: "JetBrains Mono, monospace",
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* To add image: replace above div with <Image src={featured.image} fill alt={featured.title} className="object-cover" /> */}
              </div>

              <div className="lg:col-span-2 p-8 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {featured.title}
                  </h3>
                  <p
                    className="text-sm mb-6"
                    style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                  >
                    {featured.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2 px-4 flex-1 justify-center"
                  >
                    <Github size={15} /> GitHub
                  </a>
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 px-4 flex-1 justify-center"
                  >
                    <ExternalLink size={15} /> Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <div
              key={project.id}
              className={`animate-on-scroll stagger-${(i % 4) + 1} card rounded-xl overflow-hidden flex flex-col`}
            >
              <div
                className="relative overflow-hidden flex items-center justify-center"
                style={{
                  height: "140px",
                  background:
                    "linear-gradient(135deg, var(--bg-secondary) 0%, rgba(0,212,170,0.05) 100%)",
                }}
              >
                <span
                  className="text-5xl font-black opacity-5"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    color: "var(--accent)",
                  }}
                >
                  {project.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 3)}
                </span>
                {/* To add image: replace above with <Image src={project.image} fill alt={project.title} className="object-cover" /> */}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="font-bold mb-2 text-base"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    color: "var(--text-primary)",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm mb-4 flex-1"
                  style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  className="flex gap-3 pt-3"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium transition-all hover:scale-105"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--text-secondary)")
                    }
                  >
                    <Github size={13} /> GitHub
                  </a>
                  <span style={{ color: "var(--border)" }}>·</span>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium transition-all hover:scale-105"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--text-secondary)")
                    }
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll mt-12 text-center">
          <a
            href="https://github.com/chinraj-creater"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Github size={16} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
