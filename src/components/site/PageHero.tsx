interface PageHeroProps {
  eyebrow: string;
  lead: string;
  highlight: string;
  description?: string;
}

export function PageHero({ eyebrow, lead, highlight, description }: PageHeroProps) {
  return (
    <section className="faceted border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
        <h1 className="mt-4 text-5xl font-bold sm:text-6xl">
          <span className="text-primary">{lead} </span>
          <span className="text-accent">{highlight}</span>
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
