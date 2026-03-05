"use client";

import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { personalInfo } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "5rem" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0, 212, 170, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 animate-float"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 animate-float"
        style={{ background: "#6366F1", animationDelay: "3s" }}
      />

      <div className="section-container relative z-10 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono mb-8 animate-fade-up"
          style={{
            background: "rgba(0,212,170,0.1)",
            border: "1px solid rgba(0,212,170,0.25)",
            color: "var(--accent)",
            animationDelay: "0.1s",
            opacity: 0,
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "var(--accent)" }}
          />
          Available for opportunities
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up mb-4"
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3rem, 10vw, 6.5rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            animationDelay: "0.2s",
            opacity: 0,
          }}
        >
          <span style={{ color: "var(--text-primary)" }}>Chinraj </span>
          <span style={{ color: "var(--accent)" }}>P</span>
        </h1>

        {/* Title */}
        <p
          className="text-lg md:text-2xl mb-4 animate-fade-up"
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 600,
            color: "var(--text-secondary)",
            animationDelay: "0.3s",
            opacity: 0,
          }}
        >
          {personalInfo.title}
        </p>

        {/* Tags */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          {[
            "Python",
            "Django",
            "DRF",
            "Node.js",
            "NestJS",
            "Next.js",
            "TypeScript",
            "PostgreSQL",
          ].map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p
          className="max-w-xl mx-auto text-base md:text-lg mb-10 animate-fade-up"
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            animationDelay: "0.5s",
            opacity: 0,
          }}
        >
          {personalInfo.description}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            View Projects <ArrowDown size={16} />
          </button>
          <a href="/resume.pdf" download className="btn-outline">
            <Download size={16} /> Download CV
          </a>
        </div>

        {/* Socials */}
        <div
          className="flex justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            {
              icon: Mail,
              href: `mailto:${personalInfo.email}`,
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-md flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--accent)";
                el.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--text-secondary)";
                el.style.borderColor = "var(--border)";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span
            className="text-xs font-mono"
            style={{ color: "var(--text-secondary)", letterSpacing: "0.1em" }}
          >
            SCROLL
          </span>
          <div
            className="w-px h-12 animate-pulse"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
