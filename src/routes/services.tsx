import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardList,
  Compass,
  HardHat,
  Route as RouteIcon,
  Wrench,
  CheckCircle2,
  Building,
  Store,
  Factory,
  MessageCircle,
  Download,
} from "lucide-react";
import servicesImage from "@/assets/services-beams.jpg";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY_PROFILE_URL, whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Creed Design & Construction East Africa" },
      {
        name: "description",
        content:
          "Design and planning, construction and implementation, infrastructure development, maintenance and rehabilitation, and consultancy services.",
      },
      { property: "og:title", content: "Our Services — Creed Design & Construction East Africa" },
      {
        property: "og:description",
        content:
          "Five core service lines covering the full building lifecycle, from first drawings to long-term maintenance.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Compass,
    title: "Design and Planning",
    body: "Architectural concepts, structural design, approvals support and buildable documentation.",
    points: ["Architectural & structural drawings", "3D visualisation", "Local authority approvals", "Bills of quantities"],
  },
  {
    icon: HardHat,
    title: "Construction & Implementation",
    body: "Full building works for residential, commercial and industrial projects with supervised site teams.",
    points: ["Substructure & superstructure", "Roofing & finishes", "MEP coordination", "Health & safety compliance"],
  },
  {
    icon: RouteIcon,
    title: "Infrastructure Development",
    body: "Access works, drainage, external works and supporting civil infrastructure.",
    points: ["Access roads & paving", "Storm & foul drainage", "Water & power reticulation", "Boundary & landscaping"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Rehabilitation",
    body: "Renovation, structural repair and planned maintenance that extends asset life.",
    points: ["Structural repairs", "Refurbishment & fit-out", "Waterproofing", "Planned preventive maintenance"],
  },
  {
    icon: ClipboardList,
    title: "Consultancy Services",
    body: "Feasibility, costing, project management and technical advisory from concept to handover.",
    points: ["Feasibility & site studies", "Cost planning", "Project & construction management", "Technical due diligence"],
  },
];

const sectors = [
  { icon: Building, title: "Residential", body: "Homes, apartments and residential estates finished to a high standard." },
  { icon: Store, title: "Commercial", body: "Retail, offices, hospitality and mixed-use developments." },
  { icon: Factory, title: "Industrial", body: "Warehouses, factories and steel-frame production facilities." },
];

const process = [
  { step: "01", title: "Brief & site visit", body: "We listen to your goals and assess the site." },
  { step: "02", title: "Design & costing", body: "Drawings, specifications and a transparent quotation." },
  { step: "03", title: "Build", body: "Supervised construction with weekly progress reporting." },
  { step: "04", title: "Handover & care", body: "Snag-free handover plus optional maintenance plan." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        lead="OUR"
        highlight="SERVICES"
        description="Five core service lines that cover the full building lifecycle — delivered by an experienced in-house team of architects, engineers and site professionals."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-sm shadow-panel">
            <img
              src={servicesImage}
              alt="Steel beams of a building under construction with a worker on scaffolding"
              loading="lazy"
              width={1200}
              height={1500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="border-t-4 border-accent bg-card p-6 shadow-lift">
            <h3 className="text-lg font-bold text-primary">Need a quick estimate?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Use our online quotation system, or send us a message on WhatsApp — we usually respond
              the same day.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-sm brand-gradient px-4 py-2.5 text-xs font-bold uppercase tracking-[0.13em] text-primary-foreground"
              >
                Request quotation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappLink("Hello Creed, I'd like a quote for a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.13em] text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <ul className="space-y-4">
          {services.map(({ icon: Icon, title, body, points }) => (
            <li
              key={title}
              className="border border-border bg-card p-6 transition-shadow hover:shadow-lift"
            >
              <div className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Icon className="h-6 w-6 text-accent-foreground" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-primary">{title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold text-primary">Sectors we serve</h2>
          <div className="mt-3 h-1 w-14 bg-accent" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sectors.map(({ icon: Icon, title, body }) => (
              <article key={title} className="bg-card p-7 shadow-lift">
                <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold text-primary">How we work</h2>
        <div className="mt-3 h-1 w-14 bg-accent" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(({ step, title, body }) => (
            <div key={step} className="border-t-4 border-primary bg-card p-6 shadow-lift">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Step {step}</span>
              <h3 className="mt-2 text-lg font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faceted border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-14 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-3xl font-bold text-primary">
            Tell us about your project scope
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={COMPANY_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-primary/30 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Company Profile
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-sm brand-gradient px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-lift"
            >
              Request a quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
