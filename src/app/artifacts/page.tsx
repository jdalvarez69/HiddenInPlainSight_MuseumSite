import type { Metadata } from "next";
import Link from "next/link";
import { artifacts, exhibits } from "@/lib/museum-data";
import ArtifactPanel from "@/components/ArtifactPanel";
import NextRoomCTA from "@/components/NextRoomCTA";
import ExhibitVisual from "@/components/visuals/ExhibitVisual";

export const metadata: Metadata = {
  title: "Artifacts — Hidden in Plain Sight",
  description:
    "Objects, diagrams, machines, and symbols from the history of cryptography — one from each stage of the museum route.",
};

const orderBySlug = Object.fromEntries(exhibits.map((exhibit) => [exhibit.slug, exhibit.order]));

const artifactsHeroImage = "/images/companions/artifacts-hero.png";

function shortDescription(text: string) {
  const sentence = text.split(". ")[0]?.trim();
  if (!sentence) return text;
  return sentence.endsWith(".") ? sentence : `${sentence}.`;
}

export default function ArtifactsPage() {
  const sortedArtifacts = [...artifacts].sort((a, b) => {
    const aOrder = orderBySlug[a.exhibitSlug] ?? 99;
    const bOrder = orderBySlug[b.exhibitSlug] ?? 99;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.title.localeCompare(b.title);
  });

  return (
    <>
      <section className="museum-container pt-20 pb-14 md:pt-28 md:pb-18">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(300px,430px)] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-[0.66rem] tracking-widest uppercase mb-5" style={{ color: "var(--color-accent)" }}>
              Companion Gallery
            </p>
            <h1 className="mb-4" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>
              Artifact Collection
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              A visual catalog of objects and diagrams that carry the five-room story.
            </p>
          </div>

          <ExhibitVisual
            imagePath={artifactsHeroImage}
            imageAlt="Companion gallery hero image for artifacts"
            title="Artifact Gallery"
            caption="Key objects and mechanisms, arranged by room from antiquity through modern trust systems."
            imageMinHeight={260}
          />
        </div>
      </section>

      <div className="museum-container" style={{ borderTop: "1px solid var(--color-rule)" }} />

      <section className="museum-container py-14 md:py-20">
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {sortedArtifacts.map((artifact) => {
            const roomOrder = String(orderBySlug[artifact.exhibitSlug] ?? 0).padStart(2, "0");

            return (
              <div key={artifact.title}>
                <p className="mb-3 text-[0.64rem] tracking-widest uppercase" style={{ color: "var(--color-text-dim)" }}>
                  Room {roomOrder}
                </p>
                <ArtifactPanel
                  title={artifact.title}
                  era={artifact.era}
                  description={shortDescription(artifact.description)}
                  status={artifact.status}
                  compact
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="museum-container pb-16 max-w-2xl">
        <NextRoomCTA
          href="/concepts"
          label="Continue"
          title="Concept Decoder"
          description="Read the key terms that make the objects legible."
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
