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
      "I defined topic, thesis, audience, exhibit structure, and design direction before writing code. Planning documents set clear boundaries for later AI work.",
  },
  {
    label: "Research organization",
    description:
      "I organized sources before writing exhibit content. Claims without support were tagged [VERIFY] and kept out of production copy.",
  },
  {
    label: "Design system creation",
    description:
      "I defined palette, typography, spacing, and tone in writing before implementation. The goal was editorial archival seriousness, not hacker or startup aesthetics.",
  },
  {
    label: "Controlled content writing",
    description:
      "Site copy was drafted in a single source-of-truth document (SITE_COPY.md) before pages were built. Content in code had to be source-traceable.",
  },
  {
    label: "Structured AI implementation",
    description:
      "Each build step was scoped in a single request with explicit file, data, and design constraints. AI executed bounded tasks; it did not choose structure.",
  },
  {
    label: "Lint and build testing",
    description:
      "Every step ended with npm run lint and npm run build. Failures were fixed before advancing.",
  },
  {
    label: "Review and documentation",
    description:
      "Major AI contributions were logged in AI_ORCHESTRATION_LOG.md, and acceptance criteria are tracked in QA_REVIEW_LOG.md.",
  },
];

// How the process maps to assignment requirements.
const assignmentConnections = [
  {
    requirement: "Research",
    explanation:
      "Research was organized before writing. Sources are documented in RESEARCH_NOTES.md and traced to claims in the data file.",
  },
  {
    requirement: "Planning",
    explanation:
      "Six planning documents were completed before implementation. The five-exhibit structure was set before coding.",
  },
  {
    requirement: "Design judgment",
    explanation:
      "Editorial archival modernism was chosen deliberately: warm parchment tones, serif hierarchy, restrained texture, and no decorative code aesthetics.",
  },
  {
    requirement: "AI orchestration",
    explanation:
      "AI was used throughout, but each task was scoped and reviewed. It did not choose topic, thesis, design direction, or final content decisions.",
  },
  {
    requirement: "Visual coherence",
    explanation:
      "The design system is implemented through shared CSS tokens and applied consistently across pages and components.",
  },
  {
    requirement: "Educational purpose",
    explanation:
      "The site uses a linear guided route for visitors with no prior background. Companion pages support that route rather than replacing it.",
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
            staged planning, organized research, written design rules, and
            bounded implementation tasks.
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
            I used AI as a structured assistant for planning, setup,
            implementation, and error checks. Project direction, thesis, design,
            and final content decisions were mine.
          </p>
          <p className="mt-3">
            Significant AI interactions were logged as the work progressed so I
            could explain what the AI did and what I decided.
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
            The AI log, QA checklist, design system, and process page document
            how this project was made. The museum content was the goal; this
            documentation shows the process was intentional.
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
