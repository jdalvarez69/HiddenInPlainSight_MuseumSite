# Hidden in Plain Sight
## A Museum of Cryptography

A museum-style informational website about the history and evolution of cryptography — from the earliest methods of concealing messages in ancient civilizations, through diplomatic ciphers, wartime machines, mathematical breakthroughs, and finally the invisible encryption that protects modern digital life.

---

**Live Site:** [https://jdalvarez69.github.io/HiddenInPlainSight_MuseumSite/](https://jdalvarez69.github.io/HiddenInPlainSight_MuseumSite/)  
**GitHub Repository:** [jdalvarez69/HiddenInPlainSight_MuseumSite](https://github.com/jdalvarez69/HiddenInPlainSight_MuseumSite)

---

## Topic

The history and evolution of cryptography. The site traces a single argument across five exhibit rooms: that the problem of keeping a message secret is as old as writing itself, and that every major shift in communication technology — from the Greek city-state to the internet — created a new version of that problem and eventually a new solution to it.

The site is designed for a general educated audience. No prior knowledge of mathematics or computer science is required. A curious person who finishes the guided route should come away with a real understanding of why modern encryption exists and how it works.

---

## Main Thesis

> Cryptography began as the art of hiding messages, but became the science of protecting trust. Across history, every new way to communicate created a new need for secrecy, and every new method of secrecy changed the balance of power.

---

## Guided Exhibit Route

The main visitor experience is a linear path through five rooms, experienced in order. Each room answers a question the previous room left open.

| Room | Title | What it covers |
|---|---|---|
| 01 | **The Birth of Secret Writing** | Ancient steganography and early substitution ciphers — the scytale, the Caesar shift, and why simple substitution is fundamentally weak |
| 02 | **Ciphers, States, and Power** | Al-Kindi's invention of frequency analysis around 850 CE; the Vigenère cipher; the Kasiski examination — secrecy as statecraft and the arms race it created |
| 03 | **Machines of Secrecy** | The Enigma machine, the Polish mathematicians who first broke it, Bletchley Park, and the Bombe — the industrialization of secrecy and codebreaking |
| 04 | **The Mathematical Turn** | Shannon's mathematical theory of secrecy, the key distribution problem, Diffie-Hellman, and RSA — the moment cryptography became a formal discipline |
| 05 | **The Invisible Shield of Modern Life** | TLS, end-to-end encryption, PGP, and NIST's 2024 post-quantum standards — the mathematics that runs silently beneath every secure connection |

---

## Companion Routes

Five companion pages support the guided route without replacing it:

- **Timeline** — 16 events from antiquity to August 2024, organized chronologically
- **Artifacts** — 11 objects, diagrams, and symbols grouped by exhibit room
- **Concept Guide** — 10 plain-language explanations of core cryptographic ideas
- **Key Figures** — 16 historical figures, each tied to the exhibit room where their work appears
- **AI Process** — Documentation of how the project was planned, built, and reviewed

---

## Design Direction

**Style: Editorial archival modernism.**

The visual language draws from museum catalogs, serious institutional archives, and high-quality longform print journalism. The design earns its authority through structure and restraint, not decoration.

- **Typography:** A serif system stack (Georgia/Times) for exhibit headings and museum identity; a sans system stack (Arial/Helvetica/system-ui) for navigation and UI labels. Body text kept between 60–75 characters per line.
- **Color:** Warm parchment text (`#f0ead8`) on a dark background (`#1a1714`), with amber accent (`#c4973a`) for labels, dots, and calls to action. Borders and rules use muted values that recede rather than compete.
- **Texture:** A CSS-only dot-grid pattern adds a subtle archival quality without images.
- **Mood:** A quiet, well-lit museum reading room. Not a hacker site. Not a tech startup landing page. Not a neon cyberpunk experience.
- **Avoided deliberately:** Green-on-black, animated code rain, decorative cipher overlays as backgrounds, generic school project layouts.

---

## Brand Archetype

**The Sage + The Explorer.**

The site speaks with the authority of someone who genuinely knows the subject and wants to share it clearly — not to impress, but to illuminate. The Sage voice is present in the editorial tone, the curator notes, and the evidence-based sourcing. The Explorer dimension is present in the guided route structure: the visitor is moving through something, not reading a static article.

---

## Cialdini Principle: Authority

The primary Cialdini principle applied throughout this site is **Authority**. The site builds credibility through research-based writing, sourced historical examples, museum-style organization, restrained visual design, and a serious educational tone. The visitor is not being entertained — they are being informed by a source that has done the work.

Authority is expressed through:
- **Research-backed content:** Every historical claim is traced to a documented source in `docs/RESEARCH_NOTES.md`
- **Museum-style structure:** The guided route, exhibit labels, curator notes, and artifact panels follow institutional conventions that signal scholarly seriousness
- **Restrained visual design:** Editorial archival modernism communicates that the content, not the interface, is what matters
- **Consistent editorial voice:** The writing does not oversimplify or sensationalize — it explains clearly and trusts the visitor

Curiosity gaps function as a supporting engagement structure, not the primary principle. Each exhibit ends by naming a problem it leaves open, and the next room answers it — creating forward momentum through the guided route.

---

## AI Orchestration

This project was not made from one giant prompt. Two AI tools were used as structured assistants under my direction, each for a distinct role, with every stage scoped, reviewed, and logged before the next began.

**ChatGPT** was used for planning, research organization, writing support, prompt strategy, QA review, and documentation support.

**GitHub Copilot** (Agent mode) was used for file creation, code implementation, route creation, component creation, lint/build checks, and Git-related project workflow.

### Stages

| Stage | Tool | What happened |
|---|---|---|
| Concept planning | ChatGPT | Drafted planning documents (PROJECT_BRIEF.md, CONTENT_MODEL.md, DESIGN_SYSTEM.md). I reviewed and accepted the structure, condensing the exhibit route from six rooms to five. |
| Research organization | ChatGPT | I directed ChatGPT to organize the source list. Sources were assigned to exhibits. Unconfirmed claims were flagged `[VERIFY]` and excluded from production. |
| Source pack creation | ChatGPT | 20 verified sources collected and organized in RESEARCH_NOTES.md. |
| Site copy planning | ChatGPT | Drafted museum copy from verified sources into SITE_COPY.md. Nothing was allowed into the document without a traceable source. |
| Data modeling | GitHub Copilot | Scaffolded the TypeScript data file (src/lib/museum-data.ts) from the copy document. I verified every interface and added `status?` fields for honest display of unverified items. |
| Component implementation | GitHub Copilot | Implemented 9 reusable server components under my direction. All are pure server components with no client-side JavaScript. |
| Route implementation | GitHub Copilot | Each page was scoped in a separate request. Copilot implemented the page; I reviewed the output before the next page began. One event handler error was caught immediately by `npm run build` and corrected. |
| Lint/build verification | GitHub Copilot | Every implementation step ended with `npm run lint && npm run build`. No step was considered complete until the build passed. |
| Documentation and review | ChatGPT + GitHub Copilot | AI_ORCHESTRATION_LOG.md, QA_REVIEW_LOG.md, and processStages in the data file were updated to accurately reflect what actually happened. |

### Human Direction

I chose the topic, defined the thesis, selected the design direction, decided what content was accurate enough to publish, reviewed every output before it was used, and rejected or revised anything that did not meet the project standard. Neither ChatGPT nor GitHub Copilot selected what to build, what to say, or what was worth keeping. Those decisions were mine.

### Polish Sprint Update

After the first deployed version, I judged the site as structurally strong but too text-heavy and not visually engaging enough. I then directed a focused polish sprint.

Polish outcomes:
- Curated local hero image layer added for homepage, exhibit rooms, and companion pages (`public/images/...`)
- Custom local SVG visual system retained for controlled supporting diagrams only
- Public production-note text for artifact visuals removed from artifact cards
- Public verification badges suppressed for visitor-facing polish while `status` fields remain in `museum-data.ts` and verification work remains documented in project docs
- Public-facing copy tightened to improve scanability and rhythm without changing the thesis or source discipline
- No external image assets or hotlinked media used

---

## Research and Source Discipline

All historical claims in the museum are traced to a source documented in `docs/RESEARCH_NOTES.md`. Verification status is retained in `src/lib/museum-data.ts` and project documentation. Research notes and internal documentation were used to keep the project grounded in sourced historical material. No claim was fabricated or inferred without a supporting reference.

The `[VERIFY]` convention was used throughout writing and content planning to prevent AI-assisted copy generation from introducing unsupported facts.

---

## Built With

- [Next.js 16.2.6](https://nextjs.org/) — App Router, TypeScript, static generation
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling with custom CSS properties
- [TypeScript](https://www.typescriptlang.org/) — strict typing throughout
- System serif and sans font stacks — no external font fetch required at build time
- Custom inline SVG exhibit visuals — local components only (`src/components/visuals/`), no external image dependencies
- [ChatGPT](https://chat.openai.com/) — planning, research organization, writing support, prompt strategy, QA review, documentation support
- [GitHub Copilot](https://github.com/features/copilot) (Agent mode) — file creation, code implementation, route creation, component creation, lint/build checks, Git workflow
- ESLint — enforced at every build step

---

## Current Status

| Item | Status |
|---|---|
| All planned routes built | ✓ Complete (15 static pages) |
| ESLint | ✓ Passing |
| Production build | ✓ Passing |
| TypeScript | ✓ Clean |
| README | ✓ Complete |
| Visual polish sprint | ✓ Complete |
| GitHub Pages deployment | ✓ Live at project URL |

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Lint
npm run lint

# Production build
npm run build
```

Development server runs at [http://localhost:3000](http://localhost:3000).

---

## Project Documents

All planning documents are in `/docs/`:

| File | Purpose |
|---|---|
| `PROJECT_BRIEF.md` | Project direction, thesis, audience, design style |
| `CONTENT_MODEL.md` | Site map, exhibit route, page templates |
| `DESIGN_SYSTEM.md` | Visual direction, typography, color, what to avoid |
| `RESEARCH_NOTES.md` | 20 verified sources organized by exhibit |
| `SITE_COPY.md` | Source-of-truth writing document for all museum content |
| `AI_ORCHESTRATION_LOG.md` | Logged record of every significant AI interaction |
| `QA_REVIEW_LOG.md` | Staged acceptance criteria and review checklists |

---

*Final project — Hidden in Plain Sight: A Museum of Cryptography*
