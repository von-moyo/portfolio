import { GraduationCap, Award, Sparkles } from "lucide-react";
import { education, certificates } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const focus = [
  "Production architecture",
  "Design systems",
  "Performance optimization",
  "Real-time / WebSocket UX",
  "Testing (Vitest · Cypress)",
  "AI-powered interfaces",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
      <SectionHeading index="02" label="About" title="A bit about me" />

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        {/* narrative */}
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              I'm <span className="text-ink">Florish</span> — a frontend engineer who likes
              turning ambitious product ideas into fast, reliable interfaces people actually
              enjoy using. Over the last 5+ years I've shipped marketplaces, logistics
              platforms, healthtech products and real-time AI experiences, often as the sole
              or lead engineer owning the frontend end-to-end.
            </p>
            <p>
              My work leans heavily on{" "}
              <span className="text-ink">React, Next.js and TypeScript</span>, with a strong
              focus on resilient data flows, reusable component systems and measurable UX. I
              care about the details — from a cart-sync layer that survives expired sessions to
              a test suite that lets the team ship with confidence.
            </p>

            <div className="!mt-8 flex flex-wrap gap-2">
              {focus.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-sm text-muted"
                >
                  <Sparkles className="h-3.5 w-3.5 text-iris" />
                  {f}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* education + certs */}
        <div className="space-y-5">
          <Reveal delay={0.05}>
            <div className="rounded-2xl glass p-6">
              <div className="mb-3 flex items-center gap-2 label">
                <GraduationCap className="h-4 w-4" /> Education
              </div>
              <h3 className="font-display text-lg font-semibold">{education.degree}</h3>
              <p className="mt-1 text-sm text-muted">{education.school}</p>
              <p className="text-sm text-faint">{education.location}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl glass p-6">
              <div className="mb-4 flex items-center gap-2 label">
                <Award className="h-4 w-4" /> Certifications
              </div>
              <ul className="space-y-4">
                {certificates.map((c) => (
                  <li key={c.name} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-br from-iris to-violet" />
                    <div>
                      <p className="text-sm text-ink">{c.name}</p>
                      <p className="text-xs text-faint">
                        {c.issuer} · {c.date}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
