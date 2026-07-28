import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

export interface StartPaymentInput {
  amount: number;
  currency: "UGX" | "USD";
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const startPayment = createServerFn({ method: "POST" })
  .inputValidator((data: StartPaymentInput) => {
    const amount = Number(data?.amount);
    if (!Number.isFinite(amount) || amount < 500) {
      throw new Error("Enter a valid amount (minimum 500).");
    }
    if (!data?.email || !data.email.includes("@")) throw new Error("Enter a valid email address.");
    if (!data?.phone || data.phone.replace(/\D/g, "").length < 9) {
      throw new Error("Enter a valid phone number.");
    }
    if (!data?.firstName?.trim() || !data?.lastName?.trim()) {
      throw new Error("Enter your first and last name.");
    }
    return {
      amount: Math.round(amount * 100) / 100,
      currency: data.currency === "USD" ? ("USD" as const) : ("UGX" as const),
      description: (data.description || "Creed project payment").slice(0, 100),
      firstName: data.firstName.trim().slice(0, 60),
      lastName: data.lastName.trim().slice(0, 60),
      email: data.email.trim().slice(0, 120),
      phone: data.phone.trim().slice(0, 20),
    };
  })
  .handler(async ({ data }) => {
    const { submitPesapalOrder } = await import("./pesapal.server");
    const request = getRequest();
    if (!request) throw new Error("Payments must be started from the website.");
    const origin = new URL(request.url).origin;
    const reference = `CREED-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

    return submitPesapalOrder({ ...data, reference, origin });
  });

export const checkPaymentStatus = createServerFn({ method: "POST" })
  .inputValidator((data: { orderTrackingId: string }) => {
    if (!data?.orderTrackingId) throw new Error("Missing payment reference.");
    return { orderTrackingId: data.orderTrackingId };
  })
  .handler(async ({ data }) => {
    const { getPesapalStatus } = await import("./pesapal.server");
    return getPesapalStatus(data.orderTrackingId);
  });
