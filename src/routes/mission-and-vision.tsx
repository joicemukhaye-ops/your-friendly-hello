import { createFileRoute } from "@tanstack/react-router";
import missionImage from "@/assets/mission-frame.jpg";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/mission-and-vision")({
  head: () => ({
    meta: [
      { title: "Mission & Vision — Creed Design & Construction" },
      {
        name: "description",
        content:
          "Creed's mission: superior construction and design services through advanced technologies, eco-friendly practices and client-centric solutions.",
      },
      { property: "og:title", content: "Mission & Vision — Creed Design & Construction" },
      {
        property: "og:description",
        content:
          "To become the most trusted partner in construction, shaping the future of East Africa through cutting-edge designs and world-class quality.",
      },
    ],
  }),
  component: MissionPage,
});

function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="What drives us"
        lead="OUR MISSION"
        highlight="AND VISION"
        description="Clear commitments that guide every design decision and every day on site."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 lg:grid-cols-2">
        <div className="space-y-5 lg:order-first">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -bottom-6 right-8 h-16 w-16 rounded-full bg-accent" />
            <div className="ring-photo relative aspect-square">
              <img
                src={missionImage}
                alt="Steel portal frame structure at sunset on a Creed project"
                loading="lazy"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="border-t-4 border-accent bg-card p-6 shadow-lift">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Our promise</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Transparent costing and honest programmes.</li>
              <li>• Safety-first supervision on every site.</li>
              <li>• Sustainable materials wherever possible.</li>
              <li>• On-time handover with a proper snag list.</li>
            </ul>
          </div>
        </div>
        <div className="space-y-10">
          <article>
            <h2 className="text-2xl font-bold text-primary">Mission Statement</h2>
            <div className="mt-3 h-1 w-14 bg-accent" />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To provide superior construction and design services by integrating advanced
              technologies, eco-friendly practices, and client-centric solutions.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-bold text-primary">Vision Statement</h2>
            <div className="mt-3 h-1 w-14 bg-accent" />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To become the most trusted partner in construction, shaping the future of East Africa
              through cutting-edge designs and world-class quality.
            </p>
          </article>
        </div>
      </section>

      <section className="brand-gradient">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-3">
          {[
            {
              title: "Advanced technology",
              body: "Digital design, modern structural systems and efficient site methods.",
            },
            {
              title: "Eco-friendly practice",
              body: "Material choices and processes that reduce waste and long-term cost.",
            },
            {
              title: "Client-centred",
              body: "Solutions shaped around your budget, timeline and end use.",
            },
          ].map((item) => (
            <article key={item.title} className="border-t-4 border-accent pt-5">
              <h3 className="text-xl font-bold text-primary-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
