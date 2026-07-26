interface SectionHeadingProps {
  lead: string;
  highlight: string;
  kicker?: string;
  align?: "left" | "center";
}

export function SectionHeading({ lead, highlight, kicker, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="text-primary">{lead} </span>
        <span className="text-accent">{highlight}</span>
      </h2>
      {kicker ? (
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          {kicker}
        </p>
      ) : null}
    </div>
  );
}
