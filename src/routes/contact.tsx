import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Download, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import contactImage from "@/assets/contact-blueprints.jpg";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY_PROFILE_URL, whatsappLink } from "@/lib/contact";

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
        <div className="space-y-5">
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
          <div className="border-t-4 border-accent bg-card p-6 shadow-lift">
            <div className="flex items-center gap-2 text-primary">
              <Clock className="h-5 w-5" aria-hidden="true" />
              <h3 className="text-sm font-bold uppercase tracking-[0.14em]">Office hours</h3>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li className="flex justify-between"><span>Mon – Fri</span><span>8:00 – 18:00</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>9:00 – 14:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-sm brand-gradient px-4 py-2.5 text-xs font-bold uppercase tracking-[0.13em] text-primary-foreground shadow-lift"
            >
              Request a quote
            </Link>
            <a
              href={whatsappLink("Hello Creed, I'd like to talk to your team.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.13em] text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={COMPANY_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-primary/30 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.13em] text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Profile
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-primary">Find us</h2>
          <div className="mt-3 h-1 w-14 bg-accent" />
          <div className="mt-6 overflow-hidden rounded-sm border border-border shadow-panel">
            <iframe
              title="Creed office location — Grove Mall, Kitintale, Kampala"
              src="https://www.google.com/maps?q=Grove+Mall+Kitintale+Kampala&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </div>
      </section>
    </>
  );
}
