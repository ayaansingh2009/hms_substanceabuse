import { cn } from "@/lib/utils";

export type StatCardProps = {
  value: string;
  label: string;
  detail?: string;
  source?: string;
  variant?: "default" | "accent" | "navy";
  className?: string;
};

export function StatCard({
  value,
  label,
  detail,
  source,
  variant = "default",
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-xl border p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1",
        variant === "default" && "border-border bg-card",
        variant === "accent" && "border-accent/40 bg-accent/10",
        variant === "navy" && "border-primary/30 bg-primary text-primary-foreground",
        className,
      )}
    >
      <span
        className={cn(
          "font-display text-4xl font-bold leading-none sm:text-5xl",
          variant === "navy" ? "text-accent" : "text-primary",
          variant === "accent" && "text-accent",
        )}
      >
        {value}
      </span>
      <span className="mt-3 text-base font-semibold">{label}</span>
      {detail && (
        <span
          className={cn(
            "mt-2 text-sm",
            variant === "navy" ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {detail}
        </span>
      )}
      {source && (
        <span
          className={cn(
            "mt-4 text-xs uppercase tracking-wider",
            variant === "navy" ? "text-primary-foreground/60" : "text-muted-foreground",
          )}
        >
          Source: {source}
        </span>
      )}
    </div>
  );
}
