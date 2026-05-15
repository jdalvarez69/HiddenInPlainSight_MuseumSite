import type { Metadata } from "next";
import Link from "next/link";
import { figures, exhibits } from "@/lib/museum-data";
import FigureCard from "@/components/FigureCard";
import CuratorNote from "@/components/CuratorNote";
import NextRoomCTA from "@/components/NextRoomCTA";

export const metadata: Metadata = {
  title: "People Behind the Ciphers — Hidden in Plain Sight",
  description:
    "Key figures in the history of cryptography — soldiers, scholars, mathematicians, engineers, and privacy advocates.",
};

// Group figures by exhibit room, preserving exhibit order.
const figuresByRoom = exhibits.map((exhibit) => ({
  exhibit,
  items: figures.filter((f) => f.exhibitSlug === exhibit.slug),
}));

export default function FiguresPage() {
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
            People Behind the Ciphers
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "60ch" }}
          >
            Cryptography developed through the work of soldiers, scholars,
            mathematicians, engineers, and public privacy advocates — people
            operating under very different pressures, across very different
            centuries, working on the same underlying problem. This page
            introduces the figures whose contributions appear in the museum
            route.
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
          This page focuses on each person&rsquo;s role in the museum story —
          not on full biographies. Some figures are well documented; others
          appear in sources that are themselves still being verified. Status
          labels reflect that honestly.
        </CuratorNote>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Figures — grouped by room ─────────────────────────────────────── */}
      {figuresByRoom
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
            </header>

            {/* Figure grid */}
            <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((figure) => (
                <FigureCard
                  key={figure.name}
                  name={figure.name}
                  role={figure.role}
                  description={figure.description}
                  status={figure.status}
                  sources={figure.sources}
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
            Each figure belongs to a room.
          </h2>
          <p
            className="mt-3 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "55ch" }}
          >
            The exhibit rooms provide the full historical context — the problem
            each person was responding to, the constraints they worked under, and
            the significance of what they did.
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
                    {figures.filter((f) => f.exhibitSlug === exhibit.slug).length}{" "}
                    {figures.filter((f) => f.exhibitSlug === exhibit.slug)
                      .length !== 1
                      ? "figures"
                      : "figure"}
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
          href="/process"
          label="Continue exploring"
          title="The AI Process"
          description="See how the museum was planned, researched, built, and reviewed through a structured AI workflow."
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
