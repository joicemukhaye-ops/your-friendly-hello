import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Sprout } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in | Shamba Farm Records" },
      {
        name: "description",
        content: "Sign in to your farm record book to log sprays, treatments, harvests and sales.",
      },
      { property: "og:title", content: "Sign in | Shamba Farm Records" },
      {
        property: "og:description",
        content: "Sign in to your farm record book to log sprays, treatments, harvests and sales.",
      },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/dashboard" });
    });
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || password.length < 6) {
      toast.error("Enter a valid email and a password of at least 6 characters.");
      return;
    }
    setBusy(true);
    const fn =
      mode === "signin"
        ? supabase.auth.signInWithPassword({ email: email.trim(), password })
        : supabase.auth.signUp({
            email: email.trim(),
            password,
            options: { emailRedirectTo: window.location.origin },
          });
    const { error } = await fn;
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    navigate({ to: "/dashboard" });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-sm p-6">
        <div className="mb-6 flex items-center gap-2">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Sprout className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h1 className="truncate font-display text-xl font-semibold">Shamba Records</h1>
            <p className="text-xs text-muted-foreground">Your farm record book</p>
          </div>
        </div>
        <form onSubmit={submit} className="grid gap-3">
          <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              maxLength={255}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              value={password}
              maxLength={72}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={busy}>
            {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </Button>
        </form>
        <button
          className="mt-4 w-full text-center text-sm text-muted-foreground hover:underline"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
        >
          {mode === "signin" ? "No account? Create one" : "Already have an account? Sign in"}
        </button>
      </Card>
    </main>
  );
}
