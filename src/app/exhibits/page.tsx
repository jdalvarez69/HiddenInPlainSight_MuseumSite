import type { Metadata } from "next";
import Link from "next/link";
import { exhibits } from "@/lib/museum-data";
import ExhibitCard from "@/components/ExhibitCard";
import CuratorNote from "@/components/CuratorNote";
import NextRoomCTA from "@/components/NextRoomCTA";

export const metadata: Metadata = {
  title: "Exhibits — Hidden in Plain Sight",
  description:
    "The guided exhibit route: five rooms tracing the history of cryptography from ancient secret writing to modern digital encryption.",
};

// One-sentence connective description for each room in the route logic section.
const routeLogic = [
  {
    order: 1,
    slug: "secret-writing",
    label: "Room 01",
    point: "Secrecy starts as physical ingenuity: hidden messages and fixed letter shifts, before formal security theory.",
  },
  {
    order: 2,
    slug: "states-and-power",
    label: "Room 02",
    point: "Ciphers become state tools, and cryptanalysis emerges when language patterns start betraying the code.",
  },
  {
    order: 3,
    slug: "machines-of-secrecy",
    label: "Room 03",
    point: "Machine-era secrecy scales fast, but machine complexity also creates new paths for systematic codebreaking.",
  },
  {
    order: 4,
    slug: "mathematical-turn",
    label: "Room 04",
    point: "Cryptography becomes mathematical, and public-key ideas solve the long-standing key distribution problem.",
  },
  {
    order: 5,
    slug: "invisible-shield",
    label: "Room 05",
    point: "Those ideas become infrastructure: modern secure connections inherit directly from the previous rooms.",
  },
];

export default function ExhibitsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="museum-container pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-2xl">
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-5"
            style={{ color: "var(--color-accent)" }}
          >
            The Guided Route
          </p>
          <h1
            className="mb-5"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            Five Rooms of Hidden Meaning
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "60ch" }}
          >
            This museum is a single guided path from ancient secret writing to
            the encryption that secures modern digital life.
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
          <p>
            The route is intentionally ordered. Each room answers a weakness the
            previous room exposed.
          </p>
          <p className="mt-3">
            Prefer topic-based browsing? Timeline, Artifacts, Concepts, and
            Figures are available at any point.
          </p>
        </CuratorNote>
      </section>

      {/* ── Exhibit Cards ────────────────────────────────────────────────── */}
      <section className="museum-container py-8">
        <header className="mb-6">
          <p
            className="text-[0.6rem] tracking-widest uppercase"
            style={{ color: "var(--color-text-dim)" }}
          >
            All Five Rooms
          </p>
        </header>
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {exhibits.map((exhibit) => (
            <ExhibitCard
              key={exhibit.slug}
              order={exhibit.order}
              title={exhibit.title}
              subtitle={exhibit.subtitle}
              intro={exhibit.intro}
              showIntro={false}
              href={`/exhibits/${exhibit.slug}`}
            />
          ))}
        </div>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container mt-8"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Route Logic ──────────────────────────────────────────────────── */}
      <section className="museum-container py-14">
        <header className="max-w-xl mb-10">
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-3"
            style={{ color: "var(--color-text-dim)" }}
          >
            How the Route Is Structured
          </p>
          <h2
            className="text-2xl leading-snug"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            Each room answers a question the previous room left open.
          </h2>
        </header>

        <ol
          className="space-y-6 max-w-2xl list-none p-0 m-0"
          style={{ borderLeft: "1px solid var(--color-rule)" }}
        >
          {routeLogic.map((item) => (
            <li key={item.slug} className="pl-6 relative">
              <span
                className="absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--color-accent-dim)" }}
                aria-hidden="true"
              />
              <p
                className="text-[0.6rem] tracking-widest uppercase mb-1"
                style={{ color: "var(--color-accent)" }}
              >
                {item.label}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {item.point}
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

      {/* ── Begin CTA ────────────────────────────────────────────────────── */}
      <section className="museum-container py-16 max-w-2xl">
        <NextRoomCTA
          href="/exhibits/secret-writing"
          label="Begin the route"
          title={exhibits[0].title}
          description={exhibits[0].subtitle}
        />

        <p className="mt-10 text-sm" style={{ color: "var(--color-text-dim)" }}>
          Or{" "}
          <Link
            href="/"
            className="underline underline-offset-2 hover:text-[var(--color-text)] transition-colors"
            style={{ color: "var(--color-text-secondary)" }}
          >
            return to the museum entrance
          </Link>
          .
        </p>
      </section>
    </>
  );
}
