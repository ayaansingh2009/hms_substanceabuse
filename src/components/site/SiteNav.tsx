import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/facts", label: "The Facts" },
  { to: "/sport", label: "Sport & Steroids" },
  { to: "/schools", label: "Schools & Parents" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-bold tracking-tight text-primary">
            Unfiltered
          </span>
          <span className="hidden text-xs text-muted-foreground sm:inline">unfiltered.au</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary bg-muted" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/help"
            className="ml-2 rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
          >
            Get Help
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/help"
            className="rounded-md bg-accent px-3 py-2 text-sm font-bold text-accent-foreground"
          >
            Get Help
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 text-primary"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-1 py-3 text-base font-medium text-muted-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
