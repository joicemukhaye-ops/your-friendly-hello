import { Link } from "@tanstack/react-router";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Creed Design & Construction home">
      <span className="relative flex h-11 w-11 items-center justify-center rounded-sm brand-gradient">
        <span className="absolute -top-1 h-3 w-7 rounded-t-full bg-accent" />
        <span className="text-lg font-bold leading-none text-primary-foreground">C</span>
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-2xl font-bold tracking-tight ${
            inverted ? "text-primary-foreground" : "text-primary"
          }`}
        >
          CR<span className="text-accent">EED</span>
        </span>
        <span
          className={`block text-[0.6rem] font-semibold uppercase tracking-[0.14em] ${
            inverted ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          Design &amp; Construction · East Africa
        </span>
      </span>
    </Link>
  );
}
