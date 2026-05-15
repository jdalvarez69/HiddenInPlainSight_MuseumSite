import Link from "next/link";
import { siteMeta, exhibits, artifacts } from "@/lib/museum-data";
import ExhibitCard from "@/components/ExhibitCard";
import ArtifactPanel from "@/components/ArtifactPanel";
import CuratorNote from "@/components/CuratorNote";

// Three artifacts chosen to represent the arc of the story:
// ancient/manual, machine-era, modern/digital
const featuredArtifacts = [
  artifacts.find((a) => a.title === "Scytale"),
  artifacts.find((a) => a.title === "Enigma Rotor System Diagram"),
  artifacts.find((a) => a.title === "TLS Handshake Sequence"),
].filter(Boolean) as typeof artifacts;

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="museum-container pt-24 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-2xl">
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-6"
            style={{ color: "var(--color-accent)" }}
          >
            A Guided Digital Exhibit
          </p>

          <h1
            className="mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            {siteMeta.title}
          </h1>

          <p
            className="text-base tracking-wider uppercase mb-8"
            style={{ color: "var(--color-text-dim)" }}
          >
            {siteMeta.subtitle}
          </p>

          <p
            className="text-lg leading-relaxed mb-12"
            style={{ color: "var(--color-text-secondary)", maxWidth: "62ch" }}
          >
            {siteMeta.thesis}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/exhibits"
              className="inline-block px-8 py-3 text-[0.7rem] tracking-widest uppercase transition-colors border border-[#c4973a] text-[#c4973a] hover:bg-[#c4973a] hover:text-[#1a1714]"
            >
              Enter the Museum
            </Link>
            <Link
              href="/process"
              className="inline-block px-8 py-3 text-[0.7rem] tracking-widest uppercase transition-colors border border-[#2e2b26] text-[#9b9388] hover:border-[#9b9388] hover:text-[#f0ead8]"
            >
              About This Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Curator Note ─────────────────────────────────────────────────── */}
      <section className="museum-container py-12 max-w-2xl">
        <CuratorNote>
          <p>
            This museum follows cryptography from the first attempts at
            concealment in antiquity through the cipher machines of the
            twentieth century, and on to the mathematical foundations that
            make modern digital trust possible. Five rooms. One continuous
            story.
          </p>
          <p className="mt-3">
            All historical content is drawn from verified sources. Anything
            that still needs confirmation is clearly marked. Nothing here has
            been invented.
          </p>
        </CuratorNote>
      </section>

      {/* ── Guided Route Preview ─────────────────────────────────────────── */}
      <section className="museum-container py-12">
        <header className="mb-8">
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-2"
            style={{ color: "var(--color-text-dim)" }}
          >
            The Exhibit Route
          </p>
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            Five Rooms. One Story.
          </h2>
        </header>

        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {exhibits.map((exhibit) => (
            <ExhibitCard
              key={exhibit.slug}
              order={exhibit.order}
              title={exhibit.title}
              subtitle={exhibit.subtitle}
              intro={exhibit.intro}
              href={`/exhibits/${exhibit.slug}`}
            />
          ))}
        </div>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container my-4"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Artifact Preview ─────────────────────────────────────────────── */}
      <section className="museum-container py-12">
        <header className="mb-8">
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-2"
            style={{ color: "var(--color-text-dim)" }}
          >
            From the Collection
          </p>
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            Selected Objects
          </h2>
          <p
            className="mt-2 text-sm"
            style={{ color: "var(--color-text-secondary)", maxWidth: "56ch" }}
          >
            Each artifact marks a specific moment in the history of how people
            protected — or broke — a secret.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArtifacts.map((artifact) => (
            <ArtifactPanel
              key={artifact.title}
              title={artifact.title}
              era={artifact.era}
              description={artifact.description}
              status={artifact.status}
              sources={artifact.sources}
            />
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/artifacts"
            className="text-[0.65rem] tracking-widest uppercase transition-colors"
            style={{ color: "var(--color-text-dim)" }}
          >
            View all artifacts &rarr;
          </Link>
        </div>
      </section>

      {/* ── Rule ─────────────────────────────────────────────────────────── */}
      <div
        className="museum-container my-4"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />

      {/* ── Closing Invitation ───────────────────────────────────────────── */}
      <section className="museum-container py-20 md:py-28">
        <div className="max-w-xl">
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-4"
            style={{ color: "var(--color-text-dim)" }}
          >
            Begin Here
          </p>
          <h2
            className="text-3xl mb-6 leading-snug"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            The story starts in antiquity.<br />It is still being written.
          </h2>
          <p
            className="text-base leading-relaxed mb-10"
            style={{ color: "var(--color-text-secondary)", maxWidth: "52ch" }}
          >
            Follow the guided route from the first secret messages to the
            mathematics that protects every secure connection you make today.
          </p>
          <Link
            href="/exhibits"
            className="inline-block px-10 py-3 text-[0.7rem] tracking-widest uppercase transition-colors"
            style={{
              border: "1px solid var(--color-accent)",
              color: "var(--color-accent)",
            }}
          >
            Begin the Exhibit Route
          </Link>
        </div>
      </section>
    </>
  );
}

