import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardList, Compass, HardHat, Route as RouteIcon, Wrench } from "lucide-react";
import servicesImage from "@/assets/services-beams.jpg";
import { PageHero } from "@/components/site/PageHero";

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
  },
  {
    icon: HardHat,
    title: "Construction & Implementation",
    body: "Full building works for residential, commercial and industrial projects with supervised site teams.",
  },
  {
    icon: RouteIcon,
    title: "Infrastructure Development",
    body: "Access works, drainage, external works and supporting civil infrastructure.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Rehabilitation",
    body: "Renovation, structural repair and planned maintenance that extends asset life.",
  },
  {
    icon: ClipboardList,
    title: "Consultancy Services",
    body: "Feasibility, costing, project management and technical advisory from concept to handover.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        lead="OUR"
        highlight="SERVICES"
        description="Five core service lines that cover the full building lifecycle."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-[0.85fr_1.15fr]">
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
        <ul className="space-y-4">
          {services.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex gap-5 border border-border bg-card p-6 transition-shadow hover:shadow-lift"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent">
                <Icon className="h-6 w-6 text-accent-foreground" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-primary">{title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="faceted border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-14 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-3xl font-bold text-primary">
            Tell us about your project scope
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm brand-gradient px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-lift"
          >
            Request a quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
