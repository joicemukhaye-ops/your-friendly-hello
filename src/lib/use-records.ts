import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export type Row = Record<string, any>;

export function useRecords(table: string) {
  return useQuery({
    queryKey: [table],
    queryFn: async (): Promise<Row[]> => {
      const { data, error } = await supabase
        .from(table as any)
        .select("*")
        .order("date", { ascending: false })
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Row[];
    },
  });
}

export function useSaveRecord(table: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (values: Row) => {
      const { id, ...rest } = values;
      if (id) {
        const { error } = await supabase.from(table as any).update(rest).eq("id", id);
        if (error) throw error;
      } else {
        const { data: userData } = await supabase.auth.getUser();
        const { error } = await supabase
          .from(table as any)
          .insert({ ...rest, user_id: userData.user?.id });
        if (error) throw error;
      }
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: [table] });
      toast.success("Record saved");
    },
    onError: (e: Error) => toast.error(e.message),
  });
}

export function useDeleteRecord(table: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from(table as any).delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: [table] });
      toast.success("Record deleted");
    },
    onError: (e: Error) => toast.error(e.message),
  });
}
