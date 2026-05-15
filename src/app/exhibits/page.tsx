import type { Metadata } from "next";
import Link from "next/link";
import { exhibits } from "@/lib/museum-data";
import ExhibitCard from "@/components/ExhibitCard";
import ExhibitVisual from "@/components/visuals/ExhibitVisual";

export const metadata: Metadata = {
  title: "Exhibits — Hidden in Plain Sight",
  description:
    "The guided exhibit route: five rooms tracing the history of cryptography from ancient secret writing to modern digital encryption.",
};

const hookBySlug: Record<string, string> = {
  "secret-writing": "How early secrecy worked before formal security theory.",
  "states-and-power": "How codebreaking became geopolitical power.",
  "machines-of-secrecy": "How industrial ciphers met industrial analysis.",
  "mathematical-turn": "How modern security moved from craft to proof.",
  "invisible-shield": "How cryptography became daily digital infrastructure.",
};

const tileVisualBySlug = {
  "secret-writing": "scytale",
  "states-and-power": "vigenere",
  "machines-of-secrecy": "bombe",
  "mathematical-turn": "public-private-key",
  "invisible-shield": "tls",
} as const;

export default function ExhibitsPage() {
  return (
    <>
      <section className="museum-container pt-20 pb-12 md:pt-28 md:pb-14">
        <div className="max-w-2xl">
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-5"
            style={{ color: "var(--color-accent)" }}
          >
            Gallery Map
          </p>
          <h1
            className="mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            Five Rooms. One Guided Story.
          </h1>
          <p className="text-base" style={{ color: "var(--color-text-secondary)" }}>
            Enter in sequence to follow how secrecy evolved from hidden writing to digital trust.
          </p>
        </div>
      </section>

      <div className="museum-container" style={{ borderTop: "1px solid var(--color-rule)" }} />

      <section className="museum-container py-10 md:py-14">
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {exhibits.map((exhibit) => (
            <ExhibitCard
              key={exhibit.slug}
              order={exhibit.order}
              title={exhibit.title}
              subtitle={exhibit.subtitle}
              href={`/exhibits/${exhibit.slug}`}
              hook={hookBySlug[exhibit.slug]}
              showIntro={false}
              visual={<ExhibitVisual visualKey={tileVisualBySlug[exhibit.slug as keyof typeof tileVisualBySlug]} />}
            />
          ))}
        </div>
      </section>

      <section className="museum-container pb-16 max-w-2xl">
        <p className="text-sm" style={{ color: "var(--color-text-dim)" }}>
          Prefer context before entering? Use the companion routes in
          <Link
            href="/timeline"
            className="ml-1 underline underline-offset-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Timeline
          </Link>
          .
        </p>
      </section>
    </>
  );
}
