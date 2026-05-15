import type { Metadata } from "next";
import Link from "next/link";
import { concepts, exhibits } from "@/lib/museum-data";
import ConceptCard from "@/components/ConceptCard";
import NextRoomCTA from "@/components/NextRoomCTA";

export const metadata: Metadata = {
  title: "Concept Guide — Hidden in Plain Sight",
  description:
    "Plain-language explanations of the core ideas in cryptographic history — from substitution ciphers to post-quantum standards.",
};

const roomBySlug = Object.fromEntries(
  exhibits.map((exhibit) => [
    exhibit.slug,
    {
      order: exhibit.order,
      label: `R${String(exhibit.order).padStart(2, "0")}`,
    },
  ])
);

function shortExplanation(text: string) {
  const sentence = text.split(". ")[0]?.trim();
  if (!sentence) return text;
  return sentence.endsWith(".") ? sentence : `${sentence}.`;
}

export default function ConceptsPage() {
  const sortedConcepts = [...concepts].sort((a, b) => {
    const aOrder = roomBySlug[a.exhibitSlug]?.order ?? 99;
    const bOrder = roomBySlug[b.exhibitSlug]?.order ?? 99;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.term.localeCompare(b.term);
  });

  return (
    <>
      <section className="museum-container pt-20 pb-12 md:pt-28 md:pb-14">
        <div className="max-w-2xl">
          <p className="text-[0.6rem] tracking-widest uppercase mb-5" style={{ color: "var(--color-accent)" }}>
            Decoder Guide
          </p>
          <h1 className="mb-4" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>
            Concepts in Plain Language
          </h1>
          <p className="text-base" style={{ color: "var(--color-text-secondary)" }}>
            Quick definitions for the terms that appear across the museum route.
          </p>
        </div>
      </section>

      <div className="museum-container" style={{ borderTop: "1px solid var(--color-rule)" }} />

      <section className="museum-container py-10 md:py-14">
        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3">
          {sortedConcepts.map((concept) => (
            <ConceptCard
              key={concept.term}
              term={concept.term}
              shortDefinition={concept.shortDefinition}
              plainLanguageExplanation={shortExplanation(concept.plainLanguageExplanation)}
              status={concept.status}
              compact
              marker={roomBySlug[concept.exhibitSlug]?.label ?? "R--"}
            />
          ))}
        </div>
      </section>

      <section className="museum-container pb-16 max-w-2xl">
        <NextRoomCTA
          href="/figures"
          label="Continue"
          title="People Index"
          description="Meet the figures behind each cryptographic shift."
        />

        <p className="mt-8 text-sm" style={{ color: "var(--color-text-dim)" }}>
          Or return to the
          <Link
            href="/exhibits"
            className="ml-1 underline underline-offset-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            guided route
          </Link>
          .
        </p>
      </section>
    </>
  );
}
