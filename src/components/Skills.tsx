import { skillGroups, marqueeSkills } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Stagger, Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="04"
          label="Toolbox"
          title="Skills & technologies"
          description="The stack I reach for to design, build, test and ship."
        />
      </div>

      {/* infinite marquee */}
      <Reveal className="relative my-4 select-none">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-bg to-transparent" />
        <div className="flex overflow-hidden">
          <div className="marquee-track">
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
              <span
                key={i}
                className="mx-3 inline-flex items-center gap-3 whitespace-nowrap font-display text-2xl font-medium text-faint sm:text-3xl"
              >
                {skill}
                <span className="text-iris">✦</span>
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* grouped skills */}
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Stagger.Item key={group.title}>
              <div className="h-full rounded-2xl glass p-6 transition-colors hover:bg-white/[0.05]">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-iris">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 text-sm text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
