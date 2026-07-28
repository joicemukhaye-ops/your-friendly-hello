import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import storyImage from "@/assets/story-warehouse.jpg";
import denisAsset from "@/assets/team-denis.jpg.asset.json";
import fuljensioAsset from "@/assets/team-fuljensio.jpg.asset.json";
import michaelAsset from "@/assets/team-michael.jpg.asset.json";
import edmundAsset from "@/assets/team-edmund.jpg.asset.json";
import { PageHero } from "@/components/site/PageHero";
import { projects, qualityImage } from "@/lib/projects";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story & Team — Creed Design & Construction East Africa" },
      {
        name: "description",
        content:
          "Who we are, how we work and the people who lead Creed Design and Construction Company East Africa Ltd — innovative, sustainable, high-quality building solutions.",
      },
      { property: "og:title", content: "Our Story & Team — Creed Design & Construction" },
      {
        property: "og:description",
        content:
          "Company overview, values, working approach and leadership team of Creed Design and Construction Company East Africa Ltd.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const team = [
  {
    name: "Kisekka Denis",
    role: "Team Leader",
    photo: denisAsset.url,
    bio: "With over 5 years in the industry, Denis leads with a vision for innovative construction and design solutions.",
    focus: "Design direction · Client relationships",
  },
  {
    name: "Kyagambiddwa Fuljensio",
    role: "Project Manager",
    photo: fuljensioAsset.url,
    bio: "Brings expert leadership in construction and implementation to ensure seamless project execution and structural excellence.",
    focus: "Programme · Site supervision",
  },
  {
    name: "Matovu Michael",
    role: "Finance & Procurement",
    photo: michaelAsset.url,
    bio: "Excels in optimising budgets, streamlining procurement and ensuring cost-effective resource management.",
    focus: "Budgets · Materials sourcing",
  },
  {
    name: "Tabula Edmund Ntale",
    role: "Administrator",
    photo: edmundAsset.url,
    bio: "Streamlines operations, enhances organisational efficiency and ensures seamless project coordination.",
    focus: "Operations · Coordination",
  },
];

const approach = [
  {
    step: "01",
    title: "Listen & assess",
    body: "We visit the site, understand the brief, the budget and the constraints before drawing anything.",
  },
  {
    step: "02",
    title: "Design & cost",
    body: "Concept drawings, structural detailing and a transparent bill of quantities you can interrogate line by line.",
  },
  {
    step: "03",
    title: "Build & supervise",
    body: "Skilled crews, fabricated steel, disciplined quality checks and weekly progress reporting.",
  },
  {
    step: "04",
    title: "Hand over & support",
    body: "Snagging, clean-up, documented handover and a team that stays reachable after the last truck leaves.",
  },
];

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
          <p>
            From processing warehouses in Kayunga and coffee driers in Gomba to school dormitories
            and glass skylights in Entebbe, our portfolio is built on structural steel, sound
            concrete and site teams that finish what they start.
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
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">How we work</p>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
          From first site visit to handover
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((a) => (
            <article key={a.step} className="border-t-4 border-accent bg-card p-6 shadow-lift">
              <p className="text-3xl font-bold text-accent">{a.step}</p>
              <h3 className="mt-3 text-lg font-bold text-primary">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="team" className="faceted border-y border-border scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Dedicated professionals
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Meet our team</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A small, accountable leadership team — you deal directly with the people running your
            project, not a call centre.
          </p>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <article key={m.name} className="text-center">
                <div className="mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-full ring-4 ring-accent">
                  <img
                    src={m.photo}
                    alt={`${m.name}, ${m.role} at Creed`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary">{m.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                  {m.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  {m.focus}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-primary" />
          <div className="ring-photo relative aspect-square">
            <img
              src={qualityImage}
              alt="Steel portal frame erected by the Creed site team"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Commitment to quality
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Certified, supervised, safe
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            {[
              "Stringent quality control measures at every stage of construction.",
              "Certified by the Uganda National Bureau of Registration to carry out our operations.",
              "Regular safety training and strict adherence to on-site safety regulations.",
              "Documented progress reporting so you always know where your project stands.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary hover:text-accent"
          >
            See {projects.length} featured projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
