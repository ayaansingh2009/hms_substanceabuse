import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/schools")({
  head: () => ({
    meta: [
      { title: "For Schools & Parents — evidence-based programs | Unfiltered" },
      {
        name: "description",
        content:
          "A directory of evidence-based Australian prevention programs including Climate Schools and Preventure, the National Drug Strategy 2017–2026, and the protective factors that matter most.",
      },
      { property: "og:title", content: "For Schools & Parents" },
      {
        property: "og:description",
        content:
          "Evidence-based prevention programs, national policy, and the protective factors that actually reduce teen substance use.",
      },
    ],
  }),
  component: Schools,
});

const programs = [
  {
    name: "Climate Schools",
    href: "https://climateschools.com/",
    body: "Online, cartoon-based classroom modules developed by the Matilda Centre (University of Sydney). One of the most rigorously trialled Australian school prevention programs, with randomised controlled trial evidence for alcohol and cannabis outcomes.",
  },
  {
    name: "Preventure",
    href: "https://www.preventure.net.au/",
    body: "A personality-targeted approach that works with students showing risk traits such as sensation seeking, impulsivity, anxiety sensitivity and hopelessness — rather than delivering the same content to everyone.",
  },
  {
    name: "National Drug Strategy 2017–2026",
    href: "https://www.health.gov.au/resources/publications/national-drug-strategy-2017-2026",
    body: "Australia's overarching policy framework, built on the three pillars of demand reduction, supply reduction and harm reduction. Useful context for how a school program fits the national approach.",
  },
  {
    name: "Alcohol and Drug Foundation — Good Sports & school resources",
    href: "https://adf.org.au/",
    body: "Plain-language drug facts, family conversation guides, and community sports club programs that shift drinking culture at the club level.",
  },
  {
    name: "Positive Choices",
    href: "https://positivechoices.org.au/",
    body: "Government-funded portal of vetted drug education resources for teachers, parents and students — a good first stop when checking whether a resource is evidence-based.",
  },
];

const protective = [
  {
    title: "Strong family relationships",
    body: "Consistent, non-punitive communication at home is one of the strongest protective factors. Young people who believe they can raise a problem without an explosion are far more likely to raise it early.",
  },
  {
    title: "Supportive peer networks",
    body: "One friend who doesn't make a big deal of your choices does more than any assembly. Building environments where refusal is unremarkable is prevention.",
  },
  {
    title: "School-based education that corrects norms",
    body: "Programs that share accurate peer-use data outperform fear-based messaging, which can backfire by implying use is more widespread than it is.",
  },
  {
    title: "Positive coping strategies",
    body: "Sport, creative outlets, part-time work and genuine sleep give stress somewhere to go. Substance use often fills a coping gap rather than a social one.",
  },
];

function Schools() {
  return (
    <>
      <PageHeader
        eyebrow="For Schools & Parents"
        title="What the evidence supports"
        intro="If you're building or choosing a program, these are the Australian resources with actual research behind them — plus the protective factors that consistently show up in the literature."
      />

      <section className="container-page py-16">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          Evidence-based programs
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {programs.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="flex items-center gap-2 text-lg font-bold text-primary">
                {p.name}
                <ExternalLink className="size-4 text-secondary" />
              </span>
              <span className="mt-2 text-sm text-muted-foreground">{p.body}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-sand py-16">
        <div className="container-page">
          <p className="eyebrow text-secondary">Protective factors</p>
          <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
            What reduces risk
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {protective.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl rounded-xl border border-accent/40 bg-accent/10 p-6 text-sm text-muted-foreground">
            <strong className="text-foreground">A note from us:</strong> the programs that
            landed with students at our school were the ones that treated us as capable of
            handling accurate information. The ones that didn&apos;t work were the ones
            that exaggerated — because as soon as we could tell one claim was overstated,
            we stopped believing the rest.
          </p>
        </div>
      </section>
    </>
  );
}
