"use client";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../data";

export default function Footer() {
  return (
    <footer
      className="py-8 mt-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div
            className="font-bold text-lg"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <span style={{ color: "var(--accent)" }}>C</span>
            <span style={{ color: "var(--text-primary)" }}>hinraj</span>
            <span style={{ color: "var(--accent)" }}>.</span>
          </div>

          <p
            className="text-xs flex items-center gap-1.5"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            © 2026 {personalInfo.name} · Built with{" "}
            <Heart
              size={11}
              fill="currentColor"
              style={{ color: "var(--accent)" }}
            />{" "}
            using Next.js
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              {
                icon: Linkedin,
                href: personalInfo.linkedin,
                label: "LinkedIn",
              },
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
                className="transition-all hover:scale-110"
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
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
