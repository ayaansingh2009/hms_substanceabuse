import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { StatCard } from "@/components/site/StatCard";

export const Route = createFileRoute("/facts")({
  head: () => ({
    meta: [
      { title: "The Facts — Australian teen substance use data | Unfiltered" },
      {
        name: "description",
        content:
          "Big-number breakdown of Australian statistics on teen vaping, illicit drug use, cocaine and cannabis, plus our own survey of 46 students. Sources: AIHW, ABS, NSW Health, ADF.",
      },
      { property: "og:title", content: "The Facts — what the numbers actually say" },
      {
        property: "og:description",
        content:
          "Vaping, alcohol, illicit drugs and peer influence among Australian teens — the real figures, plainly explained.",
      },
    ],
  }),
  component: Facts,
});

const national = [
  {
    value: "1.8% → 9.7%",
    label: "Vaping among 14–17 year olds",
    detail:
      "The share of 14–17 year olds who currently vape rose more than fivefold between 2019 and 2023. Fast growth — and still, roughly nine in ten don't.",
    source: "AIHW National Drug Strategy Household Survey",
  },
  {
    value: "13.4% → 18.8%",
    label: "Lifetime illicit drug use, 14–17 year olds",
    detail:
      "This reversed a downward trend that had held for nearly two decades. It's the first real uptick in a generation.",
    source: "AIHW NDSHS 2022–23",
  },
  {
    value: "11.3%",
    label: "Cocaine use among 18–24 year olds",
    detail:
      "A record high for this age group — worth knowing about before you're the one at the party being offered it.",
    source: "AIHW / ABS",
  },
  {
    value: "25.5%",
    label: "Cannabis use among 18–24 year olds",
    detail:
      "Still the most-used illicit substance in this age bracket, and the one most likely to be treated as harmless.",
    source: "AIHW NDSHS",
  },
];

const ourSurvey = [
  {
    value: "58.7%",
    label: "named vapes the most harmful substance",
    detail: "Cigarettes were close behind at 54.3%.",
    source: "Unfiltered survey, n = 46",
  },
  {
    value: "67.4%",
    label: "said peer pressure or fitting in is the main reason",
    detail: "It beat curiosity, stress relief and availability combined.",
    source: "Unfiltered survey, n = 46",
  },
  {
    value: "63%",
    label: "overestimated how many peers vape or drink",
    detail: "The gap between what people think is normal and what is normal.",
    source: "Unfiltered survey, n = 46",
  },
];

function Facts() {
  return (
    <>
      <PageHeader
        eyebrow="The Facts"
        title="What the numbers actually say"
        intro="No spin and no scare tactics — including when the data is less dramatic than the headlines. Every figure here has a source you can check yourself."
      />

      <section className="container-page py-16">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          National picture: Australia
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          These come from the AIHW National Drug Strategy Household Survey and ABS
          reporting — the largest regular surveys of substance use in the country.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {national.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-sand py-16">
        <div className="container-page">
          <p className="eyebrow text-secondary">Our own research</p>
          <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
            We surveyed 46 students at our school
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Anonymous, voluntary, and small — one school year group, not a national
            sample. We're saying that up front because most of the material handed to us
            never mentions its own limits.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ourSurvey.map((s, i) => (
              <StatCard key={s.label} {...s} variant={i === 2 ? "accent" : "default"} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow text-secondary">The explainer</p>
            <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
              Why peer influence actually works
            </h2>
            <p className="mt-5 text-muted-foreground">
              Peer pressure is almost never someone shoving a vape at you and counting
              down. Research on adolescent behaviour consistently finds the stronger force
              is <strong className="text-foreground">social validation</strong> and{" "}
              <strong className="text-foreground">perceived group norms</strong> — what you
              believe everyone else is doing, and what you think it will cost you to be
              different.
            </p>
            <p className="mt-4 text-muted-foreground">
              That belief is usually inflated. The loudest people are the most visible, and
              stories about a big night travel further than stories about a quiet one. So
              your mental estimate creeps up, and you adjust your own behaviour towards a
              norm that doesn&apos;t exist.
            </p>
            <p className="mt-4 text-muted-foreground">
              This is why &ldquo;social norms&rdquo; approaches work better than warnings:
              correcting the estimate removes the pressure at its source. If you know most
              of your year isn&apos;t vaping, not vaping stops feeling like a statement.
            </p>
          </div>

          <aside className="rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
            <p className="eyebrow text-secondary">Sources</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">AIHW</strong> — National Drug Strategy
                Household Survey 2022–23
              </li>
              <li>
                <strong className="text-foreground">ABS</strong> — National Health Survey
                and related substance use reporting
              </li>
              <li>
                <strong className="text-foreground">NSW Health</strong> — youth vaping and
                alcohol guidance
              </li>
              <li>
                <strong className="text-foreground">Alcohol and Drug Foundation</strong> —
                drug facts and prevention research
              </li>
              <li>
                <strong className="text-foreground">Unfiltered student survey</strong> —
                anonymous, n = 46, conducted 2026
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
