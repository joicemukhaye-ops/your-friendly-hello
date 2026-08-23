import { createFileRoute, Link, Outlet, redirect, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import {
  LayoutDashboard,
  SprayCan,
  ClipboardList,
  Beef,
  Bird,
  Wheat,
  Coins,
  Scale,
  LogOut,
  Sprout,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({ to: "/auth" });
    return { user: data.user };
  },
  component: Layout,
});

const NAV = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/spraying", label: "Spraying", icon: SprayCan },
  { to: "/activities", label: "Activities", icon: ClipboardList },
  { to: "/animals", label: "Animals", icon: Beef },
  { to: "/birds", label: "Birds", icon: Bird },
  { to: "/harvest", label: "Harvest", icon: Wheat },
  { to: "/sales", label: "Sales", icon: Coins },
  { to: "/balance", label: "Balance", icon: Scale },
] as const;

function Layout() {
  const navigate = useNavigate();

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 hidden w-56 flex-col bg-sidebar p-4 text-sidebar-foreground md:flex">
        <div className="mb-6 flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
            <Sprout className="h-5 w-5" />
          </span>
          <span className="truncate font-display text-lg font-semibold">Shamba</span>
        </div>
        <nav className="flex flex-1 flex-col gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-sidebar-accent"
              activeProps={{ className: "bg-sidebar-accent font-medium" }}
            >
              <n.icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{n.label}</span>
            </Link>
          ))}
        </nav>
        <Button variant="ghost" className="justify-start text-sidebar-foreground hover:bg-sidebar-accent" onClick={signOut}>
          <LogOut className="mr-2 h-4 w-4" /> Sign out
        </Button>
      </aside>

      <header className="sticky top-0 z-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border-b border-border bg-sidebar px-4 py-3 text-sidebar-foreground md:hidden">
        <div className="flex min-w-0 items-center gap-2">
          <Sprout className="h-5 w-5 shrink-0" />
          <span className="truncate font-display text-base font-semibold">Shamba Records</span>
        </div>
        <Button variant="ghost" size="icon" onClick={signOut} aria-label="Sign out">
          <LogOut className="h-4 w-4" />
        </Button>
      </header>

      <main className="px-4 pb-24 pt-4 md:ml-56 md:px-8 md:pb-8">
        <Outlet />
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-10 grid grid-cols-8 border-t border-border bg-card md:hidden">
        {NAV.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            className="flex flex-col items-center gap-0.5 py-2 text-[10px] text-muted-foreground"
            activeProps={{ className: "text-primary font-medium" }}
          >
            <n.icon className="h-4 w-4" />
            <span className="truncate px-0.5">{n.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
