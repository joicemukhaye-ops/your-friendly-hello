import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Layers, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import frameAsset from "@/assets/project-warehouse-frame.jpg.asset.json";
import roofAsset from "@/assets/project-warehouse-roof.jpg.asset.json";
import steelAsset from "@/assets/project-warehouse-steel.jpg.asset.json";
import { whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Creed Design & Construction East Africa" },
      {
        name: "description",
        content:
          "Selected projects delivered by Creed Design and Construction Company East Africa Ltd, including the Kayunga processing warehouse in concrete and steel.",
      },
      { property: "og:title", content: "Our Projects — Creed Design & Construction" },
      {
        property: "og:description",
        content:
          "See featured Creed builds across Uganda — industrial warehouses, commercial and residential developments.",
      },
      { property: "og:image", content: frameAsset.url },
      { name: "twitter:image", content: frameAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const gallery = [
  { src: frameAsset.url, caption: "Steel truss roof frame erected on concrete block walls." },
  { src: steelAsset.url, caption: "Sunset progress: full steel purlin assembly and vent block walls." },
  { src: roofAsset.url, caption: "Completed roof with ridge vents; boundary walling underway." },
];

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Featured builds"
        lead="OUR"
        highlight="PROJECTS"
        description="A look at some of the work delivered by our site teams across Uganda — from industrial warehouses to residential and commercial developments."
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Case study · Industrial
            </p>
            <h2 className="mt-4 text-4xl font-bold text-primary sm:text-5xl">
              Processing Warehouse
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <strong className="text-foreground">Location:</strong> Kayunga, Kangulumira
                </span>
              </li>
              <li className="flex gap-3">
                <Layers className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <strong className="text-foreground">Materials:</strong> Concrete and Steel
                </span>
              </li>
            </ul>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A ground-up industrial processing warehouse combining reinforced concrete walls with a
              purpose-engineered steel truss roof and ventilated block infill. Creed handled
              structural design, foundations, block-work, steel fabrication and roofing through to
              boundary walling and site works.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-border py-6">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  Sector
                </dt>
                <dd className="mt-1 text-lg font-bold text-primary">Industrial</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  Scope
                </dt>
                <dd className="mt-1 text-lg font-bold text-primary">Design + Build</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  Structure
                </dt>
                <dd className="mt-1 text-lg font-bold text-primary">Steel + RCC</dd>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-sm accent-gradient px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground"
              >
                Start a similar project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappLink("Hi Creed, I'd like to discuss a warehouse / industrial build.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            {gallery.map((g, i) => (
              <figure key={g.src} className={i === 0 ? "shadow-lift" : "shadow-lift"}>
                <img
                  src={g.src}
                  alt={g.caption}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-64 w-full object-cover sm:h-72"
                />
                <figcaption className="border-l-4 border-accent bg-card px-4 py-3 text-xs text-muted-foreground">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="faceted border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold text-primary">More sectors we build in</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Residential",
                body: "Family homes, apartments and estate developments finished to a high standard.",
              },
              {
                title: "Commercial",
                body: "Offices, retail units and mixed-use buildings designed for daily performance.",
              },
              {
                title: "Industrial",
                body: "Warehouses, processing plants and workshops with engineered steel structures.",
              },
            ].map((sector) => (
              <article key={sector.title} className="border-t-4 border-accent bg-card p-6 shadow-lift">
                <h3 className="text-lg font-bold text-primary">{sector.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sector.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
