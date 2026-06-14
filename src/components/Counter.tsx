import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

type CounterProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

/** Counts up from 0 to `to` the first time it scrolls into view. */
export function Counter({ to, prefix = "", suffix = "", duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate(value) {
        node.textContent = `${prefix}${Math.round(value)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, prefix, suffix, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {0}
      {suffix}
    </span>
  );
}
