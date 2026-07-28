import { useState } from "react";
import { Loader2, Lock } from "lucide-react";
import { startPayment } from "@/lib/payments.functions";

export function PesapalForm() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setBusy(true);
    const fd = new FormData(event.currentTarget);
    try {
      const { redirectUrl } = await startPayment({
        data: {
          amount: Number(fd.get("amount")),
          currency: (fd.get("currency") as "UGX" | "USD") ?? "UGX",
          description: String(fd.get("description") ?? ""),
          firstName: String(fd.get("firstName") ?? ""),
          lastName: String(fd.get("lastName") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
        },
      });
      window.location.href = redirectUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Payment could not be started.");
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="text-sm">
        <span className="font-semibold text-foreground">First name</span>
        <input name="firstName" required className="input mt-1.5" placeholder="Jane" />
      </label>
      <label className="text-sm">
        <span className="font-semibold text-foreground">Last name</span>
        <input name="lastName" required className="input mt-1.5" placeholder="Doe" />
      </label>
      <label className="text-sm">
        <span className="font-semibold text-foreground">Email</span>
        <input
          name="email"
          type="email"
          required
          className="input mt-1.5"
          placeholder="you@example.com"
        />
      </label>
      <label className="text-sm">
        <span className="font-semibold text-foreground">Phone</span>
        <input
          name="phone"
          required
          className="input mt-1.5"
          placeholder="+256 7xx xxx xxx"
          inputMode="tel"
        />
      </label>
      <label className="text-sm">
        <span className="font-semibold text-foreground">Currency</span>
        <select name="currency" className="input mt-1.5" defaultValue="UGX">
          <option value="UGX">UGX — Uganda Shillings</option>
          <option value="USD">USD — US Dollars</option>
        </select>
      </label>
      <label className="text-sm">
        <span className="font-semibold text-foreground">Amount</span>
        <input
          name="amount"
          type="number"
          min={500}
          step="1"
          required
          className="input mt-1.5"
          placeholder="500000"
        />
      </label>
      <label className="text-sm sm:col-span-2">
        <span className="font-semibold text-foreground">What is this payment for?</span>
        <input
          name="description"
          required
          className="input mt-1.5"
          placeholder="Deposit — Kayunga warehouse, invoice INV-014"
        />
      </label>

      {error ? (
        <p className="sm:col-span-2 border-l-4 border-destructive bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={busy}
          className="inline-flex items-center gap-2 rounded-sm accent-gradient px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground shadow-lift disabled:opacity-60"
        >
          {busy ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Lock className="h-4 w-4" aria-hidden="true" />
          )}
          {busy ? "Opening secure checkout…" : "Pay securely now"}
        </button>
        <p className="text-xs text-muted-foreground">
          You'll be redirected to Pesapal to complete payment by mobile money, Visa or Mastercard.
        </p>
      </div>
    </form>
  );
}
