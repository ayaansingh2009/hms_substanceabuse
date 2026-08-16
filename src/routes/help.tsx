import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Globe } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Get Help — free, confidential Australian support | Unfiltered" },
      {
        name: "description",
        content:
          "Anonymous and confidential Australian support: Kids Helpline 1800 55 1800, Lifeline 13 11 14, ADIS and more. You don't have to disclose personal use to get advice.",
      },
      { property: "og:title", content: "Get Help — confidential support, no disclosure needed" },
      {
        property: "og:description",
        content:
          "Free, anonymous Australian youth support lines for substance use, stress and everything around it.",
      },
    ],
  }),
  component: Help,
});

const services = [
  {
    name: "Kids Helpline",
    contact: "1800 55 1800",
    href: "tel:1800551800",
    web: "https://kidshelpline.com.au",
    body: "Free, 24/7 counselling for anyone aged 5–25. Phone, webchat or email. You don't need a reason, a crisis, or your real name.",
    icon: Phone,
  },
  {
    name: "Lifeline",
    contact: "13 11 14",
    href: "tel:131114",
    web: "https://www.lifeline.org.au",
    body: "24/7 crisis support and suicide prevention for anyone in Australia. Text and online chat also available.",
    icon: Phone,
  },
  {
    name: "ADIS — Alcohol and Drug Information Service",
    contact: "1800 250 015",
    href: "tel:1800250015",
    web: "https://adf.org.au/help-support/",
    body: "24/7 national line for confidential information, advice and referral about any substance — including on behalf of a friend or family member. Steroids included.",
    icon: Phone,
  },
  {
    name: "headspace",
    contact: "Find a centre near you",
    href: "https://headspace.org.au",
    web: "https://headspace.org.au",
    body: "Youth mental health centres across Australia for 12–25 year olds, plus free online and phone counselling through eheadspace.",
    icon: Globe,
  },
  {
    name: "ReachOut",
    contact: "Online forums and articles",
    href: "https://au.reachout.com",
    web: "https://au.reachout.com",
    body: "Anonymous peer support forums and practical guides written for young people. Nothing to sign up to read.",
    icon: MessageCircle,
  },
  {
    name: "Your GP",
    contact: "Bulk-billing clinics available",
    href: "https://www.healthdirect.gov.au/australian-health-services",
    web: "https://www.healthdirect.gov.au/australian-health-services",
    body: "From age 14 you can generally see a GP on your own, and what you say is confidential except where there's serious risk of harm. You can ask about confidentiality first, before you say anything else.",
    icon: Globe,
  },
];

function Help() {
  return (
    <>
      <PageHeader
        eyebrow="Get Help"
        title="Talking to someone is easier than it looks"
        intro="Every service here is free, and none of them require you to say that you personally use anything. You can ask questions on behalf of a friend, or just to understand something."
      />

      <section className="container-page py-10">
        <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-6">
          <p className="font-bold text-foreground">If someone is in immediate danger</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Call <strong className="text-foreground">000</strong> now. Ambulance officers
            attending an overdose do not routinely involve police in most Australian
            states. Calling is always the right choice.
          </p>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <s.icon className="size-6 text-accent" />
              <h2 className="mt-4 text-xl font-bold text-primary">{s.name}</h2>
              <a
                href={s.href}
                className="mt-1 font-display text-2xl font-bold text-secondary hover:text-accent"
              >
                {s.contact}
              </a>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.body}</p>
              <a
                href={s.web}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-semibold text-primary hover:text-accent"
              >
                Visit website →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-sand py-16">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            What &ldquo;confidential&rdquo; actually means
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Helplines don&apos;t need your name, your school or your number. You can hang
              up at any point, and nothing is recorded on any file that follows you around.
            </p>
            <p>
              Counsellors and doctors only break confidentiality where there is a serious
              and immediate risk to someone&apos;s safety. That threshold is high — and
              you&apos;re allowed to ask exactly where it sits before you tell them
              anything.
            </p>
            <p>
              You also don&apos;t have to have a problem to call. &ldquo;I&apos;m worried
              about a friend&rdquo; and &ldquo;I just want to know what this actually
              does&rdquo; are both completely normal reasons to get in touch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
