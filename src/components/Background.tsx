import { useEffect, useState } from "react";

/** Fixed ambient layer: dotted grid, floating gradient blobs + cursor spotlight. */
export function Background() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.25 });

  useEffect(() => {
    const handler = (e: MouseEvent) =>
      setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="absolute inset-0 grid-dots opacity-60" />

      {/* gradient blobs */}
      <div
        className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(124,124,255,0.30), transparent 70%)",
          animation: "floaty 16s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(168,85,247,0.22), transparent 70%)",
          animation: "floaty 20s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(34,211,238,0.16), transparent 70%)",
          animation: "floaty 24s ease-in-out infinite",
        }}
      />

      {/* cursor spotlight */}
      <div
        className="absolute inset-0 transition-[background] duration-300 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${pos.x * 100}% ${
            pos.y * 100
          }%, rgba(124,124,255,0.08), transparent 70%)`,
        }}
      />

      {/* top + bottom vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-bg to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-bg to-transparent" />
    </div>
  );
}
