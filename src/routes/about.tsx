import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import storyImage from "@/assets/story-warehouse.jpg";
import denisAsset from "@/assets/team-denis.jpg.asset.json";
import fuljensioAsset from "@/assets/team-fuljensio.jpg.asset.json";
import michaelAsset from "@/assets/team-michael.jpg.asset.json";
import edmundAsset from "@/assets/team-edmund.jpg.asset.json";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Creed Design & Construction East Africa" },
      {
        name: "description",
        content:
          "A premier construction and design firm specializing in innovative, sustainable and high-quality building solutions across East Africa.",
      },
      { property: "og:title", content: "Our Story — Creed Design & Construction East Africa" },
      {
        property: "og:description",
        content:
          "Company overview of Creed Design and Construction Company East Africa Ltd: expertise, values and approach.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company overview"
        lead="OUR"
        highlight="STORY"
        description="Creed Design and Construction Company East Africa Ltd is a premier construction and design firm specializing in delivering innovative, sustainable and high-quality building solutions."
      />

      <section className="mx-auto grid max-w-6xl items-start gap-14 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <h2 className="text-2xl font-bold text-primary">Who we are</h2>
          <p>
            <strong className="text-foreground">
              Creed Design and Construction Company East Africa Ltd
            </strong>{" "}
            is a premier construction and design firm specializing in delivering innovative,
            sustainable, and high-quality building solutions. With a team of highly skilled
            personnel we are committed to transforming visions into remarkable structures that
            exceed client expectations. Our expertise spans residential, commercial, and industrial
            projects, with a focus on blending modern aesthetics with functionality.
          </p>
          <p>
            At Creed, we prioritize sustainability, leveraging cutting-edge technologies and
            eco-friendly materials to create lasting value for our clients and communities. Our
            dedication to excellence, integrity, and timely project delivery has established us as a
            trusted partner in the construction industry. With a passion for redefining spaces,
            Creed Design and{" "}
            <strong className="text-foreground">Construction Company East Africa Ltd</strong> stands
            as a symbol of innovation and reliability in the region.
          </p>
          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {["Residential", "Commercial", "Industrial"].map((sector) => (
              <div key={sector} className="border-l-4 border-accent bg-surface px-4 py-5">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
                  {sector}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-accent" />
            <div className="ring-photo relative aspect-square">
              <img
                src={storyImage}
                alt="Steel frame warehouse structure built by Creed"
                loading="lazy"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="border-t-4 border-accent bg-card p-6 shadow-lift">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-primary">At a glance</h3>
            <dl className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Based in</dt>
                <dd className="mt-1 text-2xl font-bold text-primary">Uganda</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Sectors</dt>
                <dd className="mt-1 text-2xl font-bold text-primary">3</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Service lines</dt>
                <dd className="mt-1 text-2xl font-bold text-primary">5</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Coverage</dt>
                <dd className="mt-1 text-2xl font-bold text-primary">East Africa</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="faceted border-y border-border">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-3">
          {[
            {
              title: "Excellence",
              body: "Quality workmanship checked at every stage, from foundation to finishes.",
            },
            {
              title: "Integrity",
              body: "Transparent costing, honest programmes and accountable site management.",
            },
            {
              title: "Innovation",
              body: "Modern methods and materials that redefine how spaces are built and used.",
            },
          ].map((value) => (
            <article key={value.title} className="bg-card p-7 shadow-lift">
              <h3 className="text-xl font-bold text-primary">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Dedicated professionals
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Meet our team</h2>
          </div>
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary hover:text-accent"
          >
            Full team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Kisekka Denis", role: "Team Leader", photo: denisAsset.url },
            { name: "Kyagambiddwa Fuljensio", role: "Project Manager", photo: fuljensioAsset.url },
            { name: "Matovu Michael", role: "Finance & Procurement", photo: michaelAsset.url },
            { name: "Tabula Edmund Ntale", role: "Administrator", photo: edmundAsset.url },
          ].map((m) => (
            <div key={m.name} className="text-center">
              <div className="mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-full ring-4 ring-accent">
                <img
                  src={m.photo}
                  alt={`${m.name}, ${m.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-base font-bold text-primary">{m.name}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
