import { createFileRoute, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Shamba Farm Records — Crop, Animal & Sales Log Book" },
      {
        name: "description",
        content:
          "A simple mobile farm record book for sprays, daily activities, animal and bird treatments, harvests, sales and crop balance.",
      },
      { property: "og:title", content: "Shamba Farm Records" },
      {
        property: "og:description",
        content: "Track sprays, treatments, harvests, sales and crop balance from your phone.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: async () => {
    const { data } = await supabase.auth.getUser();
    throw redirect({ to: data.user ? "/dashboard" : "/auth" });
  },
  component: () => null,
});
