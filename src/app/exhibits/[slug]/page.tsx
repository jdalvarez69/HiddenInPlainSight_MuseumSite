import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { exhibits } from "@/lib/museum-data";
import ArtifactPanel from "@/components/ArtifactPanel";
import CuratorNote from "@/components/CuratorNote";
import EvidencePanel from "@/components/EvidencePanel";
import NextRoomCTA from "@/components/NextRoomCTA";
import StatusBadge from "@/components/StatusBadge";
import ExhibitVisual from "@/components/visuals/ExhibitVisual";

const exhibitVisualKeyMap = {
  "secret-writing": "scytale",
  "states-and-power": "frequency",
  "machines-of-secrecy": "enigma",
  "mathematical-turn": "public-private-key",
  "invisible-shield": "tls",
} as const;

// ─── Static generation ────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return exhibits.map((exhibit) => ({ slug: exhibit.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exhibit = exhibits.find((e) => e.slug === slug);
  if (!exhibit) return {};
  return {
    title: `${exhibit.title} — Hidden in Plain Sight`,
    description: exhibit.subtitle,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ExhibitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exhibit = exhibits.find((e) => e.slug === slug);
  if (!exhibit) notFound();

  const nextExhibit = exhibits.find((e) => e.order === exhibit.order + 1);
  const roomLabel = `Room ${String(exhibit.order).padStart(2, "0")}`;
  const visualKey =
    exhibitVisualKeyMap[
      exhibit.slug as keyof typeof exhibitVisualKeyMap
    ] ?? "scytale";

  return (
    <>
      {/* ── Back link ────────────────────────────────────────────────────── */}
      <div className="museum-container pt-10">
        <Link
          href="/exhibits"
          className="text-[0.65rem] tracking-widest uppercase transition-colors hover:text-[var(--color-text)]"
          style={{ color: "var(--color-text-dim)" }}
        >
          ← All Exhibits
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="museum-container pt-8 pb-12 md:pb-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,360px)] lg:items-start">
          <div className="max-w-2xl">
            <p
              className="text-[0.6rem] tracking-widest uppercase mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              {roomLabel}
            </p>
            <h1
              className="mb-3"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
            >
              {exhibit.title}
            </h1>
            <p
              className="text-base tracking-wide uppercase"
              style={{
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-serif)",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
              }}
            >
              {exhibit.subtitle}
            </p>
          </div>

          <div aria-label={`${exhibit.title} exhibit visual`}>
            <ExhibitVisual
              visualKey={visualKey}
              title={`${roomLabel} Visual`}
              caption={exhibit.featuredArtifact.visualHint}
            />
          </div>
        </div>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Introduction ─────────────────────────────────────────────────── */}
      <section className="museum-container py-10 max-w-3xl">
        <header className="mb-4">
          <p
            className="text-[0.6rem] tracking-widest uppercase"
            style={{ color: "var(--color-text-dim)" }}
          >
            Room Introduction
          </p>
        </header>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "var(--color-text-secondary)", maxWidth: "65ch" }}
        >
          {exhibit.intro}
        </p>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Key Points ───────────────────────────────────────────────────── */}
      <section className="museum-container py-14">
        <header className="mb-8">
          <p
            className="text-[0.6rem] tracking-widest uppercase"
            style={{ color: "var(--color-text-dim)" }}
          >
            Key Points
          </p>
        </header>

        <ol className="space-y-8 list-none p-0 m-0 max-w-2xl">
          {exhibit.keyPoints.map((point, index) => (
            <li
              key={index}
              className="pl-5 relative"
              style={{ borderLeft: "1px solid var(--color-rule)" }}
            >
              <span
                className="absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--color-accent-dim)" }}
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-start gap-2 mb-2">
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {point.text}
                </p>
                <StatusBadge status={point.status} />
              </div>
              {point.sources.length > 0 && (
                <ul className="list-none p-0 m-0 space-y-0.5 mt-2">
                  {point.sources.map((source) => (
                    <li
                      key={source}
                      className="text-[0.65rem]"
                      style={{ color: "var(--color-text-dim)" }}
                    >
                      {source}
                    </li>
                  ))}
                </ul>
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

      {/* ── Featured Artifact ────────────────────────────────────────────── */}
      <section className="museum-container py-14">
        <header className="mb-6">
          <p
            className="text-[0.6rem] tracking-widest uppercase"
            style={{ color: "var(--color-text-dim)" }}
          >
            Featured Artifact
          </p>
        </header>
        <div className="max-w-xl">
          <ArtifactPanel
            title={exhibit.featuredArtifact.title}
            description={exhibit.featuredArtifact.caption}
            visualHint={exhibit.featuredArtifact.visualHint}
          />
        </div>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Concept ──────────────────────────────────────────────────────── */}
      <section className="museum-container py-14 max-w-2xl">
        <header className="mb-6">
          <p
            className="text-[0.6rem] tracking-widest uppercase"
            style={{ color: "var(--color-text-dim)" }}
          >
            Key Concept
          </p>
        </header>
        <article
          className="p-5"
          style={{
            backgroundColor: "var(--color-bg-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <h3
            className="text-base leading-snug mb-3"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            {exhibit.concept.term}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {exhibit.concept.explanation}
          </p>
        </article>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Takeaway ─────────────────────────────────────────────────────── */}
      <section className="museum-container py-14 max-w-2xl">
        <header className="mb-4">
          <p
            className="text-[0.6rem] tracking-widest uppercase"
            style={{ color: "var(--color-text-dim)" }}
          >
            Visitor Takeaway
          </p>
        </header>
        <CuratorNote label="Curator's Takeaway">{exhibit.takeaway}</CuratorNote>
      </section>

      {/* ── Sources ──────────────────────────────────────────────────────── */}
      {exhibit.sources.length > 0 && (
        <section className="museum-container pb-8 max-w-2xl">
          <EvidencePanel sources={exhibit.sources} title="Room Sources" />
        </section>
      )}

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container mt-4"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Transition note ──────────────────────────────────────────────── */}
      <section className="museum-container py-10 max-w-2xl">
        <p
          className="text-sm leading-relaxed italic"
          style={{ color: "var(--color-text-dim)" }}
        >
          {exhibit.transition}
        </p>
      </section>

      {/* ── Next room navigation ─────────────────────────────────────────── */}
      <section className="museum-container pb-20 max-w-2xl">
        {nextExhibit ? (
          <NextRoomCTA
            href={`/exhibits/${nextExhibit.slug}`}
            label={`Room ${String(nextExhibit.order).padStart(2, "0")} — Continue`}
            title={nextExhibit.title}
            description={nextExhibit.subtitle}
          />
        ) : (
          <NextRoomCTA
            href="/timeline"
            label="End of guided route — Explore further"
            title="The Full Timeline"
            description="Trace the complete chronology of cryptographic history, from antiquity to the present."
          />
        )}

        <p className="mt-8 text-sm" style={{ color: "var(--color-text-dim)" }}>
          <Link
            href="/exhibits"
            className="underline underline-offset-2 transition-colors hover:text-[var(--color-text)]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Return to the exhibit gallery
          </Link>
        </p>
      </section>
    </>
  );
}
