import type { Metadata } from "next";
import Link from "next/link";
import { processStages } from "@/lib/museum-data";
import CuratorNote from "@/components/CuratorNote";
import NextRoomCTA from "@/components/NextRoomCTA";

export const metadata: Metadata = {
  title: "AI Process — Hidden in Plain Sight",
  description:
    "How the museum was planned, researched, built, and reviewed through a structured AI workflow.",
};

// The workflow phases — concise descriptions of what each step involved.
const workflowSteps = [
  {
    label: "Topic and concept planning",
    description:
      "I defined the project topic, thesis, audience, exhibit structure, design style, and archetype before writing a single line of code. The planning documents set clear constraints so that AI assistance later could not drift from the direction I had established.",
  },
  {
    label: "Research organization",
    description:
      "I organized the research direction and source list before writing any exhibit content. Sources were assigned to exhibits. Claims without supporting sources were flagged [VERIFY] and excluded from production content.",
  },
  {
    label: "Design system creation",
    description:
      "I defined the visual language — color palette, typography, spacing, and tone — as a written specification before implementation. The design avoids common aesthetic mistakes (neon hacker look, startup landing page energy) and aims for editorial archival seriousness.",
  },
  {
    label: "Controlled content writing",
    description:
      "Site copy was written into a single source-of-truth document (SITE_COPY.md) before any page was built. Nothing was allowed into the code that was not already in that document and traceable to a source.",
  },
  {
    label: "Structured AI implementation",
    description:
      "Each build step was scoped in a single request. I told the AI exactly which files to create, which data to use, what design rules to follow, and what not to do. The AI did not make structural decisions — it executed bounded tasks.",
  },
  {
    label: "Lint and build testing",
    description:
      "Every implementation step ended with npm run lint and npm run build. Problems were fixed before moving to the next step. The build has been clean at every stage.",
  },
  {
    label: "Review and documentation",
    description:
      "Significant AI contributions were logged in AI_ORCHESTRATION_LOG.md. Acceptance criteria are tracked in QA_REVIEW_LOG.md. The Process page itself is part of that documentation.",
  },
];

// How the process maps to assignment requirements.
const assignmentConnections = [
  {
    requirement: "Research",
    explanation:
      "The research was organized before any content was written. Sources are documented in RESEARCH_NOTES.md and traced to every claim in the data file. Items without confirmed sources are explicitly marked.",
  },
  {
    requirement: "Planning",
    explanation:
      "Six planning documents were completed before implementation began: project brief, content model, design system, AI log, QA log, and presentation notes. The five-exhibit structure was defined and locked before any code was written.",
  },
  {
    requirement: "Design judgment",
    explanation:
      "The visual direction — editorial archival modernism, warm parchment tones, serif typography, dot-grid texture, no decorative code imagery — was a deliberate choice, not a default theme. I defined what to avoid as clearly as what to do.",
  },
  {
    requirement: "AI orchestration",
    explanation:
      "AI was used at every build stage, but each task was scoped, bounded, and reviewed. The AI did not select the topic, define the thesis, choose the design, write free-form content, or decide what to include. It executed specific, described tasks.",
  },
  {
    requirement: "Visual coherence",
    explanation:
      "The design system was implemented as CSS custom properties and used consistently across every page and component. No page diverges from the established color, type, or spacing rules.",
  },
  {
    requirement: "Educational purpose",
    explanation:
      "The site is organized as a linear guided route that takes a visitor with no prior knowledge through the history of cryptography and delivers a real understanding of how the field developed. The companion pages support, not replace, the exhibit route.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="museum-container pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-2xl">
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-5"
            style={{ color: "var(--color-accent)" }}
          >
            Build Process
          </p>
          <h1
            className="mb-5"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            AI Orchestration Process
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "60ch" }}
          >
            This site was not made from one giant prompt. It was built through
            staged planning, organized research, a written design system,
            controlled content, and bounded implementation tasks — each step
            reviewed before the next one began.
          </p>
        </div>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Student note ─────────────────────────────────────────────────── */}
      <section className="museum-container py-10 max-w-2xl">
        <CuratorNote label="Student's Note">
          <p>
            I used AI as a structured assistant throughout this project. It
            helped me plan more clearly, scaffold technical setup, write
            TypeScript components, and catch errors. But the project direction,
            the thesis, the design decisions, and the final judgment on what
            content to include were mine.
          </p>
          <p className="mt-3">
            Every significant AI interaction was logged before the next step
            began. The goal was to be able to explain, at any point, exactly
            what the AI did and what I decided about it.
          </p>
        </CuratorNote>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Process Stages ───────────────────────────────────────────────── */}
      <section className="museum-container py-14">
        <header className="mb-10">
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-3"
            style={{ color: "var(--color-text-dim)" }}
          >
            {processStages.length} documented stages
          </p>
          <h2
            className="text-2xl leading-snug max-w-xl"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            What the AI did at each stage
          </h2>
        </header>

        <div className="max-w-2xl space-y-px">
          {processStages.map((stage, index) => (
            <article
              key={index}
              className="p-6"
              style={{
                backgroundColor: "var(--color-bg-surface)",
                border: "1px solid var(--color-border)",
                borderLeft: "3px solid var(--color-accent-dim)",
              }}
            >
              <p
                className="text-[0.6rem] tracking-widest uppercase mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Stage {String(index + 1).padStart(2, "0")}
              </p>
              <h3
                className="text-base leading-snug mb-3"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
              >
                {stage.stage}
              </h3>
              <dl className="space-y-2">
                <div>
                  <dt
                    className="text-[0.6rem] tracking-widest uppercase"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    Tool
                  </dt>
                  <dd
                    className="text-sm mt-0.5"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {stage.tool}
                  </dd>
                </div>
                <div>
                  <dt
                    className="text-[0.6rem] tracking-widest uppercase"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    Goal
                  </dt>
                  <dd
                    className="text-sm mt-0.5"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {stage.goal}
                  </dd>
                </div>
                <div>
                  <dt
                    className="text-[0.6rem] tracking-widest uppercase"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    Result
                  </dt>
                  <dd
                    className="text-sm mt-0.5"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {stage.result}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Workflow explanation ──────────────────────────────────────────── */}
      <section className="museum-container py-14 max-w-2xl">
        <header className="mb-8">
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-3"
            style={{ color: "var(--color-text-dim)" }}
          >
            How the workflow was structured
          </p>
          <h2
            className="text-2xl leading-snug"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            Each step was completed and reviewed before the next began.
          </h2>
        </header>

        <ol
          className="space-y-0 list-none p-0 m-0"
          style={{ borderLeft: "1px solid var(--color-rule)" }}
        >
          {workflowSteps.map((step, index) => (
            <li key={index} className="pl-6 pb-8 relative">
              <span
                className="absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--color-accent-dim)" }}
                aria-hidden="true"
              />
              <p
                className="text-[0.6rem] tracking-widest uppercase mb-1"
                style={{ color: "var(--color-accent)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3
                className="text-sm font-normal leading-snug mb-2"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
              >
                {step.label}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Assignment connection ─────────────────────────────────────────── */}
      <section className="museum-container py-14 max-w-2xl">
        <header className="mb-8">
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-3"
            style={{ color: "var(--color-text-dim)" }}
          >
            Assignment requirements
          </p>
          <h2
            className="text-2xl leading-snug"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            How the process addresses each requirement
          </h2>
        </header>

        <div className="grid gap-px sm:grid-cols-2">
          {assignmentConnections.map((item) => (
            <article
              key={item.requirement}
              className="p-5"
              style={{
                backgroundColor: "var(--color-bg-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h3
                className="text-sm leading-snug mb-2"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
              >
                {item.requirement}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {item.explanation}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Closing note ─────────────────────────────────────────────────── */}
      <section className="museum-container py-10 max-w-2xl">
        <CuratorNote label="Final Note">
          <p>
            The AI log, QA checklist, design system, content model, and process
            page together form a record of how the project was made. The museum
            content was the goal. This documentation is the evidence that the
            process was intentional.
          </p>
        </CuratorNote>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Closing CTA ──────────────────────────────────────────────────── */}
      <section className="museum-container py-16 max-w-2xl">
        <NextRoomCTA
          href="/"
          label="End of companion route"
          title="Return to the Museum Entrance"
          description="Revisit the full exhibit experience from the beginning."
        />

        <p className="mt-10 text-sm" style={{ color: "var(--color-text-dim)" }}>
          Or go directly to{" "}
          <Link
            href="/exhibits"
            className="underline underline-offset-2 transition-colors hover:text-[var(--color-text)]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            the exhibit gallery
          </Link>
          .
        </p>
      </section>
    </>
  );
}
