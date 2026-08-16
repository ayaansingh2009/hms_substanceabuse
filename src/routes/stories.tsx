import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Peer Stories — real moments from students | Unfiltered" },
      {
        name: "description",
        content:
          "Anonymous first-person stories from students about pressure, saying no, and changing their mind. No judgement, no lectures — and you can submit your own.",
      },
      { property: "og:title", content: "Peer Stories — in their own words" },
      {
        property: "og:description",
        content:
          "Short, anonymous stories from students about substance pressure and the moments that changed their thinking.",
      },
    ],
  }),
  component: Stories,
});

const stories = [
  {
    quote:
      "I said no at a party and spent the next hour convinced everyone was talking about it. Turns out two other people had also said no. We just didn't know about each other.",
    who: "Year 11, Sydney",
    tag: "Saying no",
  },
  {
    quote:
      "Nobody ever offered me a vape directly. It was more that it was always just there, and after a while not doing it felt like the weird choice.",
    who: "Year 10",
    tag: "Pressure",
  },
  {
    quote:
      "My mate stopped because of the money, not the health stuff. Forty bucks a week adds up faster than any warning label.",
    who: "Year 12",
    tag: "Changed my mind",
  },
  {
    quote:
      "I thought basically everyone in my year drank on weekends. When our survey came back I was genuinely shocked at how few actually did.",
    who: "Year 11",
    tag: "The gap",
  },
  {
    quote:
      "The thing that helped was one friend who never made it a big deal either way. No speech, no judgement. Just didn't care what I chose.",
    who: "Year 11",
    tag: "Support",
  },
  {
    quote:
      "I rang a helpline once at 1am about a mate, not about me. They didn't ask for my name and they didn't tell anyone. That's it.",
    who: "Year 12",
    tag: "Getting help",
  },
];

const submissionSchema = z.object({
  story: z
    .string()
    .trim()
    .min(20, { message: "Give us a bit more — at least 20 characters." })
    .max(1200, { message: "Please keep it under 1200 characters." }),
  yearLevel: z.string().trim().max(40).optional(),
});

function Stories() {
  const [story, setStory] = useState("");
  const [yearLevel, setYearLevel] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = submissionSchema.safeParse({ story, yearLevel });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Please check your story.");
      return;
    }
    setError(null);
    setStory("");
    setYearLevel("");
    toast.success("Thanks — your story has been sent anonymously for review.");
  }

  return (
    <>
      <PageHeader
        eyebrow="Peer Stories"
        title="In their own words"
        intro="Short, anonymous moments from students — the times they said no, felt the pressure, or quietly changed their mind. No names, no judgement, no tidy endings."
      />

      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <figure
              key={s.quote}
              className={
                "flex h-full flex-col rounded-xl border p-7 shadow-[var(--shadow-card)] " +
                (i % 4 === 0
                  ? "border-primary/30 bg-primary text-primary-foreground"
                  : i % 4 === 3
                    ? "border-accent/40 bg-accent/10"
                    : "border-border bg-card")
              }
            >
              <span
                className={
                  "eyebrow " + (i % 4 === 0 ? "text-accent" : "text-secondary")
                }
              >
                {s.tag}
              </span>
              <blockquote className="mt-4 flex-1 font-display text-lg leading-relaxed">
                &ldquo;{s.quote}&rdquo;
              </blockquote>
              <figcaption
                className={
                  "mt-5 text-sm " +
                  (i % 4 === 0 ? "text-primary-foreground/70" : "text-muted-foreground")
                }
              >
                — Anonymous, {s.who}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Stories are illustrative placeholders written from themes in our student survey.
          Real submissions will be reviewed and published anonymously.
        </p>
      </section>

      <section className="border-t border-border bg-sand py-16">
        <div className="container-page max-w-2xl">
          <p className="eyebrow text-secondary">Submit your story</p>
          <h2 className="mt-3 text-3xl font-bold text-primary">Add yours, anonymously</h2>
          <p className="mt-3 text-muted-foreground">
            We don&apos;t ask for your name, email or school. Nothing is published without
            being read by a student editor first, and anything identifying gets removed.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4" noValidate>
            <div>
              <label htmlFor="story" className="text-sm font-semibold">
                Your story
              </label>
              <textarea
                id="story"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                maxLength={1200}
                rows={7}
                placeholder="A moment you said no, felt pressure, or changed your mind…"
                className="mt-2 w-full rounded-lg border border-input bg-card p-4 text-base outline-none focus:border-secondary focus:ring-2 focus:ring-ring/40"
              />
              <p className="mt-1 text-xs text-muted-foreground">
                {story.length}/1200 characters
              </p>
            </div>
            <div>
              <label htmlFor="year" className="text-sm font-semibold">
                Year level (optional)
              </label>
              <input
                id="year"
                value={yearLevel}
                onChange={(e) => setYearLevel(e.target.value)}
                maxLength={40}
                placeholder="e.g. Year 11"
                className="mt-2 w-full rounded-lg border border-input bg-card p-3 text-base outline-none focus:border-secondary focus:ring-2 focus:ring-ring/40"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button
              type="submit"
              className="rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Submit anonymously
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
