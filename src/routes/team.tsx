import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import denisAsset from "@/assets/team-denis.jpg.asset.json";
import fuljensioAsset from "@/assets/team-fuljensio.jpg.asset.json";
import michaelAsset from "@/assets/team-michael.jpg.asset.json";
import edmundAsset from "@/assets/team-edmund.jpg.asset.json";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Creed Design & Construction East Africa" },
      {
        name: "description",
        content:
          "Meet the Creed leadership: team lead, project manager, finance & procurement, and administration driving quality construction across East Africa.",
      },
      { property: "og:title", content: "Our Team — Creed Design & Construction" },
      {
        property: "og:description",
        content:
          "Dedicated professionals leading Creed Design and Construction Company East Africa Ltd.",
      },
      { property: "og:image", content: denisAsset.url },
      { name: "twitter:image", content: denisAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

const team = [
  {
    name: "Kisekka Denis",
    role: "Team Leader",
    photo: denisAsset.url,
    bio: "With over 5 years in the industry, Denis leads with a vision for innovative construction and design solutions.",
  },
  {
    name: "Kyagambiddwa Fuljensio",
    role: "Project Manager",
    photo: fuljensioAsset.url,
    bio: "Brings expert leadership in construction and implementation to ensure seamless project execution and structural excellence.",
  },
  {
    name: "Matovu Michael",
    role: "Finance & Procurement",
    photo: michaelAsset.url,
    bio: "Excels in optimising budgets, streamlining procurement processes and ensuring cost-effective resource management.",
  },
  {
    name: "Tabula Edmund Ntale",
    role: "Administrator",
    photo: edmundAsset.url,
    bio: "Streamlines operations, enhances organisational efficiency and ensures seamless project coordination.",
  },
];

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Dedicated professionals"
        lead="OUR"
        highlight="TEAM"
        description="Meet the key people leading Creed Design and Construction Company East Africa Ltd."
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article key={m.name} className="text-center">
              <div className="mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-full ring-4 ring-accent">
                <img
                  src={m.photo}
                  alt={`${m.name}, ${m.role} at Creed`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="mt-5 text-lg font-bold text-primary">{m.name}</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                {m.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
