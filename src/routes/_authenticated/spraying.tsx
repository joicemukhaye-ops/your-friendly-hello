import { createFileRoute } from "@tanstack/react-router";
import { RecordSection } from "@/components/RecordSection";
import { SPRAYING } from "@/lib/farm";
import { useCropSuggestions } from "@/lib/crop-names";

export const Route = createFileRoute("/_authenticated/spraying")({
  head: () => ({
    meta: [
      { title: "Spraying Schedule | Shamba Farm Records" },
      { name: "description", content: "Log crop sprays, products, dosages and next due dates." },
      { property: "og:title", content: "Spraying Schedule" },
      { property: "og:description", content: "Log crop sprays, products, dosages and next due dates." },
    ],
  }),
  component: () => <RecordSection section={SPRAYING} suggestions={useCropSuggestions()} />,
});
