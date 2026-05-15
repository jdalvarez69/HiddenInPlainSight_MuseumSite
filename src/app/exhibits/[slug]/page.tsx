import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { exhibits } from "@/lib/museum-data";
import ArtifactPanel from "@/components/ArtifactPanel";
import NextRoomCTA from "@/components/NextRoomCTA";
import ExhibitVisual from "@/components/visuals/ExhibitVisual";

const heroImageMap = {
  "secret-writing": "/images/exhibits/room-01-ancient-secrecy.png",
  "states-and-power": "/images/exhibits/room-02-state-ciphers.png",
  "machines-of-secrecy": "/images/exhibits/room-03-machines-of-secrecy.png",
  "mathematical-turn": "/images/exhibits/room-04-mathematical-turn.png",
  "invisible-shield": "/images/exhibits/room-05-modern-trust.png",
} as const;

const artifactVisualMap = {
  "secret-writing": "caesar",
  "states-and-power": "frequency",
  "machines-of-secrecy": "enigma",
  "mathematical-turn": "public-private-key",
  "invisible-shield": "tls",
} as const;

const heroCaptionBySlug: Record<string, string> = {
  "secret-writing": "Early secrecy relied on physical methods and fixed substitution before formal security theory.",
  "states-and-power": "Cryptanalysis became political leverage as language patterns met state communication.",
  "machines-of-secrecy": "Industrial ciphers scaled secrecy, and industrial codebreaking scaled the response.",
  "mathematical-turn": "The field shifted from clever mechanisms to proofs, formal models, and key-distribution breakthroughs.",
  "invisible-shield": "Modern trust layers run quietly beneath everyday browsing, messaging, and transactions.",
};

const diagramCaptionBySlug: Record<string, string> = {
  "secret-writing": "Caesar wheel model showing fixed-shift substitution in Room 01.",
  "states-and-power": "Frequency distribution model showing why repeated language structure leaks information.",
  "machines-of-secrecy": "Enigma rotor pathway showing moving substitution states in mechanical encryption.",
  "mathematical-turn": "Public-key relationship model linking open encryption keys to private decryption keys.",
  "invisible-shield": "TLS handshake sequence showing identity validation and negotiated session secrecy.",
};

const hookBySlug: Record<string, string> = {
  "secret-writing": "Secrecy began as physical control, not mathematical certainty.",
  "states-and-power": "Power shifted when language patterns became readable evidence.",
  "machines-of-secrecy": "Machine-scale encryption forced machine-scale codebreaking.",
  "mathematical-turn": "Security changed when proofs mattered more than obscurity.",
  "invisible-shield": "The same old secrecy problem now runs beneath everyday browsing.",
};

export async function generateStaticParams() {
  return exhibits.map((exhibit) => ({ slug: exhibit.slug }));
}

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
  const quickPoints = exhibit.keyPoints.slice(0, 3);
  const artifactVisualKey = artifactVisualMap[exhibit.slug as keyof typeof artifactVisualMap];

  return (
    <>
      <div className="museum-container pt-10">
        <Link
          href="/exhibits"
          className="text-[0.65rem] tracking-widest uppercase transition-colors hover:text-[var(--color-text)]"
          style={{ color: "var(--color-text-dim)" }}
        >
          ← Gallery Map
        </Link>
      </div>

      <section className="museum-container pt-8 pb-14 md:pb-18">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,410px)] lg:items-start">
          <div className="max-w-2xl">
            <p
              className="text-[0.66rem] tracking-widest uppercase mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              {roomLabel}
            </p>

            <h1
              className="mb-2"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
            >
              {exhibit.title}
            </h1>

            <p
              className="text-[0.78rem] tracking-[0.14em] uppercase mb-6"
              style={{ color: "var(--color-text-dim)" }}
            >
              {exhibit.subtitle}
            </p>

            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              {hookBySlug[exhibit.slug]}
            </p>
          </div>

          <ExhibitVisual
            imagePath={heroImageMap[exhibit.slug as keyof typeof heroImageMap]}
            imageAlt={`${roomLabel} exhibit hero image`}
            title={`${roomLabel} Hero`}
            caption={heroCaptionBySlug[exhibit.slug]}
            imageMinHeight={300}
          />
        </div>
      </section>

      <div className="museum-container" style={{ borderTop: "1px solid var(--color-rule)" }} />

      <section className="museum-container py-14 max-w-3xl">
        <header className="mb-5">
          <p className="text-[0.66rem] tracking-widest uppercase" style={{ color: "var(--color-text-dim)" }}>
            In 30 Seconds
          </p>
        </header>
        <ul className="space-y-4 list-none p-0 m-0">
          {quickPoints.map((point, index) => (
            <li key={`${exhibit.slug}-quick-${index}`} className="pl-5 relative" style={{ borderLeft: "1px solid var(--color-rule)" }}>
              <span
                className="absolute left-0 top-2 -translate-x-1/2 w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--color-accent-dim)" }}
                aria-hidden="true"
              />
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="museum-container" style={{ borderTop: "1px solid var(--color-rule)" }} />

      <section className="museum-container py-14">
        <header className="mb-5">
          <p className="text-[0.66rem] tracking-widest uppercase" style={{ color: "var(--color-text-dim)" }}>
            Featured Artifact
          </p>
        </header>
        <div className="max-w-xl">
          <ArtifactPanel
            title={exhibit.featuredArtifact.title}
            description={exhibit.featuredArtifact.caption}
            compact
            visual={
              artifactVisualKey ? (
                <ExhibitVisual
                  visualKey={artifactVisualKey}
                  title="Supporting Diagram"
                  caption={diagramCaptionBySlug[exhibit.slug]}
                />
              ) : undefined
            }
          />
        </div>
      </section>

      <div className="museum-container" style={{ borderTop: "1px solid var(--color-rule)" }} />

      <section className="museum-container py-14 max-w-2xl">
        <header className="mb-4">
          <p className="text-[0.66rem] tracking-widest uppercase" style={{ color: "var(--color-text-dim)" }}>
            Why It Mattered
          </p>
        </header>
        <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
          {exhibit.takeaway}
        </p>
      </section>

      <section className="museum-container pb-12 max-w-2xl">
        <header className="mb-4">
          <p className="text-[0.66rem] tracking-widest uppercase" style={{ color: "var(--color-text-dim)" }}>
            Curiosity Handoff
          </p>
        </header>
        <div
          className="p-5"
          style={{
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-bg-surface)",
            borderTop: "2px solid var(--color-accent-dim)",
          }}
        >
          <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            {exhibit.transition}
          </p>
        </div>
      </section>

      <section className="museum-container pb-6 max-w-2xl">
        <details
          className="p-4"
          style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-surface)" }}
        >
          <summary
            className="text-[0.65rem] tracking-widest uppercase cursor-pointer"
            style={{ color: "var(--color-text-dim)" }}
          >
            Room Sources ({exhibit.sources.length})
          </summary>
          <ul className="mt-3 space-y-1 list-none p-0">
            {exhibit.sources.map((source) => (
              <li key={source} className="text-[0.7rem]" style={{ color: "var(--color-text-secondary)" }}>
                {source}
              </li>
            ))}
          </ul>
        </details>
      </section>

      <section className="museum-container pb-20 max-w-2xl">
        {nextExhibit ? (
          <NextRoomCTA
            href={`/exhibits/${nextExhibit.slug}`}
            label={`Room ${String(nextExhibit.order).padStart(2, "0")} - Continue`}
            title={nextExhibit.title}
            description={nextExhibit.subtitle}
          />
        ) : (
          <NextRoomCTA
            href="/timeline"
            label="End of route - Continue exploring"
            title="Timeline of Secrecy"
            description="Follow the long chronology from antiquity to post-quantum standards."
          />
        )}
      </section>
    </>
  );
}
