const LIVE_BASE = "https://pay.pesapal.com/v3";
const SANDBOX_BASE = "https://cybqa.pesapal.com/pesapalv3";

function baseUrl() {
  return (process.env.PESAPAL_ENV ?? "live").toLowerCase() === "sandbox"
    ? SANDBOX_BASE
    : LIVE_BASE;
}

async function requestToken(): Promise<string> {
  const consumer_key = process.env.PESAPAL_CONSUMER_KEY;
  const consumer_secret = process.env.PESAPAL_CONSUMER_SECRET;
  if (!consumer_key || !consumer_secret) {
    throw new Error("Pesapal credentials are not configured.");
  }
  const res = await fetch(`${baseUrl()}/api/Auth/RequestToken`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ consumer_key, consumer_secret }),
  });
  const body = (await res.json()) as { token?: string; error?: unknown };
  if (!res.ok || !body.token) {
    throw new Error("Could not authenticate with Pesapal.");
  }
  return body.token;
}

async function registerIpn(token: string, ipnUrl: string): Promise<string> {
  const res = await fetch(`${baseUrl()}/api/URLSetup/RegisterIPN`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ url: ipnUrl, ipn_notification_type: "GET" }),
  });
  const body = (await res.json()) as { ipn_id?: string };
  if (!res.ok || !body.ipn_id) {
    throw new Error("Could not register the Pesapal notification URL.");
  }
  return body.ipn_id;
}

export interface SubmitOrderInput {
  amount: number;
  currency: string;
  description: string;
  reference: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  origin: string;
}

export async function submitPesapalOrder(input: SubmitOrderInput) {
  const token = await requestToken();
  const ipnId = await registerIpn(token, `${input.origin}/api/public/pesapal-ipn`);

  const res = await fetch(`${baseUrl()}/api/Transactions/SubmitOrderRequest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id: input.reference,
      currency: input.currency,
      amount: input.amount,
      description: input.description,
      callback_url: `${input.origin}/payments/complete`,
      notification_id: ipnId,
      billing_address: {
        email_address: input.email,
        phone_number: input.phone,
        first_name: input.firstName,
        last_name: input.lastName,
      },
    }),
  });

  const body = (await res.json()) as {
    order_tracking_id?: string;
    redirect_url?: string;
    error?: { message?: string; code?: string } | null;
  };

  if (!res.ok || !body.redirect_url) {
    throw new Error(body.error?.message ?? "Pesapal could not create this payment.");
  }

  return {
    redirectUrl: body.redirect_url,
    orderTrackingId: body.order_tracking_id ?? "",
  };
}

export async function getPesapalStatus(orderTrackingId: string) {
  const token = await requestToken();
  const res = await fetch(
    `${baseUrl()}/api/Transactions/GetTransactionStatus?orderTrackingId=${encodeURIComponent(orderTrackingId)}`,
    {
      headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
    },
  );
  const body = (await res.json()) as {
    payment_status_description?: string;
    payment_method?: string;
    amount?: number;
    currency?: string;
    confirmation_code?: string;
    description?: string;
    merchant_reference?: string;
  };
  if (!res.ok) {
    throw new Error("Could not read the payment status from Pesapal.");
  }
  return {
    status: body.payment_status_description ?? "UNKNOWN",
    method: body.payment_method ?? "",
    amount: body.amount ?? 0,
    currency: body.currency ?? "",
    confirmationCode: body.confirmation_code ?? "",
    reference: body.merchant_reference ?? "",
  };
}
