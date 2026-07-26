import { Link } from "@tanstack/react-router";
import { Download, Menu, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { COMPANY_PROFILE_URL, whatsappLink } from "@/lib/contact";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Story" },
  { to: "/team", label: "Team" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/quote", label: "Get a Quote" },
  { to: "/payments", label: "Payments" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-6 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-xs font-bold uppercase tracking-[0.13em] text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={COMPANY_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-sm border border-primary/30 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.13em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Profile
          </a>
          <a
            href={whatsappLink("Hello Creed, I'd like to talk about a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-sm brand-gradient px-5 py-3 text-xs font-bold uppercase tracking-[0.13em] text-primary-foreground shadow-lift transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-primary xl:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-border bg-background px-4 py-3 xl:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-bold uppercase tracking-[0.1em] text-muted-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={COMPANY_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center gap-2 py-2.5 text-sm font-bold uppercase tracking-[0.1em] text-primary"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Company Profile
          </a>
        </nav>
      ) : null}
    </header>
  );
}
