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

const toolRoles = [
  {
    title: "ChatGPT",
    usedFor:
      "Topic framing, research organization, project strategy, prompt writing, critique, and README/presentation support.",
  },
  {
    title: "GitHub Copilot Agent Mode",
    usedFor:
      "Creating files, implementing components and routes, running terminal commands, fixing build errors, Git workflow actions, and deployment setup.",
  },
  {
    title: "Human Direction",
    usedFor:
      "Choosing the topic, approving or rejecting output, identifying weak design choices, deciding when to revise, and making final judgments.",
  },
];

// How the process maps to assignment requirements.
const assignmentConnections = [
  {
    requirement: "Research",
    explanation:
      "Research was organized first, then mapped to the exhibit narrative. Source tracking remains visible in the data layer and project docs.",
  },
  {
    requirement: "Planning",
    explanation:
      "Project direction was defined before coding: thesis, route, visual direction, and content model were set early and reused throughout implementation.",
  },
  {
    requirement: "Design judgment",
    explanation:
      "The visual language was intentionally curated and revised after testing. Weak sections were reworked instead of left in a draft state.",
  },
  {
    requirement: "AI orchestration",
    explanation:
      "ChatGPT and Copilot were used for distinct roles under bounded prompts. I directed the workflow and approved all final outputs.",
  },
  {
    requirement: "Visual coherence",
    explanation:
      "Shared design tokens, consistent card structure, local hero images, and controlled supporting diagrams maintain continuity across routes.",
  },
  {
    requirement: "Educational purpose",
    explanation:
      "The guided five-room sequence supports first-time learners, while companion pages provide context without breaking the exhibit route.",
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
            This site was not built from one giant prompt. It was developed through planning,
            research organization, design rules, bounded Copilot implementation, visual
            revision, and repeated QA.
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
            I used ChatGPT and GitHub Copilot differently. ChatGPT helped me plan,
            critique, organize, and write. Copilot helped me implement, run checks,
            and manage project files.
          </p>
          <p className="mt-3">
            I made the final decisions about topic, structure, design direction,
            accepted output, and revisions.
          </p>
        </CuratorNote>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Tool Roles ───────────────────────────────────────────────────── */}
      <section className="museum-container py-14">
        <header className="mb-10">
          <p
            className="text-[0.66rem] tracking-widest uppercase mb-3"
            style={{ color: "var(--color-text-dim)" }}
          >
            Tool roles
          </p>
          <h2
            className="text-2xl leading-snug max-w-xl"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            How each role was used
          </h2>
        </header>

        <div className="grid gap-px md:grid-cols-3">
          {toolRoles.map((role) => (
            <article
              key={role.title}
              className="p-6"
              style={{
                backgroundColor: "var(--color-bg-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <p
                className="text-[0.66rem] tracking-widest uppercase mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Used for
              </p>
              <h3
                className="text-lg leading-snug mb-3"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
              >
                {role.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {role.usedFor}
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

      {/* ── Condensed Workflow ───────────────────────────────────────────── */}
      <section className="museum-container py-14 max-w-2xl">
        <header className="mb-8">
          <p
            className="text-[0.66rem] tracking-widest uppercase mb-3"
            style={{ color: "var(--color-text-dim)" }}
          >
            Condensed workflow
          </p>
          <h2
            className="text-2xl leading-snug"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            Six stages from direction to deployment
          </h2>
        </header>

        <div className="space-y-px">
          {processStages.map((stage, index) => (
            <article
              key={stage.stage}
              className="p-6"
              style={{
                backgroundColor: "var(--color-bg-surface)",
                border: "1px solid var(--color-border)",
                borderLeft: "3px solid var(--color-accent-dim)",
              }}
            >
              <p
                className="text-[0.66rem] tracking-widest uppercase mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Stage {String(index + 1).padStart(2, "0")}
              </p>
              <h3
                className="text-lg leading-snug mb-3"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
              >
                {stage.stage}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {stage.goal}
              </p>
              <p
                className="text-base leading-relaxed mt-3"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {stage.result}
              </p>
              <p
                className="text-[0.66rem] tracking-widest uppercase mt-4"
                style={{ color: "var(--color-text-dim)" }}
              >
                Tools: {stage.tool}
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

      {/* ── Assignment connection ─────────────────────────────────────────── */}
      <section className="museum-container py-14 max-w-2xl">
        <header className="mb-8">
          <p
            className="text-[0.66rem] tracking-widest uppercase mb-3"
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
                className="text-base leading-snug mb-2"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
              >
                {item.requirement}
              </h3>
              <p
                className="text-base leading-relaxed"
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
            The goal was not to prove AI could generate pages. The goal was to
            show that I could direct AI through a structured process to build and
            improve a purposeful digital exhibit.
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
