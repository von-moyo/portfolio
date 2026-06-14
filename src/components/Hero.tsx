import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, socials, stats } from "../data/portfolio";
import { Counter } from "./Counter";

const headline = ["I", "build", "production-grade", "web", "applications."];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // mouse spotlight + subtle avatar parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const tiltX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const tiltY = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
    ref.current?.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current?.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative mx-auto flex max-w-6xl flex-col justify-center px-5 pt-40 pb-20 sm:px-6"
    >
      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 transition-opacity"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 30%), rgba(124,124,255,0.12), transparent 70%)",
        }}
      />

      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        {/* ---- left: copy ---- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs tracking-wider text-muted">
              Available for work
            </span>
          </motion.div>

          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-[4.1rem]">
            {headline.map((word, i) => (
              <span
                key={i}
                className="mr-[0.28em] inline-block overflow-hidden pb-[0.12em] align-bottom"
              >
                <motion.span
                  className={
                    word === "production-grade" ? "text-gradient inline-block" : "inline-block"
                  }
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + i * 0.09,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.blurb}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.82 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-iris to-violet px-5 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white/5"
            >
              Get in touch
            </a>

            <div className="ml-1 flex items-center gap-1">
              {socials.slice(0, 3).map((s) => {
                const Icon =
                  s.label === "GitHub" ? Github : s.label === "LinkedIn" ? Linkedin : Mail;
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 flex items-center gap-1.5 text-sm text-faint"
          >
            <MapPin className="h-4 w-4" />
            {profile.location}
          </motion.div>
        </div>

        {/* ---- right: avatar ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 900 }}
          className="relative mx-auto w-full max-w-xs lg:max-w-none"
        >
          <div className="ring-gradient relative overflow-hidden rounded-[1.75rem] glass p-2">
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-iris/20 to-transparent" />
            <img
              src={profile.avatar}
              alt={profile.name}
              className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-top"
            />
          </div>

          {/* floating chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-4 top-10 rounded-xl px-3 py-2 text-xs font-medium shadow-lg sm:-left-8"
          >
            <span className="text-gray font-display text-base font-bold">5+</span>{" "}
            <span className="text-gray">years</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-3 bottom-16 rounded-xl px-3 py-2 font-mono text-xs text-muted shadow-lg sm:-right-6"
          >
            Next.js · TypeScript
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="glass absolute -bottom-4 left-8 rounded-xl px-3 py-2 font-mono text-xs text-muted shadow-lg"
          >
            React · WebSocket
          </motion.div>
        </motion.div>
      </div>

      {/* ---- stats strip ---- */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-bg-soft px-5 py-6">
            <div className="font-display text-3xl font-bold sm:text-4xl">
              <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
