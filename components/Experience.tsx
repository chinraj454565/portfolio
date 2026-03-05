"use client";

import { useEffect, useRef } from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { experience } from "../data";

export default function Experience() {
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
    <section id="experience" ref={ref} className="py-24 relative">
      <div className="section-container relative z-10">
        <div className="animate-on-scroll flex items-center gap-3 mb-4">
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            04. EXPERIENCE
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "var(--border)" }}
          />
        </div>

        <h2
          className="section-title animate-on-scroll mb-12"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          My <span style={{ color: "var(--accent)" }}>Journey</span>
        </h2>

        <div className="max-w-3xl">
          {experience.map((exp, i) => (
            <div key={i} className="relative pl-8 pb-12 last:pb-0">
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: "var(--border)" }}
              />
              <div
                className="animate-on-scroll absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-1/2"
                style={{
                  background: "var(--accent)",
                  border: "3px solid var(--bg)",
                }}
              />

              <div className="animate-on-scroll stagger-1 card rounded-xl p-6 ml-4">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={14} style={{ color: "var(--accent)" }} />
                      <h3
                        className="font-bold text-lg"
                        style={{
                          fontFamily: "Syne, sans-serif",
                          color: "var(--text-primary)",
                        }}
                      >
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-sm" style={{ color: "var(--accent)" }}>
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className="font-mono text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(0,212,170,0.1)",
                      border: "1px solid rgba(0,212,170,0.2)",
                      color: "var(--accent)",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2
                        size={14}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "var(--accent)" }}
                      />
                      <span
                        style={{
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
