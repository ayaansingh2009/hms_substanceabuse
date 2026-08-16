# Real Talk Stats

Build a website called "Unfiltered" (unfiltered.au) — a youth-facing health awareness 

site created by a group of Year 11 students for a school health forum project on 

substance abuse prevention among Australian teenagers. The tone is honest, 

non-judgemental, and peer-to-peer — not preachy or clinical. It should feel like it 

was made BY teenagers FOR teenagers, not like a government pamphlet.

CORE CONCEPT

The site's central idea is correcting misperceptions: most teens think substance use 

among their peers is far more common than it actually is, and that "everyone's doing it" 

pressure is a major driver of use. Unfiltered uses real survey data and national 

statistics to show what's actually normal, alongside peer stories and practical 

support links — no spin, no scare tactics, just the real numbers.

DESIGN DIRECTION

- Colour palette: deep navy (#1B3B5F) as primary, a muted steel blue (#5B92B0) as 

  secondary, and a warm amber (#E8871E) as an accent for stats, CTAs, and highlights.

- Typography: a strong serif or slab-serif for headlines (confident, editorial feel), 

  clean sans-serif for body text.

- Modern, editorial/magazine-style layout — not a sterile health-brochure look. 

  Generous whitespace, bold stat callouts, card-based content blocks.

- Mobile-first — most visitors will be on phones.

- Avoid stock "sad teenager" imagery or scare-tactic visuals. Keep it grounded and real.

PAGES / SECTIONS

1. HOME

   - Hero headline: "You're not the only one who's noticed." with subheading about 

     real stats from real students on vaping, alcohol, and the pressure to fit in.

   - A prominent stat callout: "63% of students overestimate how many of their peers 

     actually vape or drink" — this is the site's core hook.

   - Quick nav cards into the four main sections (Peer Stories, The Facts, Sport & 

     Steroids, Get Help).

   - CTA button: "See the data"

2. THE FACTS (data hub)

   - Present real Australian statistics in a scannable, visual way (big number + 

     short explanation, not walls of text):

     - Vaping among 14–17 year olds rose from 1.8% to 9.7% (2019–2023)

     - Lifetime illicit drug use among 14–17 year olds rose from 13.4% to 18.8% 

       (2019–2023), reversing a near two-decade downward trend

     - Cocaine use among 18–24 year olds reached a record 11.3%

     - Cannabis remains the most-used illicit substance among 18–24 year olds (25.5%)

     - Our own survey of 46 students found vapes (58.7%) and cigarettes (54.3%) were 

       seen as the most harmful substances

     - 67.4% of students said peer pressure or "wanting to fit in" was the main 

       reason young people use substances

   - Cite sources: AIHW, ABS, NSW Health, Alcohol and Drug Foundation

   - Include a short explainer on WHY peer influence works — it's social validation 

     and group norms, not direct pressure, that drives most use

3. PEER STORIES

   - A gallery/grid of short first-person stories or quote cards (placeholder content 

     is fine) from students on moments they said no, felt pressure, or changed their 

     mind — anonymous, relatable, non-judgemental tone

   - Include a "Submit your story" call-to-action (anonymous form)

4. SPORT & STEROIDS

   - A dedicated section on performance pressure and steroid use, since our survey 

     found 77.3% of students linked sport-performance pressure to steroid risk — a 

     topic barely covered in existing programs

   - Cover safer training alternatives, honest info on risks, and where to get advice

5. FOR SCHOOLS & PARENTS

   - A directory linking out to evidence-based programs (Climate Schools, Preventure) 

     and the National Drug Strategy 2017–2026

   - A short section on protective factors: strong family relationships, supportive 

     peer networks, school-based education, positive coping strategies

6. GET HELP

   - Clear, calm page with anonymous and confidential support options

   - Include real Australian youth support lines (Kids Helpline 1800 55 1800, 

     Lifeline 13 11 14, ADIS/Alcohol and Drug Information Service)

   - Reassure visitors that seeking help is confidential and does not require 

     disclosing personal use

FUNCTIONALITY

- Sticky top navigation with links to all sections and a highlighted "Get Help" link 

  in the accent colour, always visible

- Smooth scroll / clean routing between pages

- Stat callouts should feel like content cards — reusable component with a big number, 

  short label, and source

- Keep the whole thing achievable as a student project — no login system needed, 

  just clean informational pages with maybe one simple anonymous submission form

Build this as a polished, realistic prototype we can present to a school health forum 

panel as our proposed prevention strategy.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://unfiltered-truth-zone.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/55915b3d-59c3-468f-9184-656e55d7aafc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
