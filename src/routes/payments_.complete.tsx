import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Clock, XCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { checkPaymentStatus } from "@/lib/payments.functions";
import { whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/payments_/complete")({
  head: () => ({
    meta: [
      { title: "Payment Status — Creed Design & Construction" },
      {
        name: "description",
        content:
          "Confirmation page for online payments made to Creed Design and Construction Company East Africa Ltd.",
      },
      { property: "og:title", content: "Payment Status — Creed Design & Construction" },
      { property: "og:description", content: "Your Creed payment confirmation and receipt details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PaymentCompletePage,
});

type Status = Awaited<ReturnType<typeof checkPaymentStatus>>;

function PaymentCompletePage() {
  const [state, setState] = useState<"loading" | "done" | "error">("loading");
  const [result, setResult] = useState<Status | null>(null);
  const [trackingId, setTrackingId] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("OrderTrackingId") ?? "";
    setTrackingId(id);
    if (!id) {
      setState("error");
      return;
    }
    checkPaymentStatus({ data: { orderTrackingId: id } })
      .then((r) => {
        setResult(r);
        setState("done");
      })
      .catch(() => setState("error"));
  }, []);

  const completed = result?.status?.toUpperCase() === "COMPLETED";

  return (
    <>
      <PageHero
        eyebrow="Online payment"
        lead="PAYMENT"
        highlight="STATUS"
        description="Thank you — here is the outcome of your payment to Creed Design and Construction Company East Africa Ltd."
      />

      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="border-t-4 border-accent bg-card p-8 shadow-lift">
          {state === "loading" ? (
            <p className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
              Checking your payment with Pesapal…
            </p>
          ) : state === "error" ? (
            <div>
              <XCircle className="h-8 w-8 text-destructive" aria-hidden="true" />
              <h1 className="mt-4 text-2xl font-bold text-primary">
                We couldn't confirm this payment
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">
                If money left your account, please send us the transaction message on WhatsApp and
                we will reconcile it immediately.
              </p>
            </div>
          ) : (
            <div>
              {completed ? (
                <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden="true" />
              ) : (
                <Clock className="h-8 w-8 text-accent" aria-hidden="true" />
              )}
              <h1 className="mt-4 text-2xl font-bold text-primary">
                {completed ? "Payment received" : `Payment ${result?.status?.toLowerCase()}`}
              </h1>
              <dl className="mt-6 space-y-2 text-sm">
                <Row k="Status" v={result?.status ?? "—"} />
                <Row
                  k="Amount"
                  v={result?.amount ? `${result.currency} ${result.amount.toLocaleString()}` : "—"}
                />
                <Row k="Method" v={result?.method || "—"} />
                <Row k="Confirmation code" v={result?.confirmationCode || "—"} />
                <Row k="Reference" v={result?.reference || trackingId} />
              </dl>
              <p className="mt-5 text-xs text-muted-foreground">
                An official receipt will be issued and sent to you. Keep this reference for your
                records.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/payments"
              className="inline-flex items-center rounded-sm brand-gradient px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground"
            >
              Back to payments
            </Link>
            <a
              href={whatsappLink(
                `Hello Creed, about my online payment (ref: ${trackingId || "n/a"}):`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm bg-[#25D366] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white"
            >
              Contact us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-border/60 py-2">
      <dt className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">{k}</dt>
      <dd className="text-right text-sm text-foreground">{v}</dd>
    </div>
  );
}
