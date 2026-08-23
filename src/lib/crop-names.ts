import { useRecords, type Row } from "@/lib/use-records";

export function useCropSuggestions(): string[] {
  const { data: harvests = [] } = useRecords("harvests");
  const { data: sales = [] } = useRecords("sales");
  const names = new Set<string>();
  for (const r of [...harvests, ...sales] as Row[]) {
    const c = String(r.crop ?? "").trim();
    if (c) names.add(c);
  }
  return [...names].sort((a, b) => a.localeCompare(b));
}

export type CropBalanceRow = {
  crop: string;
  harvested: number;
  sold: number;
  remaining: number;
  value: number;
};

export function buildCropBalance(harvests: Row[], sales: Row[]): CropBalanceRow[] {
  const map = new Map<string, CropBalanceRow>();
  const get = (crop: string) => {
    const key = crop.trim() || "(unnamed)";
    if (!map.has(key)) map.set(key, { crop: key, harvested: 0, sold: 0, remaining: 0, value: 0 });
    return map.get(key)!;
  };
  for (const h of harvests) get(String(h.crop ?? "")).harvested += Number(h.quantity_kg ?? 0);
  for (const s of sales) {
    const row = get(String(s.crop ?? ""));
    row.sold += Number(s.quantity_kg ?? 0);
    row.value += Number(s.quantity_kg ?? 0) * Number(s.price_per_kg ?? 0);
  }
  const rows = [...map.values()];
  for (const r of rows) r.remaining = r.harvested - r.sold;
  return rows.sort((a, b) => a.crop.localeCompare(b.crop));
}
