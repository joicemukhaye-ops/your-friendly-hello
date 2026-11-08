import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  /** Animation length in ms. */
  duration?: number;
  /** Delay before the count starts once visible, in ms. */
  delay?: number;
  /** Left-pad with zeros to this width, e.g. pad={2} renders 03. */
  pad?: number;
};

/**
 * Counts from 0 up to `to` the first time it scrolls into view.
 * Server render and no-JS show the final number; reduced-motion users never see the animation.
 */
export function CountUp({ to, duration = 1500, delay = 0, pad = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    setValue(0);
    let raf = 0;
    let timer = 0;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(to * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        timer = window.setTimeout(run, delay);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [to, duration, delay]);

  const format = (n: number) => String(n).padStart(pad, "0");

  return (
    <>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {format(value)}
      </span>
      <span className="sr-only">{format(to)}</span>
    </>
  );
}
