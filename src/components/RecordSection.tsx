import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Download, Pencil, Plus, Trash2, ArrowUpDown } from "lucide-react";
import {
  exportCsv,
  formatMoney,
  isDueSoon,
  today,
  type FieldDef,
  type SectionDef,
} from "@/lib/farm";
import { useDeleteRecord, useRecords, useSaveRecord, type Row } from "@/lib/use-records";

function blankRecord(section: SectionDef): Row {
  const r: Row = {};
  for (const f of section.fields) {
    if (f.type === "date") r[f.key] = f.key === "date" ? today() : "";
    else if (f.type === "number") r[f.key] = "";
    else if (f.type === "select") r[f.key] = f.options?.[0] ?? "";
    else r[f.key] = "";
  }
  return r;
}

function displayValue(f: FieldDef, value: unknown) {
  if (value === null || value === undefined || value === "") return "—";
  if (f.key === "cost" || f.key === "price_per_kg") return formatMoney(Number(value));
  return String(value);
}

export function RecordSection({
  section,
  suggestions = [],
  extraColumns = [],
}: {
  section: SectionDef;
  suggestions?: string[];
  extraColumns?: { key: string; label: string; compute: (row: Row) => number }[];
}) {
  const { data: rows = [], isLoading } = useRecords(section.table);
  const save = useSaveRecord(section.table);
  const remove = useDeleteRecord(section.table);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [q, setQ] = useState("");
  const [sortKey, setSortKey] = useState("date");
  const [sortAsc, setSortAsc] = useState(false);
  const [editing, setEditing] = useState<Row | null>(null);

  const filtered = useMemo(() => {
    const list = rows.filter((r) => {
      if (from && String(r.date) < from) return false;
      if (to && String(r.date) > to) return false;
      if (q && !String(r[section.nameKey] ?? "").toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
    return [...list].sort((a, b) => {
      const av = a[sortKey] ?? "";
      const bv = b[sortKey] ?? "";
      const cmp =
        typeof av === "number" || typeof bv === "number"
          ? Number(av) - Number(bv)
          : String(av).localeCompare(String(bv));
      return sortAsc ? cmp : -cmp;
    });
  }, [rows, from, to, q, sortKey, sortAsc, section.nameKey]);

  const costTotal = section.costKey
    ? filtered.reduce((s, r) => s + Number(r[section.costKey!] ?? 0), 0)
    : null;
  const extraTotals = extraColumns.map((c) => ({
    label: c.label,
    value: filtered.reduce((s, r) => s + c.compute(r), 0),
  }));

  const columns = [
    ...section.fields.map((f) => ({ key: f.key, label: f.short ?? f.label })),
    ...extraColumns.map((c) => ({ key: c.key, label: c.label })),
  ];

  const cellFor = (row: Row, key: string) => {
    const extra = extraColumns.find((c) => c.key === key);
    if (extra) return formatMoney(extra.compute(row));
    const f = section.fields.find((x) => x.key === key)!;
    return displayValue(f, row[key]);
  };

  const toggleSort = (key: string) => {
    if (key === sortKey) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const handleExport = () =>
    exportCsv(
      section.table,
      columns,
      filtered.map((r) => {
        const o: Row = {};
        for (const c of columns) {
          const extra = extraColumns.find((x) => x.key === c.key);
          o[c.key] = extra ? extra.compute(r) : (r[c.key] ?? "");
        }
        return o;
      }),
    );

  return (
    <div className="space-y-4">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <div className="min-w-0">
          <h1 className="truncate font-display text-2xl font-semibold text-foreground">
            {section.title}
          </h1>
          <p className="text-sm text-muted-foreground">{filtered.length} record(s)</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="icon" onClick={handleExport} aria-label="Export CSV">
            <Download className="h-4 w-4" />
          </Button>
          <Button onClick={() => setEditing(blankRecord(section))}>
            <Plus className="mr-1 h-4 w-4" /> Add Record
          </Button>
        </div>
      </header>

      <Card className="grid gap-3 p-4 sm:grid-cols-3">
        <div className="min-w-0">
          <Label className="text-xs">From</Label>
          <Input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
        </div>
        <div className="min-w-0">
          <Label className="text-xs">To</Label>
          <Input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
        </div>
        <div className="min-w-0">
          <Label className="text-xs">Filter by {section.nameLabel}</Label>
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" />
        </div>
      </Card>

      {(costTotal !== null || extraTotals.length > 0) && (
        <div className="flex flex-wrap gap-3">
          {costTotal !== null && (
            <Card className="flex-1 min-w-[150px] p-3">
              <p className="text-xs text-muted-foreground">Total cost (filtered)</p>
              <p className="font-display text-lg font-semibold">{formatMoney(costTotal)}</p>
            </Card>
          )}
          {extraTotals.map((t) => (
            <Card key={t.label} className="flex-1 min-w-[150px] p-3">
              <p className="text-xs text-muted-foreground">Total {t.label.toLowerCase()} (filtered)</p>
              <p className="font-display text-lg font-semibold">{formatMoney(t.value)}</p>
            </Card>
          ))}
        </div>
      )}

      {isLoading ? (
        <p className="p-6 text-center text-sm text-muted-foreground">Loading…</p>
      ) : filtered.length === 0 ? (
        <Card className="p-8 text-center text-sm text-muted-foreground">{section.emptyText}</Card>
      ) : (
        <>
          {/* Mobile cards */}
          <div className="space-y-3 md:hidden">
            {filtered.map((row) => (
              <Card
                key={row.id}
                className={`p-4 ${section.dueKey && isDueSoon(row[section.dueKey]) ? "border-l-4 border-l-accent bg-warning/40" : ""}`}
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-2">
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{row[section.nameKey] || "—"}</p>
                    <p className="text-xs text-muted-foreground">{row.date}</p>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <Button variant="ghost" size="icon" onClick={() => setEditing(row)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => remove.mutate(row.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
                <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
                  {columns
                    .filter((c) => c.key !== "date" && c.key !== section.nameKey)
                    .map((c) => (
                      <div key={c.key} className="min-w-0">
                        <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
                          {c.label}
                        </dt>
                        <dd className="truncate">{cellFor(row, c.key)}</dd>
                      </div>
                    ))}
                </dl>
              </Card>
            ))}
          </div>

          {/* Desktop table */}
          <Card className="hidden overflow-x-auto md:block">
            <table className="w-full text-sm">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  {columns.map((c) => (
                    <th key={c.key} className="whitespace-nowrap px-3 py-2 text-left font-medium">
                      <button
                        className="inline-flex items-center gap-1 hover:underline"
                        onClick={() => toggleSort(c.key)}
                      >
                        {c.label}
                        <ArrowUpDown className="h-3 w-3 opacity-50" />
                      </button>
                    </th>
                  ))}
                  <th className="px-3 py-2" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => (
                  <tr
                    key={row.id}
                    className={`border-t border-border ${section.dueKey && isDueSoon(row[section.dueKey]) ? "bg-warning" : ""}`}
                  >
                    {columns.map((c) => (
                      <td key={c.key} className="max-w-[220px] truncate px-3 py-2">
                        {cellFor(row, c.key)}
                      </td>
                    ))}
                    <td className="whitespace-nowrap px-2 py-2 text-right">
                      <Button variant="ghost" size="icon" onClick={() => setEditing(row)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => remove.mutate(row.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </>
      )}

      <RecordDialog
        section={section}
        suggestions={suggestions}
        record={editing}
        onClose={() => setEditing(null)}
        onSave={(values) => {
          save.mutate(values, { onSuccess: () => setEditing(null) });
        }}
      />
    </div>
  );
}

function RecordDialog({
  section,
  record,
  suggestions,
  onClose,
  onSave,
}: {
  section: SectionDef;
  record: Row | null;
  suggestions: string[];
  onClose: () => void;
  onSave: (values: Row) => void;
}) {
  const [values, setValues] = useState<Row>({});
  const [key, setKey] = useState<string | null>(null);

  if (record && key !== (record.id ?? "new")) {
    setKey(record.id ?? "new");
    setValues({ ...record });
  }

  const set = (k: string, v: unknown) => setValues((p) => ({ ...p, [k]: v }));

  const submit = () => {
    const payload: Row = { id: record?.id };
    for (const f of section.fields) {
      const raw = values[f.key];
      if (f.type === "number") payload[f.key] = raw === "" || raw === null ? 0 : Number(raw);
      else if (f.type === "date") payload[f.key] = raw ? raw : null;
      else payload[f.key] = raw ?? "";
    }
    if (!payload.date) payload.date = today();
    onSave(payload);
  };

  return (
    <Dialog open={!!record} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display">
            {record?.id ? "Edit" : "Add"} {section.singular}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-3">
          {section.fields.map((f) => (
            <div key={f.key} className="grid gap-1">
              <Label htmlFor={f.key}>
                {f.label}
                {f.required && <span className="text-destructive"> *</span>}
              </Label>
              {f.type === "select" ? (
                <Select value={values[f.key] || f.options?.[0]} onValueChange={(v) => set(f.key, v)}>
                  <SelectTrigger id={f.key}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {f.options?.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : f.type === "textarea" ? (
                <Textarea
                  id={f.key}
                  value={values[f.key] ?? ""}
                  maxLength={1000}
                  onChange={(e) => set(f.key, e.target.value)}
                />
              ) : (
                <>
                  <Input
                    id={f.key}
                    type={f.type === "number" ? "number" : f.type === "date" ? "date" : "text"}
                    list={f.type === "crop" ? `${section.table}-${f.key}-list` : undefined}
                    maxLength={f.type === "text" || f.type === "crop" ? 200 : undefined}
                    value={values[f.key] ?? ""}
                    onChange={(e) => set(f.key, e.target.value)}
                  />
                  {f.type === "crop" && (
                    <datalist id={`${section.table}-${f.key}-list`}>
                      {suggestions.map((s) => (
                        <option key={s} value={s} />
                      ))}
                    </datalist>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={submit}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
