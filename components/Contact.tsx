"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { personalInfo } from "../data";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("sending");
    // TODO: Replace with real email service (Formspree / Resend / EmailJS)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputStyle = {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,212,170,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="animate-on-scroll flex items-center gap-3 mb-4">
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            05. CONTACT
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
          Let&apos;s <span style={{ color: "var(--accent)" }}>Connect</span>
        </h2>
        <p
          className="animate-on-scroll stagger-1 mb-12 max-w-lg"
          style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
        >
          Feel free to reach out if you&apos;d like to collaborate, discuss
          opportunities, or talk about software development.
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Mail,
                label: "Email",
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: Phone,
                label: "Phone",
                value: personalInfo.phone,
                href: `tel:${personalInfo.phone}`,
              },
              {
                icon: MapPin,
                label: "Location",
                value: personalInfo.location,
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="animate-on-scroll card rounded-xl p-4 flex items-center gap-4"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(0,212,170,0.1)",
                    color: "var(--accent)",
                  }}
                >
                  <Icon size={16} />
                </div>
                <div>
                  <p
                    className="text-xs font-mono mb-0.5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--text-primary)")
                      }
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="animate-on-scroll pt-2">
              <p
                className="text-xs font-mono mb-3"
                style={{ color: "var(--text-secondary)" }}
              >
                FIND ME ON
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: personalInfo.github, label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: personalInfo.linkedin,
                    label: "LinkedIn",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--accent)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text-secondary)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--border)";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="animate-on-scroll stagger-1 card rounded-xl p-8 space-y-5">
              {[
                {
                  name: "name",
                  label: "YOUR NAME",
                  placeholder: "John Doe",
                  type: "text",
                },
                {
                  name: "email",
                  label: "YOUR EMAIL",
                  placeholder: "john@example.com",
                  type: "email",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    className="block text-xs font-mono mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                    style={inputStyle}
                    onFocus={(e) =>
                      ((e.target as HTMLElement).style.borderColor =
                        "var(--accent)")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLElement).style.borderColor =
                        "var(--border)")
                    }
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-xs font-mono mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                  style={inputStyle}
                  onFocus={(e) =>
                    ((e.target as HTMLElement).style.borderColor =
                      "var(--accent)")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLElement).style.borderColor =
                      "var(--border)")
                  }
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === "sending" || status === "sent"}
                className="btn-primary w-full justify-center"
                style={{
                  opacity: status === "sending" ? 0.7 : 1,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
              >
                <Send size={15} />
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent! ✓"}
                {status === "error" && "Try Again"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
