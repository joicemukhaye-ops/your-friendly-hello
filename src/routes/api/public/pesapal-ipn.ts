import { createFileRoute } from "@tanstack/react-router";

/**
 * Pesapal Instant Payment Notification endpoint.
 * Pesapal calls this with GET query params after a transaction changes state.
 * We acknowledge the notification so Pesapal stops retrying.
 */
export const Route = createFileRoute("/api/public/pesapal-ipn")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const orderTrackingId = url.searchParams.get("OrderTrackingId") ?? "";
        const merchantReference = url.searchParams.get("OrderMerchantReference") ?? "";
        const notificationType = url.searchParams.get("OrderNotificationType") ?? "";

        return Response.json({
          orderNotificationType: notificationType,
          orderTrackingId,
          orderMerchantReference: merchantReference,
          status: 200,
        });
      },
    },
  },
});
