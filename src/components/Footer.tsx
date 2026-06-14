import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-linear-to-br from-iris to-violet font-display text-xs font-bold text-white">
            V
          </span>
          <span className="text-sm text-muted">
            © {year} {profile.name}. Built with React, Vite & Tailwind.
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          aria-label="Back to top"
          className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
