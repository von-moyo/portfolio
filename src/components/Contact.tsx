import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { profile, socials } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
      <Reveal>
        <div className="ring-gradient relative overflow-hidden rounded-[2rem] glass px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 rounded-full bg-iris/25 blur-[120px]" />

          <span className="label">Contact</span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Have a project in mind?
            <br />
            <span className="text-gradient">Let's build it.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-muted">
            I'm currently open to frontend roles and select freelance work. Drop me a line and
            I'll get back to you.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-iris to-violet px-6 py-3.5 text-sm font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              {profile.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-xl border border-line-strong px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-white/5"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> Copy email
                </>
              )}
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
