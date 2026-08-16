import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-sand">
      <div className="container-page py-14 md:py-20">
        <p className="eyebrow text-secondary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold text-primary md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>
        {children}
      </div>
    </section>
  );
}
