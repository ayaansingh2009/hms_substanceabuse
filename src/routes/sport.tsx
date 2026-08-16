import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { StatCard } from "@/components/site/StatCard";

export const Route = createFileRoute("/sport")({
  head: () => ({
    meta: [
      { title: "Sport & Steroids — performance pressure, honestly | Unfiltered" },
      {
        name: "description",
        content:
          "Why sport-performance pressure drives steroid and SARM use among young Australians, the real risks, safer training alternatives, and where to get confidential advice.",
      },
      { property: "og:title", content: "Sport & Steroids — the topic nobody covers" },
      {
        property: "og:description",
        content:
          "77.3% of students in our survey linked sport-performance pressure to steroid risk. Here's the honest information.",
      },
    ],
  }),
  component: Sport,
});

const risks = [
  {
    title: "Hormonal shutdown",
    body: "Anabolic steroids suppress your body's own testosterone production. In teenagers, whose hormonal systems are still developing, recovery can be slow or incomplete.",
  },
  {
    title: "Growth plates",
    body: "Steroid use during adolescence can close growth plates early, permanently limiting adult height. This one is irreversible.",
  },
  {
    title: "Heart and liver",
    body: "Raised blood pressure, unhealthy cholesterol shifts, enlarged heart muscle and liver strain — risks that scale with dose and duration.",
  },
  {
    title: "Mood and dependence",
    body: "Irritability, aggression and depressive crashes during and after cycles are common. Body-image dependence is a real and under-discussed pattern.",
  },
  {
    title: "Unregulated supply",
    body: "Almost everything sold online or through a gym contact is unregulated. Dose, purity and even the actual compound are frequently not what the label claims.",
  },
  {
    title: "SARMs aren't a loophole",
    body: "SARMs and 'natural' peptide products are marketed as safer alternatives. They are not approved for human performance use and carry many of the same risks with less evidence.",
  },
];

const alternatives = [
  {
    title: "Progressive overload, tracked",
    body: "Adding small amounts of weight or reps week to week, written down, beats any supplement. Most teenagers who feel stuck are actually just not tracking.",
  },
  {
    title: "Eat and sleep like it matters",
    body: "Enough total food, adequate protein across the day, and 8–10 hours of sleep. Teenagers grow more from these two than from anything you can buy.",
  },
  {
    title: "Get a coach, not a cycle",
    body: "A few sessions with a qualified strength coach or accredited exercise physiologist will do more for your numbers than any compound, legally.",
  },
  {
    title: "Check the expectation",
    body: "A lot of the physiques driving this pressure are enhanced, filtered, lit and posed. Comparing your Tuesday to someone's highlight reel is a losing setup.",
  },
];

function Sport() {
  return (
    <>
      <PageHeader
        eyebrow="Sport & Steroids"
        title="Performance pressure, honestly"
        intro="Almost no school program touches this — but it came up strongly in our own survey. If you play sport, lift, or just feel like you're supposed to look a certain way, this section is for you."
      />

      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2">
          <StatCard
            value="77.3%"
            label="of students linked sport-performance pressure to steroid risk"
            detail="The highest agreement of any question in our survey — and a topic barely covered in existing prevention programs."
            source="Unfiltered survey, n = 46"
            variant="navy"
          />
          <StatCard
            value="Under 18"
            label="is the age group most affected by growth-plate risk"
            detail="Performance and image-enhancing drug use in adolescence carries permanent developmental consequences that adult users don't face."
            source="Alcohol and Drug Foundation"
            variant="accent"
          />
        </div>
      </section>

      <section className="border-y border-border bg-sand py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            What the risks actually are
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Not &ldquo;steroids are bad.&rdquo; Specifics, so you can judge them yourself.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {risks.map((r) => (
              <div
                key={r.title}
                className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <h3 className="text-lg font-bold text-primary">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          What actually works instead
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {alternatives.map((a, i) => (
            <div
              key={a.title}
              className="flex gap-5 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <span className="font-display text-3xl font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-bold text-primary">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-accent/40 bg-accent/10 p-8">
          <h2 className="text-2xl font-bold text-primary">Where to get real advice</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A GP will talk to you about performance and image-enhancing drugs
            confidentially — including if you&apos;re already using. Sports Medicine
            Australia and accredited exercise physiologists can advise on training. For
            anonymous phone advice, ADIS covers steroids as well as other substances.
          </p>
          <Link
            to="/help"
            className="mt-6 inline-flex rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground"
          >
            See support options
          </Link>
        </div>
      </section>
    </>
  );
}
