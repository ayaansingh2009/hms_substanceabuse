import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-sand">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold text-primary">Unfiltered</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            A youth health awareness project built by Year 11 students for a school health
            forum. Real numbers, real stories, no spin.
          </p>
        </div>
        <div>
          <p className="eyebrow text-secondary">Sections</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/facts" className="hover:text-accent">
                The Facts
              </Link>
            </li>
            <li>
              <Link to="/sport" className="hover:text-accent">
                Sport &amp; Steroids
              </Link>
            </li>
            <li>
              <Link to="/schools" className="hover:text-accent">
                For Schools &amp; Parents
              </Link>
            </li>
            <li>
              <Link to="/help" className="font-semibold text-accent">
                Get Help
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-secondary">If you need someone now</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Kids Helpline — 1800 55 1800</li>
            <li>Lifeline — 13 11 14</li>
            <li>ADIS (Alcohol &amp; Drug Info) — 1800 250 015</li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            In an emergency call 000. Unfiltered is a student project and is not a
            substitute for professional medical advice.
          </p>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container-page py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Unfiltered — student health forum project. Data
          sources: AIHW, ABS, NSW Health, Alcohol and Drug Foundation.
        </div>
      </div>
    </footer>
  );
}
