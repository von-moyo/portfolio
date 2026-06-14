import { Reveal } from "./Reveal";

type Props = {
  index: string;
  label: string;
  title: string;
  description?: string;
};

/** Consistent eyebrow + title block used at the top of each section. */
export function SectionHeading({ index, label, title, description }: Props) {
  return (
    <div className="mb-12 max-w-2xl">
      <Reveal>
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-sm text-faint">{index}</span>
          <span className="h-px w-8 bg-line-strong" />
          <span className="label">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
