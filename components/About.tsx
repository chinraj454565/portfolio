"use client";

import { useEffect, useRef } from "react";
import { MapPin, Mail, Phone, GraduationCap } from "lucide-react";
import { personalInfo, education } from "../data";
import Image from "next/image";

export default function About() {
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
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 relative">
      <div className="section-container">
        <div className="animate-on-scroll flex items-center gap-3 mb-4">
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            01. ABOUT
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "var(--border)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className="section-title animate-on-scroll mb-6"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              About <span style={{ color: "var(--accent)" }}>Me</span>
            </h2>

            <div className="space-y-4 animate-on-scroll stagger-1">
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                I am a{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  Full Stack Developer
                </strong>{" "}
                with experience in both Python and JavaScript/TypeScript
                ecosystems. I specialize in backend development using Django,
                Flask, Django REST Framework, Node.js, and NestJS.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                I also build modern user interfaces using React and Next.js. I
                enjoy designing scalable APIs, working with relational databases
                like PostgreSQL, and building complete full-stack applications.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Currently focused on improving{" "}
                <strong style={{ color: "var(--accent)" }}>
                  system design skills
                </strong>
                , backend architecture, and building scalable web applications.
              </p>
            </div>

            <div className="mt-8 space-y-3 animate-on-scroll stagger-2">
              {[
                {
                  icon: Mail,
                  label: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: Phone,
                  label: personalInfo.phone,
                  href: `tel:${personalInfo.phone}`,
                },
                { icon: MapPin, label: personalInfo.location, href: null },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(0,212,170,0.1)",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={14} />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm transition-colors"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "var(--text-secondary)")
                      }
                    >
                      {label}
                    </a>
                  ) : (
                    <span
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {/* Profile image */}
            <div
              className="animate-on-scroll stagger-1 rounded-xl overflow-hidden relative"
              style={{
                border: "1px solid var(--border)",
                background: "var(--bg-secondary)",
                aspectRatio: "4/3",
                maxHeight: "280px",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-50 h-50 rounded-full overflow-hidden relative border-2 border-[rgba(0,212,170,0.3)]">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Chinraj P"
                    fill
                    className="object-cover"
                  />
                </div>

                <p
                  className="text-xs font-mono"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Chinraj P
                </p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{
                  background:
                    "linear-gradient(to top, var(--bg-secondary), transparent)",
                }}
              >
                <p
                  className="font-bold text-sm"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    color: "var(--text-primary)",
                  }}
                >
                  {personalInfo.name}
                </p>
                <p className="text-xs" style={{ color: "var(--accent)" }}>
                  {personalInfo.title}
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="animate-on-scroll stagger-2 card rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={16} style={{ color: "var(--accent)" }} />
                <h3
                  className="font-bold text-sm"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    color: "var(--text-primary)",
                  }}
                >
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="flex gap-3">
                    <div
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        background: i === 0 ? "var(--accent)" : "var(--border)",
                      }}
                    />
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{
                          color: "var(--text-primary)",
                          fontFamily: "Syne, sans-serif",
                        }}
                      >
                        {edu.degree}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {edu.institution}
                      </p>
                      <p
                        className="text-xs font-mono mt-0.5"
                        style={{ color: "var(--accent)" }}
                      >
                        {edu.period}
                      </p>
                      {edu.grade && (
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {edu.grade}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
