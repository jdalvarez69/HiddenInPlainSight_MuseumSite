import type { Metadata } from "next";
import Link from "next/link";
import { concepts, exhibits } from "@/lib/museum-data";
import ConceptCard from "@/components/ConceptCard";
import CuratorNote from "@/components/CuratorNote";
import NextRoomCTA from "@/components/NextRoomCTA";
import ExhibitVisual from "@/components/visuals/ExhibitVisual";

export const metadata: Metadata = {
  title: "Concept Guide — Hidden in Plain Sight",
  description:
    "Plain-language explanations of the core ideas in cryptographic history — from substitution ciphers to post-quantum standards.",
};

// Group concepts by exhibit room, preserving exhibit order.
const conceptsByRoom = exhibits.map((exhibit) => ({
  exhibit,
  items: concepts.filter((c) => c.exhibitSlug === exhibit.slug),
}));

const roomVisualMap = {
  "secret-writing": "scytale",
  "states-and-power": "frequency",
  "machines-of-secrecy": "enigma",
  "mathematical-turn": "public-private-key",
  "invisible-shield": "tls",
} as const;

export default function ConceptsPage() {
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
            Concept Guide
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "60ch" }}
          >
            Cryptography can seem technical. This guide explains each room&apos;s
            core ideas in plain language.
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
          Think of this as gallery wall text: read before, during, or after the
          route. Concepts follow the same five-room order.
        </CuratorNote>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Concepts — grouped by room ───────────────────────────────────── */}
      {conceptsByRoom
        .filter((group) => group.items.length > 0)
        .map((group) => (
          <section key={group.exhibit.slug} className="museum-container py-12">
            {/* Room label */}
            <header className="mb-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_250px] lg:items-start">
              <div>
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
                    className="text-[0.6rem] transition-colors group-hover:text-[var(--color-accent)]"
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
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Wall-guide concepts for this room.
                </p>
              </div>

              <ExhibitVisual
                visualKey={
                  roomVisualMap[
                    group.exhibit.slug as keyof typeof roomVisualMap
                  ] ?? "scytale"
                }
                title="Room Diagram"
                caption={group.exhibit.subtitle}
              />
            </header>

            {/* Concept grid */}
            <div className="grid gap-px sm:grid-cols-2">
              {group.items.map((concept) => (
                <ConceptCard
                  key={concept.term}
                  term={concept.term}
                  shortDefinition={concept.shortDefinition}
                  plainLanguageExplanation={concept.plainLanguageExplanation}
                  status={concept.status}
                  sources={concept.sources}
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
            Each concept lives inside a room.
          </h2>
          <p
            className="mt-3 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "55ch" }}
          >
            The guided route provides the evidence and argument. This page is a
            companion, not a substitute.
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
                    {concepts.filter((c) => c.exhibitSlug === exhibit.slug)
                      .length}{" "}
                    concept
                    {concepts.filter((c) => c.exhibitSlug === exhibit.slug)
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
          href="/figures"
          label="Continue exploring"
          title="Key Figures"
          description="Meet the people whose work shaped the hidden systems of cryptography."
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
