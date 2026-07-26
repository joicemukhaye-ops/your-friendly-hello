import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Download, HardHat, MessageCircle, Ruler, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-steel-frame.jpg";
import storyImage from "@/assets/story-warehouse.jpg";
import warehouseFrame from "@/assets/project-warehouse-frame.jpg.asset.json";
import warehouseRoof from "@/assets/project-warehouse-roof.jpg.asset.json";
import warehouseSteel from "@/assets/project-warehouse-steel.jpg.asset.json";
import { SectionHeading } from "@/components/site/SectionHeading";
import { COMPANY_PROFILE_URL, whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Creed Design & Construction — Building East Africa" },
      {
        name: "description",
        content:
          "Creed Design and Construction Company East Africa Ltd delivers residential, commercial and industrial building solutions from Kampala, Uganda.",
      },
      { property: "og:title", content: "Creed Design & Construction — Building East Africa" },
      {
        property: "og:description",
        content:
          "Residential, commercial and industrial construction, design and infrastructure delivery across East Africa.",
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: Ruler,
    title: "Design led",
    body: "Concepts, drawings and planning that balance modern aesthetics with real functionality.",
  },
  {
    icon: HardHat,
    title: "Built to last",
    body: "Skilled site teams, disciplined supervision and structures engineered for longevity.",
  },
  {
    icon: ShieldCheck,
    title: "Sustainable",
    body: "Eco-friendly materials and cutting-edge technologies that create lasting value.",
  },
  {
    icon: Building2,
    title: "Timely delivery",
    body: "Projects handed over on programme — a trusted partner across the region.",
  },
];

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Steel roof structure under construction on a Creed project site"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-deep/70" />
        <div className="relative mx-auto max-w-6xl px-4 py-28 sm:py-36">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Design &amp; Construction · East Africa
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold text-primary-foreground sm:text-7xl">
            We build structures that outlast expectations
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80">
            Creed Design and Construction Company East Africa Ltd is a premier construction and
            design firm delivering innovative, sustainable and high-quality building solutions.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-sm accent-gradient px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground shadow-lift"
            >
              Request a quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappLink("Hello Creed, I'd like to talk about a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lift"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp us
            </a>
            <a
              href={COMPANY_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Company Profile
            </a>
          </div>
        </div>
      </section>

      <section className="faceted border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="border-t-4 border-accent bg-card p-6 shadow-lift"
            >
              <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-bold text-primary">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
        <div>
          <SectionHeading lead="OUR" highlight="STORY" kicker="Company overview" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            With a team of highly skilled personnel we are committed to transforming visions into
            remarkable structures that exceed client expectations. Our expertise spans residential,
            commercial and industrial projects, with a focus on blending modern aesthetics with
            functionality.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-border py-6">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                Sectors
              </dt>
              <dd className="mt-1 text-3xl font-bold text-primary">03</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                Services
              </dt>
              <dd className="mt-1 text-3xl font-bold text-primary">05</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                Based in
              </dt>
              <dd className="mt-1 text-3xl font-bold text-primary">UG</dd>
            </div>
          </dl>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary hover:text-accent"
          >
            Read our story
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-4 -top-6 h-24 w-24 rounded-full bg-accent" />
          <div className="ring-photo relative aspect-square">
            <img
              src={storyImage}
              alt="Completed steel warehouse frame on a Creed construction site"
              loading="lazy"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading lead="FEATURED" highlight="PROJECT" kicker="Recent work" />
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary hover:text-accent"
          >
            View all projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[warehouseFrame, warehouseSteel, warehouseRoof].map((img, i) => (
            <figure key={img.url} className="shadow-lift">
              <img
                src={img.url}
                alt="Processing Warehouse in Kayunga, Kangulumira — Concrete and Steel"
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <figcaption className="border-l-4 border-accent bg-card px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
                  {i === 0 ? "Structure" : i === 1 ? "Steel work" : "Roofing"}
                </p>
                <p className="mt-1 text-sm font-semibold text-primary">
                  Processing Warehouse · Kayunga
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="brand-gradient">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-3xl font-bold text-primary-foreground sm:text-4xl">
            Have a site, a drawing or an idea? Let's build it properly.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm accent-gradient px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground"
          >
            Contact us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
