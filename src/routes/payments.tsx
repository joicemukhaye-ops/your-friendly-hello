import { createFileRoute } from "@tanstack/react-router";
import { Banknote, Building2, CreditCard, MessageCircle, Smartphone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/payments")({
  head: () => ({
    meta: [
      { title: "Payments — Creed Design & Construction" },
      {
        name: "description",
        content:
          "Pay Creed Design & Construction East Africa securely via bank transfer, mobile money or card. Funds are deposited directly to the company account.",
      },
      { property: "og:title", content: "Payments — Creed Design & Construction" },
      {
        property: "og:description",
        content: "Bank transfer, mobile money and card options for project deposits and invoices.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PaymentsPage,
});

function PaymentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Secure payments"
        lead="MAKE A"
        highlight="PAYMENT"
        description="Deposits, progress payments and final invoices — all routed straight to the Creed company account."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-3">
        <article className="border-t-4 border-accent bg-card p-7 shadow-lift">
          <Building2 className="h-7 w-7 text-primary" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-bold text-primary">Bank transfer</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Direct deposit to the Creed company bank account. Ideal for larger project payments.
          </p>
          <dl className="mt-5 space-y-2 text-sm">
            <Row k="Account name" v="Creed Design and Construction Company East Africa Ltd" />
            <Row k="Bank" v="Provided on invoice" />
            <Row k="Account no." v="Provided on invoice" />
            <Row k="Currency" v="UGX / USD" />
          </dl>
          <p className="mt-4 text-xs text-muted-foreground">
            Request full banking details on your invoice or by WhatsApp.
          </p>
        </article>

        <article className="border-t-4 border-accent bg-card p-7 shadow-lift">
          <Smartphone className="h-7 w-7 text-primary" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-bold text-primary">Mobile money</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            MTN MoMo and Airtel Money accepted for deposits and small progress payments.
          </p>
          <dl className="mt-5 space-y-2 text-sm">
            <Row k="MTN MoMo" v="+256 702 806 852" />
            <Row k="Airtel Money" v="+256 700 608 641" />
            <Row k="Reference" v="Your project code" />
          </dl>
          <a
            href={whatsappLink("Hello Creed, I'd like to make a mobile money payment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-primary hover:text-accent"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Confirm on WhatsApp
          </a>
        </article>

        <article className="border-t-4 border-accent bg-card p-7 shadow-lift">
          <CreditCard className="h-7 w-7 text-primary" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-bold text-primary">Card &amp; online</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Visa, Mastercard and online transfers via our secure payment link — issued per invoice
            and settled directly to our bank account.
          </p>
          <a
            href={whatsappLink(
              "Hello Creed, please send me an online card payment link for my invoice.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-sm brand-gradient px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-lift"
          >
            Request payment link
          </a>
        </article>
      </section>

      <section className="faceted border-y border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent">
              <Banknote className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-primary">Every payment is receipted</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                You'll receive an official receipt and updated statement after each payment.
              </p>
            </div>
          </div>
          <a
            href={whatsappLink("Hello Creed, I've made a payment — here are the details:")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lift"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Notify us of a payment
          </a>
        </div>
      </section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-border/60 py-1.5">
      <dt className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">{k}</dt>
      <dd className="text-right text-sm text-foreground">{v}</dd>
    </div>
  );
}
