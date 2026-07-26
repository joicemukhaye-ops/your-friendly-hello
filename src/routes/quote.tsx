import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, MessageCircle, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { EMAIL_PRIMARY, PHONE_PRIMARY, whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quotation — Creed Design & Construction" },
      {
        name: "description",
        content:
          "Request an automated or human-assisted quotation from Creed Design & Construction East Africa. Instant WhatsApp submission or email a detailed brief.",
      },
      { property: "og:title", content: "Request a Quotation — Creed Design & Construction" },
      {
        property: "og:description",
        content:
          "Tell us about your project and receive a fast quotation by WhatsApp or email.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuotePage,
});

const services = [
  "Design and Planning",
  "Construction & Implementation",
  "Infrastructure Development",
  "Maintenance & Rehabilitation",
  "Consultancy Services",
];

const budgets = [
  "Under UGX 50M",
  "UGX 50M – 200M",
  "UGX 200M – 1B",
  "Above UGX 1B",
  "Not sure yet",
];

const timelines = ["ASAP / Urgent", "Within 1–3 months", "3–6 months", "6+ months", "Just planning"];

function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: services[1],
    location: "",
    budget: budgets[1],
    timeline: timelines[1],
    scope: "",
  });

  const message = useMemo(() => {
    return [
      "*New Quotation Request — Creed*",
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : null,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Service: ${form.service}`,
      form.location ? `Location: ${form.location}` : null,
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      "",
      "Scope / details:",
      form.scope || "(none provided)",
    ]
      .filter(Boolean)
      .join("\n");
  }, [form]);

  const canSubmit = form.name.trim() && form.phone.trim() && form.scope.trim();

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const emailHref = `mailto:${EMAIL_PRIMARY}?subject=${encodeURIComponent(
    "Quotation Request",
  )}&body=${encodeURIComponent(message)}`;

  return (
    <>
      <PageHero
        eyebrow="Quotation system"
        lead="REQUEST A"
        highlight="QUOTATION"
        description="Fill in your project details. Send instantly via WhatsApp for an automated response, or email us for a fully-costed human-assisted quotation."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.35fr_0.65fr]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5 border border-border bg-card p-6 shadow-lift sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name *">
              <input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="input"
                placeholder="Jane Nakato"
              />
            </Field>
            <Field label="Company (optional)">
              <input
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                className="input"
                placeholder="Acme Ltd"
              />
            </Field>
            <Field label="Phone / WhatsApp *">
              <input
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="input"
                placeholder="+256 …"
              />
            </Field>
            <Field label="Email (optional)">
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="input"
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Service required">
              <select
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                className="input"
              >
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
            <Field label="Project location">
              <input
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                className="input"
                placeholder="Kampala, Uganda"
              />
            </Field>
            <Field label="Estimated budget">
              <select
                value={form.budget}
                onChange={(e) => update("budget", e.target.value)}
                className="input"
              >
                {budgets.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
            <Field label="Timeline">
              <select
                value={form.timeline}
                onChange={(e) => update("timeline", e.target.value)}
                className="input"
              >
                {timelines.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Project scope / details *">
            <textarea
              required
              value={form.scope}
              onChange={(e) => update("scope", e.target.value)}
              rows={5}
              className="input"
              placeholder="Type of building, size, storeys, finishes, site conditions, plans available…"
            />
          </Field>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={canSubmit ? whatsappLink(message) : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!canSubmit}
              className={`inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lift transition-opacity ${
                canSubmit ? "hover:opacity-90" : "pointer-events-none opacity-50"
              }`}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Send via WhatsApp
            </a>
            <a
              href={canSubmit ? emailHref : undefined}
              aria-disabled={!canSubmit}
              className={`inline-flex items-center gap-2 rounded-sm brand-gradient px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-lift transition-opacity ${
                canSubmit ? "hover:opacity-90" : "pointer-events-none opacity-50"
              }`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email the team
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            Fields marked * are required. Your details go straight to our quotations desk — no data
            is stored on this website.
          </p>
        </form>

        <aside className="space-y-6">
          <div className="border-t-4 border-accent bg-card p-6 shadow-lift">
            <h2 className="text-lg font-bold text-primary">How our quotations work</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Instant WhatsApp acknowledgement with an initial cost range.",
                "A senior estimator reviews your brief within 24 working hours.",
                "Detailed, itemised quotation issued by email — no obligation.",
                "Optional site visit for accurate measurements and finishes.",
              ].map((line) => (
                <li key={line} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border bg-surface p-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
              Prefer to call?
            </h3>
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="mt-3 inline-flex items-center gap-2 text-base font-bold text-foreground hover:text-primary"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              {PHONE_PRIMARY}
            </a>
            <p className="mt-2 text-xs text-muted-foreground">Mon – Sat, 8:00 – 18:00 EAT</p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
