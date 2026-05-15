import type { Metadata } from "next";
import Link from "next/link";
import { exhibits, timelineEvents } from "@/lib/museum-data";
import TimelineRail from "@/components/TimelineRail";
import CuratorNote from "@/components/CuratorNote";
import NextRoomCTA from "@/components/NextRoomCTA";

export const metadata: Metadata = {
  title: "Timeline — Hidden in Plain Sight",
  description:
    "A chronological companion path through the history of cryptography, from antiquity to post-quantum standards.",
};

export default function TimelinePage() {
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
            Timeline of Secrecy
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "60ch" }}
          >
            Cryptography did not develop in a straight line. Each advance was a
            response to something — a new way of communicating, a new
            concentration of power, the mechanization of industry and war, the
            formalization of mathematics, and finally the migration of everyday
            life onto digital networks. This timeline traces those responses in
            order.
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
          This timeline is a companion path, not the main exhibit. The guided
          route — five rooms, experienced in order — is the primary way to move
          through the museum. The timeline is here to help visitors place those
          rooms in historical sequence, and to see, at a glance, how much ground
          the field has covered.
        </CuratorNote>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Timeline ─────────────────────────────────────────────────────── */}
      <section className="museum-container py-14">
        <header className="mb-10">
          <p
            className="text-[0.6rem] tracking-widest uppercase"
            style={{ color: "var(--color-text-dim)" }}
          >
            {timelineEvents.length} events · Ancient to 2024
          </p>
        </header>
        <div className="max-w-2xl">
          <TimelineRail events={timelineEvents} />
        </div>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

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
            The five rooms in historical order
          </h2>
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
                    style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
                  >
                    {exhibit.title}
                  </p>
                  <p
                    className="text-[0.7rem] mt-0.5"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    {exhibit.subtitle}
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
          href="/artifacts"
          label="Continue exploring"
          title="The Artifact Gallery"
          description="Explore the objects, diagrams, and symbols that make the history of cryptography visible."
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
