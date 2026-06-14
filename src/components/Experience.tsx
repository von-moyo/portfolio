import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
      <SectionHeading
        index="03"
        label="Career"
        title="Where I've worked"
        description="5+ years across startups and remote teams — frequently as the sole or lead frontend engineer owning architecture end-to-end."
      />

      <div className="relative">
        {/* animated vertical rail */}
        <motion.span
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px origin-top bg-linear-to-b from-iris via-violet to-transparent sm:block"
        />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.company + job.period} delay={i * 0.05}>
              <div className="relative sm:pl-12">
                {/* dot */}
                <span className="absolute left-0 top-6 hidden h-[15px] w-[15px] items-center justify-center sm:flex">
                  <span className="h-[15px] w-[15px] rounded-full border-2 border-iris bg-bg" />
                  {job.current && (
                    <span className="absolute h-[15px] w-[15px] animate-ping rounded-full bg-iris/60" />
                  )}
                </span>

                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="rounded-2xl glass p-6 sm:p-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-semibold sm:text-xl">
                          {job.role}
                        </h3>
                        {job.current && (
                          <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
                            Present
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-sm text-iris">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.company}
                        <span className="text-faint">· {job.type}</span>
                      </div>
                    </div>
                    <div className="text-right text-xs text-faint">
                      <div className="font-mono">{job.period}</div>
                      <div className="mt-0.5">{job.location}</div>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((pt, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-iris/70" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-line bg-white/[0.02] px-2 py-1 font-mono text-[11px] text-faint"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
