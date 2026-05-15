# AI_ORCHESTRATION_LOG.md
## Hidden in Plain Sight — AI Use Log

---

### How I Am Using AI on This Project

This project uses AI assistance as a structured, intentional tool — not as a one-prompt generator. I am not asking an AI to write my project for me. I am using AI to help me plan more clearly, scaffold technical setup, check my reasoning, and move through the project in an organized way.

Every significant AI interaction is logged here so that I can demonstrate my process, reflect on what I changed or rejected, and give an honest account of how AI contributed to the work.

The human decisions — what to keep, what to revise, what direction to take — are mine. The AI is a capable assistant. The thinking behind the project is not.

---

### Log Format

Each log entry includes:
- **Stage** — What phase of the project this belongs to
- **Tool Used** — Which AI tool or model was used
- **Goal** — What I was trying to accomplish
- **Output** — What the AI produced
- **Human Decision** — What I chose to do with it
- **Revision / Improvement** — What I changed or what did not work

---

### Log Entries

---

#### Entry 001 — Topic Selection and Conceptual Planning

| Field | Notes |
|---|---|
| **Stage** | Planning |
| **Tool Used** | GitHub Copilot (Claude Sonnet) |
| **Goal** | Define the project topic, thesis, brand direction, design style, and exhibit structure |
| **Output** | A set of planning documents: PROJECT_BRIEF.md, CONTENT_MODEL.md, DESIGN_SYSTEM.md, AI_ORCHESTRATION_LOG.md, QA_REVIEW_LOG.md, PRESENTATION_NOTES.md |
| **Human Decision** | I reviewed each document and accepted the structure. The thesis statement — "Cryptography began as the art of hiding messages, but became the science of protecting trust" — was kept as written because it accurately captures the arc I wanted. |
| **Revision / Improvement** | The exhibit route was refined during planning. An earlier version had six exhibits; I condensed it to five to keep the scope manageable for a single-semester project. |

---

#### Entry 002 — Project Foundation Setup

| Field | Notes |
|---|---|
| **Stage** | Technical Setup |
| **Tool Used** | GitHub Copilot (Claude Sonnet) |
| **Goal** | Initialize a Next.js project with TypeScript, Tailwind CSS, ESLint, App Router, and src directory |
| **Output** | A working Next.js 16.2.6 project initialized via `create-next-app`, with all specified configuration. Dev server confirmed running at localhost:3000. |
| **Human Decision** | Accepted the setup as generated. The package name was changed from the folder name to a valid lowercase npm name (`final-museum-project-alvarez`). A Turbopack root config was added to silence a workspace warning. |
| **Revision / Improvement** | The initial `create-next-app` command failed because the folder name `FinalMuseumProject_Alvarez` contains capital letters, which npm does not allow as a package name. The workaround was to generate the project in a temp directory and copy it into the target folder. |

---

#### Entry 003 — Research Planning and Source Organization

| Field | Notes |
|---|---|
| **Stage** | Research |
| **Tool Used** | GitHub Copilot (Claude Sonnet) under student direction |
| **Goal** | Organize research direction, identify credible sources for each exhibit, and establish a source tracking convention |
| **Output** | `docs/RESEARCH_NOTES.md` with two verified source packs totaling 20 sources, each assigned to an exhibit. `[VERIFY]` tags applied to all unconfirmed claims. |
| **Human Decision** | I chose which sources to include. One discrepancy was caught during review: two NIST sources had been merged into one row; they were split into separate entries. All final source assignments are my judgment calls. |
| **Revision / Improvement** | The `[VERIFY]` tagging convention proved useful throughout implementation — it gave me a clear boundary between what could be published and what needed more work. |

---

#### Entry 004 — Site Copy Planning

| Field | Notes |
|---|---|
| **Stage** | Content planning |
| **Tool Used** | GitHub Copilot (Claude Sonnet) under student direction |
| **Goal** | Convert verified research into controlled museum copy for all five exhibits and companion pages, without fabricating any historical content |
| **Output** | `docs/SITE_COPY.md`: a source-of-truth writing document with homepage copy, draft copy for all five exhibits, companion page outlines, reusable microcopy, writing rules, and a source-to-page map |
| **Human Decision** | The site copy document was reviewed before any content was moved into code. Claims still lacking a verified source were kept as `[VERIFY]` placeholders and excluded from production content. The thesis paragraph and exhibit transitions were accepted as written. |
| **Revision / Improvement** | This step acted as a content firewall: the AI could not invent new claims during implementation because the copy document defined exactly what was allowed on each page. |

---

#### Entry 005 — Structured Data Layer

| Field | Notes |
|---|---|
| **Stage** | Development |
| **Tool Used** | GitHub Copilot (Claude Sonnet) under student direction |
| **Goal** | Create a typed TypeScript data file from SITE_COPY.md to serve as the single source of truth for all website content |
| **Output** | `src/lib/museum-data.ts`: full TypeScript interfaces and exported data for all content types — exhibits (5), timelineEvents (16), artifacts (11), concepts (10), figures (16), processStages (5), siteMeta, mainNav |
| **Human Decision** | I verified that all interface fields matched the intended content structure. A `status?` field was added to `KeyPoint`, `Artifact`, and `Concept` interfaces to support honest display of unverified items. Seven key points and one artifact were marked `status: "Needs verification"`. |
| **Revision / Improvement** | Enforcing that all empty source arrays have a matching `status` field prevents silent gaps in the published content. |

---

#### Entry 006 — Global Design Foundation

| Field | Notes |
|---|---|
| **Stage** | Design implementation |
| **Tool Used** | GitHub Copilot (Claude Sonnet) under student direction |
| **Goal** | Implement the design system from DESIGN_SYSTEM.md as production CSS and layout |
| **Output** | `src/app/globals.css` replaced with museum design tokens (10 CSS custom properties, archival dot-grid texture, utility classes); `src/app/layout.tsx` with Lora serif font, Geist Sans, metadata, `MuseumNav`, and footer; `src/components/MuseumNav.tsx` with data-driven navigation |
| **Human Decision** | Accepted the CSS variable approach. The specific values — warm parchment `#f0ead8`, dark background `#1a1714`, amber accent `#c4973a` — were drawn directly from DESIGN_SYSTEM.md. The dot-grid texture was kept subtle enough to be archival, not decorative. |
| **Revision / Improvement** | No significant changes were needed. The design token approach made it easy to enforce consistency across all subsequent components. |

---

#### Entry 007 — Reusable Component System

| Field | Notes |
|---|---|
| **Stage** | Development |
| **Tool Used** | GitHub Copilot (Claude Sonnet) under student direction |
| **Goal** | Build 9 reusable server components for all recurring content types across the museum |
| **Output** | `StatusBadge`, `EvidencePanel`, `ExhibitCard`, `ArtifactPanel`, `ConceptCard`, `FigureCard`, `TimelineRail`, `CuratorNote`, `NextRoomCTA` — all in `src/components/` |
| **Human Decision** | Each component was reviewed after creation. Props were kept minimal and purposeful. All components are server components — no `"use client"` directives. |
| **Revision / Improvement** | None required at this stage. The strict server component constraint meant event handlers had to be handled via Tailwind hover utilities rather than `onMouseEnter`/`onMouseLeave` — a constraint that was caught and fixed during homepage implementation. |

---

#### Entry 008 — Homepage and Exhibits Route Implementation

| Field | Notes |
|---|---|
| **Stage** | Development |
| **Tool Used** | GitHub Copilot (Claude Sonnet) under student direction |
| **Goal** | Build the homepage (`/`), exhibits index (`/exhibits`), and five dynamic exhibit pages (`/exhibits/[slug]`) |
| **Output** | `src/app/page.tsx` (homepage with 5 sections), `src/app/exhibits/page.tsx` (gallery lobby), `src/app/exhibits/[slug]/page.tsx` (5 static exhibit rooms via `generateStaticParams`) |
| **Human Decision** | The first homepage draft used `onMouseEnter`/`onMouseLeave` on `<Link>` components and failed to build. I required the fix to use Tailwind hover utilities instead. The exhibit detail pages map `FeaturedArtifact.caption` to `ArtifactPanel`'s `description` prop — an explicit adapter decision to avoid changing the component. |
| **Revision / Improvement** | The server component event handler error was caught immediately by `npm run build`. The fix was clean. Each exhibit page shows `status: "Needs verification"` labels honestly — they are not hidden. |

---

#### Entry 009 — Companion Page Implementation

| Field | Notes |
|---|---|
| **Stage** | Development |
| **Tool Used** | GitHub Copilot (Claude Sonnet) under student direction |
| **Goal** | Build all five companion pages: Timeline, Artifacts, Concepts, Figures, and Process |
| **Output** | `src/app/timeline/page.tsx`, `src/app/artifacts/page.tsx`, `src/app/concepts/page.tsx`, `src/app/figures/page.tsx`, `src/app/process/page.tsx` — each using the appropriate reusable components and data from `museum-data.ts` |
| **Human Decision** | Each page was scoped in a separate request. I reviewed the output of each step before the next began. The artifacts and concepts pages group content by exhibit room for navigational clarity. The process page uses first-person voice to explain the workflow honestly. |
| **Revision / Improvement** | All five companion pages passed lint and build on first attempt with no corrections required. |

---

#### Entry 010 — Process Documentation Update

| Field | Notes |
|---|---|
| **Stage** | Documentation |
| **Tool Used** | GitHub Copilot (Claude Sonnet) under student direction |
| **Goal** | Update `AI_ORCHESTRATION_LOG.md`, `QA_REVIEW_LOG.md`, and `processStages` in `museum-data.ts` to accurately reflect the completed implementation work |
| **Output** | All three files updated with honest accounts of what was built, what decisions were made, and what remains to be done |
| **Human Decision** | Documentation updates are my own review of what actually happened. Nothing is overclaimed. The QA log reflects what has been verified (lint, build, routing) and what has not yet been reviewed (visual polish, deployment, presentation). |
| **Revision / Improvement** | Remaining work: README, deployment, final visual polish review, and presentation preparation. |

---

#### Entry 011 — Final Polish and Presentation Prep

_(To be completed before submission)_

| Field | Notes |
|---|---|
| **Stage** | Finalization |
| **Tool Used** | |
| **Goal** | |
| **Output** | |
| **Human Decision** | |
| **Revision / Improvement** | |
