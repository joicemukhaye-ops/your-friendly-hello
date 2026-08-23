export type FieldType = "date" | "text" | "number" | "select" | "textarea" | "crop";

export type FieldDef = {
  key: string;
  label: string;
  type: FieldType;
  options?: string[];
  required?: boolean;
  short?: string;
};

export type SectionDef = {
  table: string;
  title: string;
  singular: string;
  emptyText: string;
  fields: FieldDef[];
  nameKey: string;
  nameLabel: string;
  costKey?: string;
  dueKey?: string;
};

export const CURRENCY = "UGX";

export function formatMoney(value: number): string {
  const n = Math.round(Number(value) || 0);
  return `${CURRENCY} ${n.toLocaleString("en-US")}`;
}

export function formatQty(value: number): string {
  const n = Number(value) || 0;
  return `${n.toLocaleString("en-US", { maximumFractionDigits: 2 })} kg`;
}

export function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export function isDueSoon(dateStr?: string | null): boolean {
  if (!dateStr) return false;
  const due = new Date(`${dateStr}T00:00:00`).getTime();
  const now = new Date(new Date().toISOString().slice(0, 10) + "T00:00:00").getTime();
  const diff = (due - now) / 86400000;
  return diff >= 0 && diff <= 7;
}

export function exportCsv(filename: string, columns: { key: string; label: string }[], rows: Record<string, unknown>[]) {
  const esc = (v: unknown) => {
    const s = v === null || v === undefined ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const csv = [
    columns.map((c) => esc(c.label)).join(","),
    ...rows.map((r) => columns.map((c) => esc(r[c.key])).join(",")),
  ].join("\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `${filename}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export const SPRAYING: SectionDef = {
  table: "sprayings",
  title: "Spraying Schedule",
  singular: "spray record",
  emptyText: "No sprays logged yet — tap Add Record to log your first spray.",
  nameKey: "crop",
  nameLabel: "Crop",
  dueKey: "next_due_date",
  fields: [
    { key: "date", label: "Date", type: "date", required: true },
    { key: "crop", label: "Crop", type: "crop", required: true },
    { key: "field", label: "Field / Plot", type: "text" },
    { key: "product_used", label: "Product Used", type: "text" },
    { key: "reason", label: "Reason", type: "select", options: ["Pest", "Disease", "Weed", "Preventive"] },
    { key: "dosage", label: "Dosage / Rate", type: "text" },
    { key: "quantity_mixed", label: "Quantity Mixed", type: "text" },
    { key: "sprayed_by", label: "Sprayed By", type: "text" },
    { key: "weather", label: "Weather Conditions", type: "text" },
    { key: "interval_info", label: "Re-entry / Pre-harvest Interval", type: "text", short: "Interval" },
    { key: "next_due_date", label: "Next Due Date", type: "date" },
    { key: "remarks", label: "Remarks", type: "textarea" },
  ],
};

export const ACTIVITIES: SectionDef = {
  table: "activities",
  title: "Daily Activities",
  singular: "activity",
  emptyText: "No activities logged yet — tap Add Record to log your first activity.",
  nameKey: "activity",
  nameLabel: "Activity",
  costKey: "cost",
  fields: [
    { key: "date", label: "Date", type: "date", required: true },
    { key: "activity", label: "Activity", type: "text", required: true },
    { key: "area", label: "Field / Plot / Area", type: "text", short: "Area" },
    { key: "performed_by", label: "Performed By", type: "text" },
    { key: "hours", label: "Time Spent (hours)", type: "number", short: "Hours" },
    { key: "materials", label: "Materials / Inputs Used", type: "text", short: "Materials" },
    { key: "cost", label: "Cost", type: "number" },
    { key: "status", label: "Status", type: "select", options: ["Done", "Ongoing", "Planned"] },
    { key: "remarks", label: "Remarks", type: "textarea" },
  ],
};

export const ANIMALS: SectionDef = {
  table: "animal_treatments",
  title: "Animal Treatment Schedule",
  singular: "animal treatment",
  emptyText: "No animal treatments logged yet — tap Add Record to log your first treatment.",
  nameKey: "animal_name",
  nameLabel: "Animal",
  costKey: "cost",
  dueKey: "next_due_date",
  fields: [
    { key: "date", label: "Date", type: "date", required: true },
    { key: "animal_name", label: "Animal ID / Name", type: "crop", required: true, short: "Animal" },
    { key: "species", label: "Species / Breed", type: "text" },
    { key: "treatment", label: "Treatment / Vaccine Given", type: "text", short: "Treatment" },
    { key: "reason", label: "Reason", type: "select", options: ["Illness", "Routine", "Preventive"] },
    { key: "dosage", label: "Dosage", type: "text" },
    { key: "route", label: "Route", type: "select", options: ["Oral", "Injection", "Topical"] },
    { key: "treated_by", label: "Treated By", type: "text" },
    { key: "cost", label: "Cost", type: "number" },
    { key: "next_due_date", label: "Next Due Date", type: "date" },
    { key: "remarks", label: "Remarks", type: "textarea" },
  ],
};

export const BIRDS: SectionDef = {
  table: "bird_treatments",
  title: "Bird Treatment Schedule",
  singular: "bird treatment",
  emptyText: "No bird treatments logged yet — tap Add Record to log your first treatment.",
  nameKey: "flock_id",
  nameLabel: "Flock / Batch",
  costKey: "cost",
  dueKey: "next_due_date",
  fields: [
    { key: "date", label: "Date", type: "date", required: true },
    { key: "flock_id", label: "Flock / Batch ID", type: "crop", required: true, short: "Flock" },
    { key: "bird_type", label: "Bird Type", type: "select", options: ["Layer", "Broiler", "Other"] },
    { key: "bird_count", label: "No. of Birds", type: "number", short: "Birds" },
    { key: "treatment", label: "Treatment / Vaccine Given", type: "text", short: "Treatment" },
    { key: "reason", label: "Reason", type: "select", options: ["Illness", "Routine", "Preventive"] },
    { key: "dosage", label: "Dosage", type: "text" },
    { key: "route", label: "Route", type: "select", options: ["Water", "Injection", "Spray", "Eye Drop"] },
    { key: "treated_by", label: "Treated By", type: "text" },
    { key: "cost", label: "Cost", type: "number" },
    { key: "next_due_date", label: "Next Due Date", type: "date" },
    { key: "remarks", label: "Remarks", type: "textarea" },
  ],
};

export const HARVESTS: SectionDef = {
  table: "harvests",
  title: "Harvest Log",
  singular: "harvest",
  emptyText: "No harvests logged yet — tap Add Record to log your first harvest.",
  nameKey: "crop",
  nameLabel: "Crop",
  fields: [
    { key: "date", label: "Date Harvested", type: "date", required: true, short: "Date" },
    { key: "crop", label: "Crop Name", type: "crop", required: true, short: "Crop" },
    { key: "field", label: "Field / Plot", type: "text" },
    { key: "quantity_kg", label: "Quantity Harvested (kg)", type: "number", required: true, short: "Qty (kg)" },
    { key: "remarks", label: "Remarks", type: "textarea" },
  ],
};

export const SALES: SectionDef = {
  table: "sales",
  title: "Sales Log",
  singular: "sale",
  emptyText: "No sales logged yet — tap Add Record to log your first sale.",
  nameKey: "crop",
  nameLabel: "Crop",
  fields: [
    { key: "date", label: "Date Sold", type: "date", required: true, short: "Date" },
    { key: "crop", label: "Crop Name", type: "crop", required: true, short: "Crop" },
    { key: "quantity_kg", label: "Quantity Sold (kg)", type: "number", required: true, short: "Qty (kg)" },
    { key: "price_per_kg", label: "Price per kg", type: "number", short: "Price/kg" },
    { key: "buyer", label: "Buyer", type: "text" },
    { key: "remarks", label: "Remarks", type: "textarea" },
  ],
};

export const SECTIONS = [SPRAYING, ACTIVITIES, ANIMALS, BIRDS, HARVESTS, SALES];
