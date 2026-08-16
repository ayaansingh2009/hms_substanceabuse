import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, HeartHandshake, MessageSquareQuote, Dumbbell } from "lucide-react";
import { StatCard } from "@/components/site/StatCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unfiltered — What teens actually do, in real numbers" },
      {
        name: "description",
        content:
          "A student-made health project using real Australian data on vaping, alcohol and drugs. Most teens overestimate how many of their peers use. Here's what's actually normal.",
      },
      { property: "og:title", content: "Unfiltered — You're not the only one who's noticed" },
      {
        property: "og:description",
        content:
          "Real Australian stats, peer stories and support links on substance use among teenagers. No spin, no scare tactics.",
      },
    ],
  }),
  component: Home,
});

const navCards = [
  {
    to: "/stories" as const,
    icon: MessageSquareQuote,
    title: "Peer Stories",
    body: "Anonymous, first-person moments from students — saying no, feeling pressure, changing their mind.",
  },
  {
    to: "/facts" as const,
    icon: BarChart3,
    title: "The Facts",
    body: "National statistics and our own survey of 46 students, laid out plainly.",
  },
  {
    to: "/sport" as const,
    icon: Dumbbell,
    title: "Sport & Steroids",
    body: "Performance pressure, honest risk info and safer ways to actually get stronger.",
  },
  {
    to: "/help" as const,
    icon: HeartHandshake,
    title: "Get Help",
    body: "Confidential, anonymous support lines. You don't have to disclose anything.",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden text-primary-foreground [background:var(--gradient-hero)]">
        <div className="container-page relative py-20 md:py-28">
          <p className="eyebrow text-accent">A Year 11 health forum project</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] md:text-6xl">
            You&apos;re not the only one who&apos;s noticed.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Real stats from real students on vaping, alcohol and the pressure to fit in.
            Turns out &ldquo;everyone&apos;s doing it&rdquo; is mostly a story we tell each
            other.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/facts"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              See the data <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Read peer stories
            </Link>
          </div>

          <div className="mt-14 max-w-3xl rounded-2xl border border-accent/40 bg-primary-foreground/5 p-7 backdrop-blur md:p-9">
            <p className="font-display text-6xl font-bold text-accent md:text-7xl">63%</p>
            <p className="mt-3 text-lg font-semibold md:text-xl">
              of students overestimate how many of their peers actually vape or drink.
            </p>
            <p className="mt-3 text-sm text-primary-foreground/70">
              When you think everyone&apos;s doing it, saying no feels like standing out.
              The number one reason to correct the picture is that the picture is wrong.
            </p>
            <p className="mt-4 text-xs uppercase tracking-wider text-primary-foreground/60">
              Source: Unfiltered student survey, n = 46
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-secondary">Start anywhere</p>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Four ways in
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            No lectures. Pick whichever bit is actually relevant to you right now.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {navCards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <c.icon className="size-7 text-accent" />
              <h3 className="mt-5 text-xl font-bold text-primary">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.body}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2">
                Open <ArrowRight className="size-4 transition-all" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-sand py-16 md:py-24">
        <div className="container-page">
          <p className="eyebrow text-secondary">The short version</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-primary md:text-4xl">
            Three numbers worth knowing
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <StatCard
              value="9.7%"
              label="of 14–17 year olds now vape"
              detail="Up from 1.8% in 2019 — a sharp rise, but still under one in ten."
              source="AIHW NDSHS 2022–23"
            />
            <StatCard
              value="67.4%"
              label="say peer pressure is the main driver"
              detail="Wanting to fit in beat curiosity, stress and availability in our survey."
              source="Unfiltered survey, n = 46"
              variant="accent"
            />
            <StatCard
              value="77.3%"
              label="link sport pressure to steroid risk"
              detail="Almost no existing school program covers this. Ours does."
              source="Unfiltered survey, n = 46"
              variant="navy"
            />
          </div>
          <Link
            to="/facts"
            className="mt-10 inline-flex items-center gap-2 font-semibold text-primary hover:text-accent"
          >
            See all the data and sources <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:grid-cols-[2fr_1fr] md:p-12">
          <div>
            <h2 className="text-3xl font-bold text-primary">Why we built this</h2>
            <p className="mt-4 text-muted-foreground">
              Every drug talk we&apos;ve sat through has been an adult with a slideshow
              telling us things we already knew, in a tone that made it easy to switch off.
              None of them mentioned that most of us are wrong about how common this stuff
              actually is.
            </p>
            <p className="mt-4 text-muted-foreground">
              So we ran our own survey, pulled the national numbers, and put them in one
              place. No judgement about what you do or don&apos;t do — just the real
              picture, and where to go if you want to talk to someone.
            </p>
          </div>
          <div className="rounded-xl bg-sand p-6">
            <p className="eyebrow text-secondary">Need to talk?</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Every service on our help page is free, confidential and doesn&apos;t require
              you to say you use anything.
            </p>
            <Link
              to="/help"
              className="mt-5 inline-flex rounded-md bg-accent px-5 py-2.5 font-bold text-accent-foreground"
            >
              Get Help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
