import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import contactImage from "@/assets/contact-blueprints.jpg";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Creed Design & Construction East Africa" },
      {
        name: "description",
        content:
          "Reach Creed Design and Construction Company East Africa Ltd at Grove Mall, Kitintale, Kampala. Call +256 702 806 852 or email us about new projects.",
      },
      { property: "og:title", content: "Contact Us — Creed Design & Construction East Africa" },
      {
        property: "og:description",
        content: "We welcome inquiries for new projects and collaborations. Reach out to us today.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  {
    icon: MapPin,
    label: "Address",
    lines: ["Grove Mall, Kitintale, Kampala."],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+256 702 806 852", "+256 700 608 641", "+256 703 934 444"],
    hrefs: ["tel:+256702806852", "tel:+256700608641", "tel:+256703934444"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["creed.design.constructioncompany@gmail.com"],
    hrefs: ["mailto:creed.design.constructioncompany@gmail.com"],
  },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        lead="CONTACT"
        highlight="US"
        description="We welcome inquiries for new projects and collaborations. Reach out to us today!"
      />

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-primary">Get in Touch</h2>
          <div className="mt-3 h-1 w-14 bg-accent" />
          <ul className="mt-8 space-y-7">
            {details.map(({ icon: Icon, label, lines, hrefs }) => (
              <li key={label} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Icon className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                    {label}
                  </p>
                  <div className="mt-1 space-y-0.5 text-sm text-muted-foreground">
                    {lines.map((line, i) =>
                      hrefs?.[i] ? (
                        <p key={line}>
                          <a href={hrefs[i]} className="break-all hover:text-primary">
                            {line}
                          </a>
                        </p>
                      ) : (
                        <p key={line}>{line}</p>
                      ),
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -bottom-4 left-4 h-16 w-16 rounded-full bg-primary" />
          <div className="ring-photo relative aspect-square">
            <img
              src={contactImage}
              alt="Architect reviewing house plans with a model house and ruler"
              loading="lazy"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
