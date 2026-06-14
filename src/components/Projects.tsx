import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Stagger } from "./Reveal";

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
      <SectionHeading
        index="01"
        label="Selected Work"
        title="Products I've shipped"
        description="A selection of production applications I've designed and built — marketplaces, logistics, healthtech and real-time AI experiences."
      />

      <Stagger className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Stagger.Item key={p.name} className={i === 0 ? "sm:col-span-2" : ""}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="ring-gradient group relative flex h-full flex-col overflow-hidden rounded-2xl glass p-6 sm:p-7"
            >
              {/* hover glow */}
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-linear-to-br ${p.accent} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
              />

              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`grid h-11 w-11 place-items-center rounded-xl bg-linear-to-br ${p.accent} font-display text-lg font-bold text-white`}
                  >
                    {p.name[0]}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-faint">
                    {p.category}
                  </span>
                </div>

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${p.name}`}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line text-muted transition-all hover:border-line-strong hover:text-ink"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              <h3 className="font-display text-xl font-semibold sm:text-2xl">{p.name}</h3>
              <p
                className={`mt-3 text-sm leading-relaxed text-muted ${
                  i === 0 ? "max-w-2xl" : ""
                }`}
              >
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          </Stagger.Item>
        ))}
      </Stagger>
    </section>
  );
}
