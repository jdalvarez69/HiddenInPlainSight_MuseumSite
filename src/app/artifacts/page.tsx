import type { Metadata } from "next";
import Link from "next/link";
import { artifacts, exhibits } from "@/lib/museum-data";
import ArtifactPanel from "@/components/ArtifactPanel";
import CuratorNote from "@/components/CuratorNote";
import NextRoomCTA from "@/components/NextRoomCTA";

export const metadata: Metadata = {
  title: "Artifacts — Hidden in Plain Sight",
  description:
    "Objects, diagrams, machines, and symbols from the history of cryptography — one from each stage of the museum route.",
};

// Group artifacts by the exhibit room they belong to, preserving exhibit order.
const artifactsByRoom = exhibits.map((exhibit) => ({
  exhibit,
  items: artifacts.filter((a) => a.exhibitSlug === exhibit.slug),
}));

export default function ArtifactsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="museum-container pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-2xl">
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-5"
            style={{ color: "var(--color-accent)" }}
          >
            Companion Route
          </p>
          <h1
            className="mb-5"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            Artifacts of Hidden Meaning
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "60ch" }}
          >
            Cryptography can feel abstract. This page collects the objects,
            diagrams, machines, and symbols that represent each stage of the
            story — the things you might find in museum display cases, the
            annotated drawings that make a concept visible. Each artifact is
            tied to one of the five exhibit rooms.
          </p>
        </div>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Curator Note ─────────────────────────────────────────────────── */}
      <section className="museum-container py-10 max-w-2xl">
        <CuratorNote>
          Artifacts are not decorations. Each object or diagram in this gallery
          represents the way secrecy was actually practiced at a particular
          moment in history — what it looked like, what it required, and what it
          could not hide. The rods, the wheels, the rotor diagrams, and the
          sequence charts are all records of the same underlying problem being
          worked on across different centuries.
        </CuratorNote>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Gallery — grouped by room ─────────────────────────────────────── */}
      {artifactsByRoom
        .filter((group) => group.items.length > 0)
        .map((group) => (
          <section key={group.exhibit.slug} className="museum-container py-12">
            {/* Room label */}
            <header className="mb-6">
              <Link
                href={`/exhibits/${group.exhibit.slug}`}
                className="group inline-flex items-center gap-2"
              >
                <p
                  className="text-[0.6rem] tracking-widest uppercase transition-colors group-hover:text-[var(--color-accent)]"
                  style={{ color: "var(--color-text-dim)" }}
                >
                  Room {String(group.exhibit.order).padStart(2, "0")}
                </p>
                <span
                  className="text-[0.6rem] tracking-widest uppercase transition-colors group-hover:text-[var(--color-accent)]"
                  style={{ color: "var(--color-text-dim)" }}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
              <h2
                className="mt-1 text-xl leading-snug"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-text)",
                }}
              >
                {group.exhibit.title}
              </h2>
            </header>

            {/* Artifact grid */}
            <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((artifact) => (
                <ArtifactPanel
                  key={artifact.title}
                  title={artifact.title}
                  era={artifact.era}
                  description={artifact.description}
                  visualHint={artifact.visualHint}
                  status={artifact.status}
                  sources={artifact.sources}
                />
              ))}
            </div>

            {/* Inter-group rule */}
            <div
              className="mt-12"
              style={{ borderTop: "1px solid var(--color-rule)" }}
            />
          </section>
        ))}

      {/* ── Route connection ─────────────────────────────────────────────── */}
      <section className="museum-container py-14 max-w-2xl">
        <header className="mb-8">
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-3"
            style={{ color: "var(--color-text-dim)" }}
          >
            Back to the Guided Route
          </p>
          <h2
            className="text-2xl leading-snug"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            Each artifact belongs to a room.
          </h2>
          <p
            className="mt-3 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "55ch" }}
          >
            The guided route provides the full context — the history, the key
            points, and the argument each artifact is part of.
          </p>
        </header>

        <ol
          className="space-y-0 list-none p-0 m-0"
          style={{ borderLeft: "1px solid var(--color-rule)" }}
        >
          {exhibits.map((exhibit) => (
            <li key={exhibit.slug} className="relative">
              <Link
                href={`/exhibits/${exhibit.slug}`}
                className="group flex items-start gap-4 pl-6 py-4 transition-colors hover:bg-[var(--color-bg-surface)]"
              >
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-colors group-hover:bg-[var(--color-accent)]"
                  style={{ backgroundColor: "var(--color-accent-dim)" }}
                  aria-hidden="true"
                />
                <p
                  className="text-[0.6rem] tracking-widest uppercase mt-0.5 w-14 shrink-0"
                  style={{ color: "var(--color-accent)" }}
                >
                  Room {String(exhibit.order).padStart(2, "0")}
                </p>
                <div className="flex-1">
                  <p
                    className="text-sm leading-snug transition-colors group-hover:text-[var(--color-accent)]"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "var(--color-text)",
                    }}
                  >
                    {exhibit.title}
                  </p>
                  <p
                    className="text-[0.7rem] mt-0.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    {artifacts.filter((a) => a.exhibitSlug === exhibit.slug)
                      .length}{" "}
                    artifact
                    {artifacts.filter((a) => a.exhibitSlug === exhibit.slug)
                      .length !== 1
                      ? "s"
                      : ""}
                  </p>
                </div>
                <span
                  className="text-sm mt-0.5 shrink-0 transition-transform group-hover:translate-x-1"
                  style={{ color: "var(--color-accent-dim)" }}
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
              {exhibit.order < exhibits.length && (
                <div
                  className="ml-6"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                />
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Closing CTA ──────────────────────────────────────────────────── */}
      <section className="museum-container py-16 max-w-2xl">
        <NextRoomCTA
          href="/concepts"
          label="Continue exploring"
          title="The Concept Guide"
          description="Decode the key ideas that appear across the museum."
        />

        <p className="mt-10 text-sm" style={{ color: "var(--color-text-dim)" }}>
          Or{" "}
          <Link
            href="/exhibits"
            className="underline underline-offset-2 transition-colors hover:text-[var(--color-text)]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            return to the exhibit gallery
          </Link>
          .
        </p>
      </section>
    </>
  );
}
