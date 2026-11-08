import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Layers, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { projects, qualityImage } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects | Creed Design & Construction East Africa" },
      {
        name: "description",
        content:
          "Warehouses, dormitories, skylights and agro-industrial facilities delivered by Creed Design and Construction Company East Africa Ltd across Uganda.",
      },
      { property: "og:title", content: "Our Projects | Creed Design & Construction" },
      {
        property: "og:description",
        content:
          "Featured Creed builds: Kayunga processing warehouse, Kisubi glass skylight, Gomba coffee drier and St. Theresa dormitory.",
      },
      { property: "og:image", content: projects[0]?.photos[0]?.src ?? "" },
      { name: "twitter:image", content: projects[0]?.photos[0]?.src ?? "" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const disciplines = [
  {
    title: "Steel works",
    body: "Precision engineering and durability: robust frameworks for industrial, commercial and residential structures. We fabricate and install high-quality steel products tailored to each project.",
  },
  {
    title: "Concrete works",
    body: "Strong foundations and structures that stand the design life. From reinforced concrete frames to intricate architectural detail, we build for sustainable performance.",
  },
  {
    title: "Roofing & cladding",
    body: "Long-span iron sheet roofs, ridge ventilation, skylights and flashings detailed to keep buildings dry, bright and comfortable year round.",
  },
];

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Featuring projects"
        lead="OUR"
        highlight="PROJECTS"
        description="A look at work delivered by our site teams across Uganda: industrial warehouses, agro-processing facilities, school dormitories and specialist steel and glass installations."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {disciplines.map((d) => (
            <article key={d.title} className="border-t-4 border-accent bg-card p-7 shadow-lift">
              <Wrench className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-bold text-primary">{d.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            </article>
          ))}
        </div>
      </section>

      {projects.map((p, index) => (
        <section
          key={p.slug}
          id={p.slug}
          className={index % 2 === 1 ? "faceted border-y border-border" : ""}
        >
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  Project {String(index + 1).padStart(2, "0")} · {p.sector}
                </p>
                <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">{p.title}</h2>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">Location:</strong> {p.location}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Layers className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">Materials used:</strong> {p.materials}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="text-foreground">Scope:</strong> {p.scope}
                    </span>
                  </li>
                </ul>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{p.summary}</p>
                <ul className="mt-6 space-y-2 border-l-4 border-accent pl-4 text-sm text-muted-foreground">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-2 rounded-sm accent-gradient px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground"
                  >
                    Start a similar project
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {p.photos.map((photo, i) => (
                  <figure
                    key={photo.src}
                    className={`shadow-lift ${i === 0 ? "sm:col-span-2" : ""}`}
                  >
                    <img
                      src={photo.src}
                      alt={`${p.title}, ${p.location}: ${photo.caption}`}
                      loading={index === 0 && i === 0 ? "eager" : "lazy"}
                      className={`w-full object-cover ${i === 0 ? "h-72" : "h-52"}`}
                    />
                    <figcaption className="border-l-4 border-accent bg-card px-4 py-3 text-xs text-muted-foreground">
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Commitment to quality
          </p>
          <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
            Checked at every stage
          </h2>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">Quality assurance:</strong> we adhere to stringent
              quality control measures at every stage of construction, so clients receive the best
              possible service and result.
            </p>
            <p>
              <strong className="text-foreground">Certifications:</strong> we are certified by the
              Uganda National Bureau of Registration to carry out our operations.
            </p>
            <p>
              <strong className="text-foreground">Safety standards:</strong> safety is our top
              priority. We run regular training and strictly follow site safety regulations to keep
              workers and clients secure.
            </p>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-5 -bottom-5 h-24 w-24 rounded-full bg-primary" />
          <div className="ring-photo relative aspect-square">
            <img
              src={qualityImage}
              alt="Structural steel portal frame erected on a Creed project site"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="brand-gradient">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-3xl font-bold text-primary-foreground sm:text-4xl">
            We don't just build structures; we build relationships.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm accent-gradient px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground"
          >
            Schedule a consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
